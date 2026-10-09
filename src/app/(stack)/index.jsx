import Screen from "@/components/Screen";
import ThemedText from "@/components/Themedtext";
import { useTheme } from "@/hooks/use-theme";
import { BubbleChatTemporaryIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Stack } from "expo-router";
import { DrawerActions, useNavigation } from "expo-router/react-navigation";
import { Pressable, ScrollView, StyleSheet } from "react-native";

const Home = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Screen>
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="temporary chat"
            hitSlop={10}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <HugeiconsIcon icon={BubbleChatTemporaryIcon} color={colors.text} />
          </Pressable>
        </Stack.Toolbar.View>
      </Stack.Toolbar>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
      >
        <ThemedText>Hell</ThemedText>
      </ScrollView>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    padding: 16,
    gap: 16,
  },
});
