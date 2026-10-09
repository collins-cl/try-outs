import { useTheme } from "@/hooks/use-theme";
import { MenuTwoLineIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Stack } from "expo-router";
import { DrawerActions, useNavigation } from "expo-router/react-navigation";
import { memo } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EDGES = ["bottom", "left", "top", "right"];

const DrawerToggle = memo(() => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Stack.Toolbar placement="left">
      <Stack.Toolbar.View>
        <Pressable
          hitSlop={10}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <HugeiconsIcon icon={MenuTwoLineIcon} color={colors.text} />
        </Pressable>
      </Stack.Toolbar.View>
    </Stack.Toolbar>
  );
});

DrawerToggle.displayName = "DrawerToggle";

const Screen = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <DrawerToggle />

      <SafeAreaView style={{ flex: 1 }} edges={EDGES}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default Screen;

// const styles = StyleSheet.create({});
