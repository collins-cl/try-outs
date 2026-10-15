import ThemedText from "@/components/Themedtext";
import { TrendingDataRoute } from "@/constants/imageData";
import { useTheme } from "@/hooks/use-theme";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ImagePreviewScreen = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();
    const imgPrev = TrendingDataRoute.find((el) => el.id === Number(id));

    const handleShare = () => {
        router.back();
    };

    if (imgPrev) {
        console.log("true");
    }

    return (
        <View style={{ flex: 1 }}>
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

            <View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        backgroundColor: colors.card,
                    },
                ]}
            >
                <View
                    style={{
                        flex: 1,
                        marginTop: insets.top + 64,
                        marginBottom: insets.bottom + 64,
                        backgroundColor: "black",
                    }}
                >
                    <ThemedText>{imgPrev.id}</ThemedText>
                </View>
            </View>
        </View>
    );
};

export default ImagePreviewScreen;
