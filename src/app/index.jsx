import ThemedText from "@/components/Themedtext";
import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const Home = () => {
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen options={{ headerTitle: "Home" }} />

      <ScrollView
        contentContainerStyle={styles.content}
        style={{ backgroundColor: colors.background }}
      >
        <ThemedText type="title">Hello</ThemedText>

        <ThemedText colorName="textMuted">
          Edit src/app/index.jsx to get started.
        </ThemedText>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    padding: 16,
    gap: 16,
  },
});
