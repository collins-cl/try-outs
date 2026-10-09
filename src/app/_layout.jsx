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
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const theme = useTheme();

  return (
    <NavigationThemeProvider value={theme}>
      <Drawer
        drawerContent={(props) => <DrawerMenu {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
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
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
