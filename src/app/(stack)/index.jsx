import Screen from "@/components/Screen";
import ThemedText from "@/components/Themedtext";
import { useTheme } from "@/hooks/use-theme";
import { useNavigation } from "expo-router/react-navigation";
import { ScrollView, StyleSheet } from "react-native";

const Home = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Screen rightToolbar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
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
