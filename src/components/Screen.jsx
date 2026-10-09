import { useTheme } from "@/hooks/use-theme";
import { MenuTwoLineIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Stack } from "expo-router";
import { DrawerActions, useNavigation } from "expo-router/react-navigation";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EDGES = ["bottom", "left", "top", "right"];

const Screen = ({ children, rightToolbar = false }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Toolbar placement="left">
        <Stack.Toolbar.View>
          <Pressable
            hitSlop={2}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <HugeiconsIcon icon={MenuTwoLineIcon} color={colors.text} />
          </Pressable>
        </Stack.Toolbar.View>
      </Stack.Toolbar>

      {rightToolbar && (
        <Stack.Toolbar placement="right">
          <Stack.Toolbar.View>
            <Pressable
              hitSlop={2}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <HugeiconsIcon icon={MenuTwoLineIcon} color={colors.text} />
            </Pressable>
          </Stack.Toolbar.View>
        </Stack.Toolbar>
      )}

      <SafeAreaView style={{ flex: 1 }} edges={EDGES}>
        <View
          style={{
            flex: 1,
          }}
        >
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
