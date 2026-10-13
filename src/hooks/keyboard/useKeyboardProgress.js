import { useEffect, useState } from "react";
import KeyboardProgress from "../../../modules/keyboard-progress";

export function useKeyboardProgress() {
    const [keyboard, setKeyboard] = useState({
        progress: 0,
        height: 0,
        visible: false,
    });

    useEffect(() => {
        const subscription = KeyboardProgress.addListener(
            "onKeyboardProgress",
            (event) => {
                setKeyboard(event);
            },
        );

        return () => subscription.remove();
    }, []);

    return keyboard;
}
