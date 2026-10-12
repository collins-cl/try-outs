import ThemedText from "@/components/Themedtext";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";
import { createAnimatedComponent, FadeIn } from "react-native-reanimated";
import Logo from "../../../../assets/mockimages/3davatar.jpeg";

const AnimatedImage = createAnimatedComponent(Image);

export const ImageTabSwitch = ({ tab }) => {
    switch (tab) {
        case "trending":
            return (
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 14,
                    }}
                >
                    <Pressable
                        style={{
                            width: "48%",
                            height: 220,
                            borderRadius: 20,
                            overflow: "hidden",
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 12,
                                paddingVertical: 16,
                                justifyContent: "flex-end",
                            }}
                        >
                            <AnimatedImage
                                entering={FadeIn.duration(150)}
                                source={Logo}
                                contentFit="cover"
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                            />

                            <ThemedText
                                type="subtitle"
                                style={{
                                    color: "white",
                                    fontFamily: "Inter_600SemiBold",
                                }}
                            >
                                Aerial View
                            </ThemedText>
                        </View>
                    </Pressable>
                </View>
            );
        case "templates":
            return <ThemedText>templates</ThemedText>;
        default:
            return null;
    }
};
