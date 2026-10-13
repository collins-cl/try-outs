import GlassSurface from "@/components/GlassSurface";
import { StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FloatingInputPill = () => {
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    return (
        <View
            style={[styles.floatingPillWrapper, { bottom: insets.bottom }]}
            pointerEvents="box-none"
        >
            <GlassSurface
                glassStyle="regular"
                style={[styles.floatingPill, { width: width * 0.72 }]}
            >
                <TextInput placeholder="tap in here" />
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
