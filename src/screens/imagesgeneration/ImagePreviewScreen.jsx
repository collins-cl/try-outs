import BlurHeader from "@/components/BlurHeader";
import IconButton from "@/components/IconButton";
import ThemedText from "@/components/Themedtext";
import { TrendingDataRoute } from "@/constants/imageData";
import { useTheme } from "@/hooks/use-theme";
import { MessageCirclePlusIcon, Resize } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ImagePreviewScreen = () => {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();
    const imgPrev = TrendingDataRoute.find((el) => el.id === Number(id));
    const router = useRouter();

    if (!imgPrev) {
        return null;
    }

    return (
        <Animated.View style={[{ flex: 1 }]}>
            <BlurHeader top height={insets.top + 20} blurIntensity={30} />
            <Stack.Toolbar placement="left">
                <Stack.Toolbar.Button
                    icon={"xmark"}
                    onPress={() => router.back()}
                />
            </Stack.Toolbar>
            <Stack.Toolbar placement="right">
                <Stack.Toolbar.Button
                    icon={"ellipsis"}
                    separateBackground
                    onPress={() => router.back()}
                />

                <Stack.Toolbar.Button
                    icon={"square.and.arrow.down"}
                    separateBackground
                    onPress={() => router.back()}
                />

                <Stack.Toolbar.Button variant="prominent" tintColor={"white"}>
                    Share
                </Stack.Toolbar.Button>
            </Stack.Toolbar>
            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        backgroundColor: colors.background,
                    },
                    ,
                ]}
            >
                <View
                    style={{
                        flex: 1,
                        marginTop: insets.top + 64,
                        marginBottom: insets.bottom + 64,
                        backgroundColor: colors.background,
                    }}
                >
                    <View
                        style={{ backgroundColor: colors.background, flex: 1 }}
                    >
                        <Image
                            source={imgPrev.image}
                            contentFit="contain"
                            style={StyleSheet.absoluteFill}
                            cachePolicy={"memory-disk"}
                        />
                    </View>
                </View>
            </Animated.View>
            <BlurHeader
                bottom
                height={insets.bottom + 30}
                blurIntensity={30}
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        width: "80%",
                        height: 80,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        paddingHorizontal: 16,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <IconButton>
                            <HugeiconsIcon
                                icon={MessageCirclePlusIcon}
                                color={colors.text}
                            />
                        </IconButton>
                        <ThemedText>Edit</ThemedText>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <IconButton>
                            <HugeiconsIcon
                                icon={Resize}
                                color={colors.text}
                            />
                        </IconButton>
                        <ThemedText>Resize</ThemedText>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <IconButton>
                            <SymbolView
                                name={"eraser"}
                                tintColor={colors.text}
                            />
                        </IconButton>
                        <ThemedText>Remove</ThemedText>
                    </View>
                </View>
            </BlurHeader>
        </Animated.View>
    );
};

export default ImagePreviewScreen;
