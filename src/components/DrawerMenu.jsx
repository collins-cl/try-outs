import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { usePathname, useRouter } from "expo-router";
import { useDrawerProgress } from "expo-router/drawer";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BlurHeader from "./BlurviewHeader";
import ThemedText from "./Themedtext";

const ITEMS = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
];

const DrawerMenu = (props) => {
    const pathname = usePathname();
    const { colors } = useTheme();
    const progress = useDrawerProgress();
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const scaleDrawerStyle = useAnimatedStyle(() => ({
        transform: [{ scale: interpolate(progress.value, [0, 1], [0.98, 1]) }],
    }));

    return (
        <Animated.View
            style={[
                {
                    flex: 1,
                },
                scaleDrawerStyle,
            ]}
        >
            <LinearGradient
                colors={colors.gradient}
                locations={[0, 0.35, 0.72, 1]}
                pointerEvents="none"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 120,
                    width: "100%",
                }}
            />
            <DrawerHeader />

            <ScrollView contentContainerStyle={{ paddingTop: 60 }}>
                {ITEMS.map((item) => (
                    <Pressable key={item.label}>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                        <ThemedText>{item.label}</ThemedText>
                    </Pressable>
                ))}
            </ScrollView>
        </Animated.View>
    );
};

const DrawerHeader = () => {
    return (
        <BlurHeader>
            <ThemedText>Helo</ThemedText>
        </BlurHeader>
    );
};

export default DrawerMenu;

const styles = StyleSheet.create({
    headerButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
    },
});
