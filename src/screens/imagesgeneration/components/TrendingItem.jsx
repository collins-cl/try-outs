import ThemedText from "@/components/Themedtext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const TrendingItem = ({ item }) => {
    const router = useRouter();

    return (
        <Pressable
            onPress={() => router.push(`/image/${item.id}`)}
            style={({ pressed }) => (
                {
                    opacity: pressed && 0.6,
                },
                styles.itemCard
            )}
        >
            <View style={styles.card}>
                <Animated.View
                    entering={FadeIn.duration(100)}
                    style={StyleSheet.absoluteFill}
                >
                    <Image
                        source={item.thumbImage}
                        contentFit="cover"
                        style={StyleSheet.absoluteFill}
                        cachePolicy={"memory-disk"}
                        transition={150}
                    />
                </Animated.View>

                <ThemedText
                    type="subtitle"
                    style={{
                        color: "white",
                        fontFamily: "Inter_700Bold",
                    }}
                >
                    {item.name}
                </ThemedText>
            </View>
        </Pressable>
    );
};

export default memo(TrendingItem);

const styles = StyleSheet.create({
    itemCard: {
        width: "48%",
        height: 220,
        borderRadius: 22,
        overflow: "hidden",
    },

    card: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 16,
        justifyContent: "flex-end",
    },
});
