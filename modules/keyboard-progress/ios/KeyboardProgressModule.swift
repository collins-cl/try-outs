import ExpoModulesCore

import ExpoModulesCore
import UIKit
import QuartzCore

public class KeyboardProgressModule: Module {
    private var displayLink: CADisplayLink?

    private var startTime: CFTimeInterval = 0
    private var duration: CFTimeInterval = 0

    private var startHeight: CGFloat = 0
    private var targetHeight: CGFloat = 0
    private var currentHeight: CGFloat = 0

    private var isObserving = false

    public func definition() -> ModuleDefinition {
        Name("KeyboardProgress")

        Events("onKeyboardProgress")

        OnStartObserving {
            self.startObservingKeyboard()
        }

        OnStopObserving {
            self.stopObservingKeyboard()
        }
    }

    private func startObservingKeyboard() {
        guard !isObserving else { return }

        isObserving = true

        NotificationCenter.default.addObserver(
            self,
            selector: #selector(keyboardWillChangeFrame(_:)),
            name: UIResponder.keyboardWillChangeFrameNotification,
            object: nil
        )
    }

    private func stopObservingKeyboard() {
        isObserving = false

        NotificationCenter.default.removeObserver(
            self,
            name: UIResponder.keyboardWillChangeFrameNotification,
            object: nil
        )

        displayLink?.invalidate()
        displayLink = nil
    }

    @objc private func keyboardWillChangeFrame(
        _ notification: Notification
    ) {
        guard
            let userInfo = notification.userInfo,
            let endFrame = userInfo[
                UIResponder.keyboardFrameEndUserInfoKey
            ] as? CGRect
        else {
            return
        }

        let screenHeight = UIScreen.main.bounds.height

        let newHeight = max(
            0,
            min(screenHeight, screenHeight - endFrame.origin.y)
        )

        startHeight = currentHeight
        targetHeight = newHeight

        duration = (
            userInfo[
                UIResponder.keyboardAnimationDurationUserInfoKey
            ] as? NSNumber
        )?.doubleValue ?? 0.25

        startTime = CACurrentMediaTime()

        displayLink?.invalidate()
        displayLink = nil

        if duration <= 0 {
            currentHeight = targetHeight
            emitProgress(1)
            return
        }

        emitProgress(0)

        let link = CADisplayLink(
            target: self,
            selector: #selector(updateKeyboardProgress)
        )

        displayLink = link
        link.add(to: .main, forMode: .common)
    }

    @objc private func updateKeyboardProgress() {
        let elapsed = CACurrentMediaTime() - startTime

        let transitionProgress = min(
            1,
            max(0, elapsed / duration)
        )

        currentHeight = startHeight
            + (targetHeight - startHeight) * CGFloat(transitionProgress)

        emitProgress(transitionProgress)

        if transitionProgress >= 1 {
            currentHeight = targetHeight

            displayLink?.invalidate()
            displayLink = nil
        }
    }

    private func emitProgress(_ transitionProgress: Double) {
        let referenceHeight = max(
            startHeight,
            targetHeight,
            1
        )

        let normalizedProgress = min(
            1,
            max(0, Double(currentHeight / referenceHeight))
        )

        sendEvent("onKeyboardProgress", [
            "progress": normalizedProgress,
            "height": Double(currentHeight),
            "visible": currentHeight > 0
        ])
    }

    deinit {
        displayLink?.invalidate()

        NotificationCenter.default.removeObserver(self)
    }
}