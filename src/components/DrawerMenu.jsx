import { useTheme } from "@/hooks/use-theme";
import { usePathname, useRouter } from "expo-router";
import { useDrawerProgress } from "expo-router/drawer";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BlurHeader from "./BlurHeader";
import IconButton from "./IconButton";
import ThemedText from "./Themedtext";

const ITEMS = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
];

const HEIGHT = 44;

const DrawerMenu = (props) => {
    const progress = useDrawerProgress();
    const insets = useSafeAreaInsets();
    const pathName = usePathname();
    const router = useRouter();
    const { colors } = useTheme();

    const scaleDrawerStyle = useAnimatedStyle(() => ({
        transform: [{ scale: interpolate(progress.value, [0, 1], [0.98, 1]) }],
    }));

    const homeURL = ITEMS.map((el) => el.href);

    const go = (href) => {
        props.navigation.closeDrawer();
        if (href === pathName) return;
        router.replace(href);
    };

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
                <Pressable onPress={() => go(homeURL[0])}>
                    <ThemedText type="title">Koledev.</ThemedText>
                </Pressable>
            </BlurHeader>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: insets.top + HEIGHT * 1.25,
                    paddingHorizontal: 8,
                    gap: 6,
                }}
            >
                {ITEMS.map((item) => {
                    const pathname = item.href === pathName;
                    return (
                        <Pressable
                            key={item.label}
                            onPress={() => go(item.href)}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pathname
                                        ? colors.surfaceSelected
                                        : null,
                                },
                                styles.drawerItemList,
                            ]}
                        >
                            <ThemedText type="regular">{item.label}</ThemedText>
                        </Pressable>
                    );
                })}
            </ScrollView>

            <BlurHeader bottom height={HEIGHT}>
                <IconButton onPress={() => router.push("/popover")}>
                    <ThemedText>Hello</ThemedText>
                </IconButton>
            </BlurHeader>
        </Animated.View>
    );
};

export default DrawerMenu;

const styles = StyleSheet.create({
    drawerItemList: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
});
