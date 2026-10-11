import { useTheme } from "@/hooks/use-theme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BlurHeader({
    children,
    height,
    blurIntensity = 5,
    top = false,
    bottom = false,
}) {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();

    return (
        <View
            style={[
                styles.container,
                {
                    height: top
                        ? height + insets.top
                        : height + insets.bottom + 20,
                    top: top && 0,
                    bottom: bottom && 0,
                },
            ]}
            pointerEvents="box-none"
        >
            <BlurView
                intensity={blurIntensity}
                tint={colors.blurTint}
                style={StyleSheet.absoluteFill}
            />

            <LinearGradient
                colors={colors.gradient}
                locations={top ? [0, 0.35, 0.72, 1] : [1, 0.72, 0.35, 0]}
                style={StyleSheet.absoluteFill}
                pointerEvents="none"
            />

            <View
                style={[
                    styles.content,
                    {
                        height: height + 12,
                        marginTop: top && insets.top,
                        marginBottom: bottom && insets.bottom,
                    },
                ]}
            >
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 100,
        overflow: "hidden",
    },
    content: {
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "red",
    },
});
