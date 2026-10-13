import ThemedText from "@/components/Themedtext";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";
import TRIALIMAGE from "../../../assets/mockimages/70spotrait.jpeg";

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
                    gap: 1,
                }}
            >
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => ({
                        width: "33%",
                        height: 150,
                        backgroundColor: "red",
                        opacity: pressed && 0.8,
                    })}
                >
                    <Image
                        source={TRIALIMAGE}
                        style={{ width: "100%", height: "100%" }}
                        contentFit="cover"
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default GeneratedImages;

const styles = StyleSheet.create({});
