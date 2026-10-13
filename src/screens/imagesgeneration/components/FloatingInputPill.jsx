/* eslint-disable no-unused-vars */
import GlassSurface from "@/components/GlassSurface";
import { useKeyboardProgress } from "@/hooks/keyboard/useKeyboardProgress";
import { useTheme } from "@/hooks/use-theme";
import { AttachmentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View,
} from "react-native";
import Animated, {
    createAnimatedComponent,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedGlassSurface = createAnimatedComponent(GlassSurface);

const FloatingInputPill = () => {
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const [active, setActive] = useState(false);
    const { progress, height } = useKeyboardProgress();

    const keyboardPositionStyle = useAnimatedStyle(() => ({
        bottom: Math.max(insets.bottom, height.value + 8),
    }));

    const inputAnimatedStyle = useAnimatedStyle(() => {
        return {
            width: interpolate(
                progress.value,
                [0,  1],
                [width * 0.8,  width * 0.93],
            ),
        };
    });

    return (
        <Animated.View
            style={[styles.floatingPillWrapper, keyboardPositionStyle]}
            pointerEvents="box-none"
        >
            <AnimatedGlassSurface
                glassStyle="regular"
                style={[styles.floatingPill, inputAnimatedStyle]}
            >
                <View style={[styles.sectionView, styles.inputSection]}>
                    <Pressable style={styles.attachmentButton}>
                        <HugeiconsIcon
                            icon={AttachmentIcon}
                            color={colors.text}
                            size={20}
                            strokeWidth={2.5}
                        />
                    </Pressable>

                    <TextInput
                        placeholder="Describe an image"
                        placeholderTextColor={colors.textMuted}
                        onFocus={() => setActive(true)}
                        style={[styles.input, { color: colors.text }]}
                    />
                </View>

                <View style={[styles.sectionView, styles.actionSection]}>
                    <Pressable style={styles.microphoneButton}>
                        <SymbolView
                            name="microphone"
                            tintColor={colors.text}
                            weight="semibold"
                        />
                    </Pressable>

                    <Pressable style={styles.sendButton}>
                        <SymbolView
                            name="arrow.up"
                            tintColor={colors.text}
                            weight="semibold"
                            size={18}
                        />
                    </Pressable>
                </View>
            </AnimatedGlassSurface>
        </Animated.View>
    );
};

export default FloatingInputPill;

const styles = StyleSheet.create({
    floatingPillWrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
    },

    floatingPill: {
        borderRadius: 999,
        minHeight: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 8,
    },

    sectionView: {
        flexDirection: "row",
        alignItems: "center",
    },
    inputSection: {
        flex: 1,
        minWidth: 0,
    },
    input: {
        flex: 1,
        minWidth: 0,
        height: 50,
        fontSize: 18,
    },
    actionSection: {
        flexShrink: 0,
    },
    attachmentButton: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    microphoneButton: {
        width: 55,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    sendButton: {
        width: 35,
        height: 35,
        borderRadius: 999,
        backgroundColor: "#E0E1E6",
        justifyContent: "center",
        alignItems: "center",
    },
});
