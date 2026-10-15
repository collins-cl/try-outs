import { Stack, useTheme } from "expo-router";
import { useDrawerProgress } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";

const OPEN_RADIUS = 55;
const OPEN_DIM = 0.07;

const StackLayout = () => {
    const { colors } = useTheme();
    const progress = useDrawerProgress();

    const animatedRadius = useAnimatedStyle(() => ({
        borderRadius: interpolate(progress.value, [0, 1], [0, OPEN_RADIUS]),
    }));

    const animatedDim = useAnimatedStyle(() => ({
        opacity: interpolate(progress.value, [0, 1], [0, OPEN_DIM]),
    }));

    return (
        <Animated.View style={[styles.container, animatedRadius, {}]}>
            <Stack
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: "",
                }}
            >
                <Stack.Screen name="index" options={{ animation: "none" }} />

                <Stack.Screen name="image" options={{ animation: "none" }} />

                <Stack.Screen
                    name="image/[id]"
                    options={{
                        presentation: "formSheet",
                        contentStyle: { backgroundColor: colors.background },
                        sheetGrabberVisible: false,
                    }}
                />

                <Stack.Screen
                    name="popover/[id]"
                    options={{
                        presentation: "formSheet",
                        sheetAllowedDetents: [0.5],
                        sheetGrabberVisible: true,
                        sheetCornerRadius: 24,
                    }}
                />
            </Stack>

            <Animated.View
                pointerEvents="none"
                style={[
                    StyleSheet.absoluteFill,
                    { backgroundColor: colors.text },
                    animatedRadius,
                    animatedDim,
                ]}
            />
        </Animated.View>
    );
};

export default StackLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
        borderCurve: "continuous",
    },
});
