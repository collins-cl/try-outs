import ThemedText from "@/components/Themedtext";
import { ImageAssets } from "@/constants/imageData";
import { Image } from "expo-image";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

const GeneratedImages = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 16 }}>
                <ThemedText type="regular">My images</ThemedText>
            </View>

            <View
                style={{
                    marginTop: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                <FlatList
                    data={ImageAssets}
                    numColumns={3}
                    initialNumToRender={24}
                    maxToRenderPerBatch={24}
                    columnWrapperStyle={{ gap: 1 }}
                    contentContainerStyle={{ gap: 1 }}
                    scrollEnabled={false}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Pressable
                            style={({ pressed }) => ({
                                width: "33%",
                                height: 150,
                                backgroundColor: "red",
                                opacity: pressed && 0.8,
                            })}
                        >
                            <Image
                                source={item.image}
                                style={{ width: "100%", height: "100%" }}
                                contentFit="cover"
                                cachePolicy={"memory-disk"}
                            />
                        </Pressable>
                    )}
                />
            </View>
        </View>
    );
};

export default GeneratedImages;

const styles = StyleSheet.create({});
