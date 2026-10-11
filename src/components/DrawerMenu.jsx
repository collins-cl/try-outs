import { DRAWER_MAIN_ITEMS } from "@/constants/drawerMenuItems";
import { usePathname, useRouter } from "expo-router";
import { useDrawerProgress } from "expo-router/drawer";
import { Pressable, ScrollView } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BlurHeader from "./BlurHeader";
import DrawerItem from "./DrawerItem";
import IconButton from "./IconButton";
import ThemedText from "./Themedtext";

const HEIGHT = 44;

const DrawerMenu = (props) => {
    const progress = useDrawerProgress();
    const insets = useSafeAreaInsets();
    const pathName = usePathname();
    const router = useRouter();

    const scaleDrawerStyle = useAnimatedStyle(() => ({
        transform: [{ scale: interpolate(progress.value, [0, 1], [0.98, 1]) }],
    }));

    // const homeURL = DRAWER_MAIN_ITEMS.map((el) => el.href);

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
                <Pressable
                    onPress={() => {
                        props.navigation.closeDrawer();
                        router.replace("/");
                    }}
                >
                    <ThemedText type="title">Kole.</ThemedText>
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
                {DRAWER_MAIN_ITEMS.map((item) => {
                    const pathname = item.href === pathName;
                    return (
                        <DrawerItem
                            pathname={pathname}
                            key={item.label}
                            item={item}
                            props={props}
                        />
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
