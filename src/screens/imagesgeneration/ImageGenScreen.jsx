import DrawerToggle from "@/components/DrawerToggle";
import GlassSurface from "@/components/GlassSurface";
import Icon from "@/components/Icon";
import Screen from "@/components/Screen";
import ThemedText from "@/components/Themedtext";
import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import FloatingInputPill from "./components/FloatingInputPill";
import { ImageTabSwitch } from "./components/ImageTabSwitch";

const Image = () => {
    const { colors } = useTheme();
    const [infoActive, setInfoActive] = useState(true);
    const [activeTab, setActiveTab] = useState("trending");
    return (
        <View style={styles.screenRoot}>
            <KeyboardAvoidingView
                style={styles.screenRoot}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={-25}
            >
                <Screen>
                    <DrawerToggle />
                    <Stack.Screen options={{ headerTitle: "Images" }} />

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentInsetAdjustmentBehavior="automatic"
                    >
                        <View style={{ paddingHorizontal: 16 }}>
                            {infoActive && (
                                <GlassSurface style={styles.infoCard}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: 16,
                                        }}
                                    >
                                        <Icon
                                            name="library"
                                            tintColor={colors.text}
                                            size={18}
                                        />

                                        <View style={{ width: "80%", gap: 6 }}>
                                            <ThemedText type="subtitle">
                                                Your generated images moved to
                                                Library
                                            </ThemedText>

                                            <ThemedText
                                                type="caption"
                                                colorName="textMuted"
                                            >
                                                You can now find your generated
                                                images in the Library tab from
                                                the sidebar
                                            </ThemedText>
                                        </View>
                                    </View>

                                    <Pressable
                                        onPress={() => setInfoActive(false)}
                                    >
                                        <Icon
                                            name={"cancel"}
                                            tintColor={colors.text}
                                            size={14}
                                        />
                                    </Pressable>
                                </GlassSurface>
                            )}

                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{
                                    marginTop: 20,
                                }}
                                contentContainerStyle={{ gap: 6 }}
                            >
                                <Pressable
                                    onPress={() => setActiveTab("trending")}
                                    style={[
                                        styles.tabButtons,
                                        {
                                            backgroundColor:
                                                activeTab === "trending"
                                                    ? colors.surface
                                                    : null,
                                        },
                                    ]}
                                >
                                    <ThemedText
                                        type="semiBold"
                                        style={{
                                            color:
                                                activeTab === "trending"
                                                    ? colors.text
                                                    : colors.textMuted,
                                        }}
                                    >
                                        Trending
                                    </ThemedText>
                                </Pressable>

                                <Pressable
                                    onPress={() => setActiveTab("templates")}
                                    style={[
                                        styles.tabButtons,
                                        {
                                            backgroundColor:
                                                activeTab === "templates"
                                                    ? colors.surface
                                                    : null,
                                        },
                                    ]}
                                >
                                    <ThemedText
                                        type="semiBold"
                                        style={{
                                            color:
                                                activeTab === "templates"
                                                    ? colors.text
                                                    : colors.textMuted,
                                        }}
                                    >
                                        Templates
                                    </ThemedText>
                                </Pressable>
                            </ScrollView>

                            <View style={{ marginTop: 20 }}>
                                <ImageTabSwitch tab={activeTab} />
                            </View>
                        </View>
                    </ScrollView>
                </Screen>
            </KeyboardAvoidingView>
            <FloatingInputPill />
        </View>
    );
};

export default Image;

const styles = StyleSheet.create({
    screenRoot: {
        flex: 1,
    },

    infoCard: {
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },

    tabButtons: {
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22.5,
        height: 45,
    },
});
