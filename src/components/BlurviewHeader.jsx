import { useTheme } from "@/hooks/use-theme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BlurHeader({
    children,
    height = 60,
    blurIntensity = 3,
}) {
    const insets = useSafeAreaInsets();
    const { mode, colors } = useTheme();
    const backgroundColor = colors.background;

    return (
        <View
            style={[
                styles.container,
                {
                    height: height + insets.top,
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
                locations={[0, 0.35, 0.72, 1]}
                style={StyleSheet.absoluteFill}
                pointerEvents="none"
            />

            <View
                style={[
                    styles.content,
                    {
                        height,
                        marginTop: insets.top,
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
        top: 0,
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
    },
});
