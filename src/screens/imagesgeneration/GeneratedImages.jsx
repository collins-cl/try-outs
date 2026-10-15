import ThemedText from "@/components/Themedtext";
import { ImageAssets } from "@/constants/imageData";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const GAP = 2;

const GeneratedImages = () => {
    const [gridWidth, setGridWidth] = useState(0);
    const calculatedWidth = (gridWidth - GAP * 2) / 3;

    return (
        <View style={{ width: "100%" }}>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                <ThemedText type="regular">My images</ThemedText>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    gap: GAP,
                }}
                onLayout={({ nativeEvent }) =>
                    setGridWidth(nativeEvent.layout.width)
                }
            >
                {ImageAssets.map((item) => (
                    <View
                        key={item.id}
                        style={{
                            width: gridWidth ? calculatedWidth : "32%",
                            height: 150,
                        }}
                    >
                        <Link href={`/image/imagepreview/${item.id}`} asChild>
                            <Link.Trigger>
                                <Pressable style={styles.tile}>
                                    <Image
                                        source={item.image}
                                        style={styles.image}
                                        contentFit="cover"
                                    />
                                </Pressable>
                            </Link.Trigger>

                            <Link.Preview>
                                <View style={StyleSheet.absoluteFill}>
                                    <Image
                                        source={item.image}
                                        contentFit="cover"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                        cachePolicy={"memory-disk"}
                                    />
                                </View>
                            </Link.Preview>
                        </Link>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default GeneratedImages;

const styles = {
    tile: {
        width: "100%",
        height: 150,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
};
