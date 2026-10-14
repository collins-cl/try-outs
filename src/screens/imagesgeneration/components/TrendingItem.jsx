import ThemedText from "@/components/Themedtext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const HorizontalPadding = 32;
const gap = 12;

const TrendingItem = ({ item }) => {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const availableWidth = width - HorizontalPadding;
    const calculatedWidth = (availableWidth - gap) / 2;

    return (
        <Pressable
            onPress={() => router.push(`/image/${item.id}`)}
            style={({ pressed }) => [
                styles.itemCard,
                {
                    opacity: pressed && 0.6,
                    width: calculatedWidth,
                },
            ]}
        >
            <View style={styles.card}>
                <Animated.View
                    entering={FadeIn.duration(150)}
                    style={StyleSheet.absoluteFill}
                >
                    <Image
                        source={item.thumbImage}
                        contentFit="cover"
                        style={{ width: "100%", height: "100%" }}
                        cachePolicy={"memory-disk"}
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

export default TrendingItem;

const styles = StyleSheet.create({
    itemCard: {
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
