import { useDrawerProgress } from "expo-router/drawer";
import { Pressable, ScrollView } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BlurHeader from "./BlurHeader";
import ThemedText from "./Themedtext";

const ITEMS = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
];

const HEIGHT = 44;

const DrawerMenu = (props) => {
    const progress = useDrawerProgress();
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
            <BlurHeader top height={HEIGHT}>
                <ThemedText type="title">Koledev.</ThemedText>
            </BlurHeader>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: insets.top + HEIGHT * 1.25,
                    paddingHorizontal: 16,
                }}
            >
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

            <BlurHeader bottom height={HEIGHT}>
                <ThemedText>Helo</ThemedText>
            </BlurHeader>
        </Animated.View>
    );
};

export default DrawerMenu;
