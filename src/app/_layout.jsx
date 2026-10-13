import DrawerMenu from "@/components/DrawerMenu";
import { ThemeProvider, useTheme } from "@/hooks/use-theme";
import {
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { ThemeProvider as NavigationThemeProvider } from "expo-router";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

SplashScreen.preventAutoHideAsync();

function RootNavigator() {
    const theme = useTheme();
    const { colors } = useTheme();
    const { width } = useWindowDimensions();

    return (
        <NavigationThemeProvider value={theme}>
            <Drawer
                drawerContent={(props) => <DrawerMenu {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerType: "back",
                    swipeEdgeWidth: width * 0.6,
                    drawerStyle: {
                        width: "75%",
                        backgroundColor: colors.background,
                    },
                    sceneStyle: {
                        backgroundColor: colors.background,
                    },
                    overlayColor: "transparent",
                }}
            >
                <Drawer.Screen name="(stack)" />
            </Drawer>
        </NavigationThemeProvider>
    );
}

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) SplashScreen.hideAsync();
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <KeyboardProvider>
                <ThemeProvider>
                    <RootNavigator />
                </ThemeProvider>
            </KeyboardProvider>
        </GestureHandlerRootView>
    );
}
