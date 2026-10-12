import ThemedText from "@/components/Themedtext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { createAnimatedComponent, FadeIn } from "react-native-reanimated";

const AnimatedImage = createAnimatedComponent(Image);

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
                <AnimatedImage
                    entering={FadeIn.duration(150)}
                    source={item.image}
                    contentFit="cover"
                    style={{
                        ...StyleSheet.absoluteFill,
                    }}
                />

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
        width: "48%",
        height: 220,
        borderRadius: 20,
        overflow: "hidden",
    },

    card: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 16,
        justifyContent: "flex-end",
    },
});
