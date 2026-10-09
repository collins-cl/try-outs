import { Stack, useTheme } from "expo-router";
import { useDrawerProgress } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const OPEN_RADIUS = 55;
const OPEN_DIM = 0.12;

const StackLayout = () => {
  const { colors } = useTheme();
  const progress = useDrawerProgress();

  const animatedRadius = useAnimatedStyle(() => ({
    borderRadius: interpolate(progress.value, [0, 1], [0, OPEN_RADIUS]),
  }));

  const animatedDim = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0, OPEN_DIM]),
  }));

  return (
    <Animated.View style={[styles.container, animatedRadius]}>
      <Stack
        screenOptions={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />

      {/* Tints the screen while the drawer is open so it reads as a card. */}
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: colors.text },
          animatedRadius,
          animatedDim,
        ]}
      />
    </Animated.View>
  );
};

export default StackLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    borderCurve: "continuous",
  },
});
