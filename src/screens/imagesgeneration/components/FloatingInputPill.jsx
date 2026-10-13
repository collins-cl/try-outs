import GlassSurface from "@/components/GlassSurface";
import { useKeyboardProgress } from "@/hooks/keyboard/useKeyboardProgress";
import { useState } from "react";
import { StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FloatingInputPill = () => {
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const [active, setActive] = useState(false);
    // const { progress } = useKeyboardProgress();


    // console.log(progress);

    return (
        <View
            style={[styles.floatingPillWrapper, { bottom: insets.bottom }]}
            pointerEvents="box-none"
        >
            <GlassSurface
                glassStyle="regular"
                style={[styles.floatingPill, { width: width * 0.8 }]}
            >
                <TextInput
                    placeholder="tap in here"
                    onFocus={() => setActive(true)}
                    style={{ flex: 1 }}
                />
            </GlassSurface>
        </View>
    );
};

export default FloatingInputPill;

const styles = StyleSheet.create({
    floatingPillWrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
    },

    floatingPill: {
        paddingHorizontal: 20,
        borderRadius: 999,
        minHeight: 44,
        flexDirection: "row",
        alignItems: "center",
    },
});
