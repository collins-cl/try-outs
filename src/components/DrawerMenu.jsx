import { useTheme } from "@/hooks/use-theme";
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
            <BlurHeader top>
                <ThemedText>Helo</ThemedText>
            </BlurHeader>

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

            <BlurHeader bottom>
                <ThemedText>Helo</ThemedText>
            </BlurHeader>
        </Animated.View>
    );
};

// const DrawerHeader = () => {
//     return (
//         <BlurHeader top bottom>
//             <ThemedText>Helo</ThemedText>
//         </BlurHeader>
//     );
// };

export default DrawerMenu;

const styles = StyleSheet.create({
    headerButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
    },
});
