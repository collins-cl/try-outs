import ThemedText from "@/components/Themedtext";
import { TrendingDataRoute } from "@/constants/imageData";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ImageGenFormsheet = () => {
    const { id } = useLocalSearchParams();
    const theme = useTheme();
    const { colors } = theme;
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { height: windowHeight } = useWindowDimensions();
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const data = TrendingDataRoute.find((el) => el.id === Number(id));

    const clippedDescription = (description, maxWords = 15) => {
        const words = description.trim().split(/\s+/);
        return words.length > maxWords
            ? `${words.slice(0, maxWords).join(" ")}...`
            : description;
    };

    if (!data) {
        return <ThemedText>data not found</ThemedText>;
    }


    return (
        <>
            <Stack.Screen
                options={{
                    sheetAllowedDetents: contentHeight
                        ? [Math.min(contentHeight / windowHeight, 1)]
                        : "fitToContents",
                }}
            />

            <View
                style={[
                    styles.container,
                    {
                        paddingBottom: expanded
                            ? insets.bottom + 64
                            : insets.bottom + 44,
                    },
                ]}
                onLayout={(e) => setContentHeight(e.nativeEvent.layout.height)}
            >
                <Stack.Toolbar placement="right">
                    <Stack.Toolbar.Button
                        icon="square.and.arrow.up"
                        separateBackground
                    />

                    <Stack.Toolbar.Button
                        icon="xmark"
                        separateBackground
                        onPress={() => router.back()}
                    />
                </Stack.Toolbar>

                <View style={styles.content}>
                    <View style={{ height: 300 }}>
                        <Image
                            source={data.image}
                            contentFit="cover"
                            style={StyleSheet.absoluteFill}
                        />
                    </View>

                    <View style={styles.textWrapper}>
                        <ThemedText
                            type="semiBold"
                            style={{
                                textAlign: "center",
                                fontFamily: "Inter_600SemiBold",
                                width: "90%",
                            }}
                        >
                            {data.title}
                        </ThemedText>

                        <Pressable
                            style={{ width: "90%" }}
                            onPress={() => setExpanded((prev) => !prev)}
                        >
                            <ThemedText
                                type="subtitle"
                                style={{
                                    textAlign: "center",
                                    fontFamily: "Inter_500Medium",
                                }}
                            >
                                {expanded
                                    ? data.description
                                    : clippedDescription(data.description)}
                            </ThemedText>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Pressable
                        style={[
                            styles.button,
                            {
                                borderColor: colors.border,
                                backgroundColor:
                                    theme.mode === "dark" && colors.card,
                            },
                        ]}
                    >
                        <ThemedText>Take a photo</ThemedText>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.button,
                            { backgroundColor: colors.text },
                        ]}
                    >
                        <ThemedText colorName="textInverted">
                            Choose a photo
                        </ThemedText>
                    </Pressable>
                </View>
            </View>
        </>
    );
};

export default ImageGenFormsheet;

const styles = StyleSheet.create({
    container: {
        gap: 35,
    },
    content: {
        gap: 28,
    },
    textWrapper: {
        alignItems: "center",
        paddingHorizontal: 16,
        gap: 16,
    },
    footer: {
        alignItems: "center",
        gap: 12,
    },
    button: {
        height: 50,
        width: "85%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
});
