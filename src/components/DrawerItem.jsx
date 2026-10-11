import { useTheme } from "@/hooks/use-theme";
import { usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Icon from "./Icon";
import ThemedText from "./Themedtext";

const DrawerItem = ({ item, props, pathname }) => {
    const pathName = usePathname();
    const router = useRouter();
    const { colors } = useTheme();

    const go = (href) => {
        props.navigation.closeDrawer();
        if (href === pathName) return;
        router.replace(href);
    };
    return (
        <Pressable
            key={item.label}
            onPress={() => go(item.href)}
            style={({ pressed }) => [
                {
                    backgroundColor: pathname ? colors.card : null,
                },
                styles.drawerItemList,
            ]}
        >
            {item.icon && (
                <Icon
                    name={item.icon}
                    size={22}
                    tintColor={colors.text}
                    weight="bold"
                />
            )}

            <ThemedText type="semiBold">{item.label}</ThemedText>
        </Pressable>
    );
};

export default DrawerItem;

const styles = StyleSheet.create({
    drawerItemList: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        paddingHorizontal: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
});
