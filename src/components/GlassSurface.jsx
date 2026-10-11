import { GlassView } from "expo-glass-effect";

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
