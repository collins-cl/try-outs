import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, View } from "react-native";

/**
 * A bar pinned to the top or bottom of its parent that scrolling content
 * fades out underneath: solid behind `children`, then a gradient to clear.
 *
 * The parent needs `flex: 1` (or a fixed size), and the scroll view beside it
 * needs matching content padding so its first/last rows aren't hidden.
 */
const EdgeFade = ({ edge = "top", fade = 48, color, style, children }) => {
  const { colors } = useTheme();
  const solid = color ?? colors.background;
  // Same colour at zero alpha; fading to "transparent" would grey the midpoint.
  const clear = `${solid}00`;
  const isTop = edge === "top";

  const gradient = (
    <View
      style={{
        height: fade,
        pointerEvents: "none",
        experimental_backgroundImage: `linear-gradient(to ${isTop ? "bottom" : "top"}, ${solid}, ${clear})`,
      }}
    />
  );

  return (
    <View style={[styles.bar, isTop ? styles.top : styles.bottom]}>
      {!isTop && gradient}
      <View style={[{ backgroundColor: solid }, style]}>{children}</View>
      {isTop && gradient}
    </View>
  );
};

export default EdgeFade;

const styles = StyleSheet.create({
  bar: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
    // Touches in the faded strip fall through to the list below.
    pointerEvents: "box-none",
  },
  top: { top: 0 },
  bottom: { bottom: 0 },
});
