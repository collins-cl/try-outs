import { Pressable, StyleSheet } from "react-native";
import GlassSurface from "./GlassSurface";

const IconButton = ({ children, onPress }) => {
  return (
    <Pressable
      role="button"
      accessibilityRole="button"
      hitSlop={10}
      onPress={onPress}
    >
      <GlassSurface style={styles.buttonStyle}>{children}</GlassSurface>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
});
