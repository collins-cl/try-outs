import { GlassView } from "expo-glass-effect";
import { StyleSheet } from "react-native";

const GlassSurface = ({
  style,
  children,
  interactive = true,
  glassStyle = "regular",
}) => {
  return (
    <GlassView
      isInteractive={interactive}
      glassEffectStyle={glassStyle}
      style={style}
    >
      {children}
    </GlassView>
  );
};

export default GlassSurface;

const styles = StyleSheet.create({});
