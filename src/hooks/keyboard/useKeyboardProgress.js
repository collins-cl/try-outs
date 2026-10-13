import { useEffect } from "react";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import { useSharedValue } from "react-native-reanimated";
import KeyboardProgress from "../../../modules/keyboard-progress";

export function useKeyboardProgress() {
    const progress = useSharedValue(0);
    const height = useSharedValue(0);

    useKeyboardHandler(
        {
            onMove: (event) => {
                "worklet";
                height.value = Math.max(event.height, 0);
            },
        },
        [],
    );

    useEffect(() => {
        const subscription = KeyboardProgress.addListener(
            "onKeyboardProgress",
            (event) => {
                progress.value = event.progress;
            },
        );

        return () => subscription.remove();
    }, [progress]);

    return { progress, height };
}
