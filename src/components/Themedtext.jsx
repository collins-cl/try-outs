import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text } from "react-native";

export default function ThemedText({
  style,
  colorName = "text",
  type = "default",
  ...rest
}) {
  const { colors } = useTheme();
  const textColor = { color: colors[colorName] ?? colors.text };

  return (
    <Text
      style={[textColor, styles[type], style]}
      {...rest}
      maxFontSizeMultiplier={1.5}
    />
  );
}

const styles = StyleSheet.create({
  caption: { fontSize: 12, fontFamily: "Inter_500Medium" },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular" },
  default: { fontSize: 16, fontFamily: "Inter_400Regular" },
  regular: { fontSize: 17, fontFamily: "Inter_400Regular" },
  semiBold: { fontSize: 17, fontFamily: "Inter_600SemiBold" },
  bold: { fontSize: 20, fontFamily: "Inter_700Bold" },
  title: { fontSize: 22, fontFamily: "Inter_700Bold" },
  largeTitle: { fontSize: 34, fontFamily: "Inter_700Bold" },
  tabLabel: { fontSize: 10, fontFamily: "Inter_600SemiBold" },
  footnote: { fontSize: 13, fontFamily: "Inter_400Regular" },
  body: { fontSize: 15, fontFamily: "Inter_400Regular" },
  wordmark: {
    fontSize: 48,
    fontFamily: "BricolageGrotesque_700Bold",
    letterSpacing: -1.5,
  },
});
