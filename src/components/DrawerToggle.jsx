import { useTheme } from "@/hooks/use-theme";
import { MenuTwoLineIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Stack } from "expo-router";
import { DrawerActions, useNavigation } from "expo-router/react-navigation";
import { memo } from "react";
import { Pressable } from "react-native";

const DrawerToggle = memo(function DrawerToggle() {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <Stack.Toolbar placement="left">
            <Stack.Toolbar.View>
                <Pressable
                    hitSlop={10}
                    onPress={() =>
                        navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                >
                    <HugeiconsIcon icon={MenuTwoLineIcon} color={colors.text} />
                </Pressable>
            </Stack.Toolbar.View>
        </Stack.Toolbar>
    );
});

DrawerToggle.displayName = "DrawerToggle";

export default DrawerToggle;
