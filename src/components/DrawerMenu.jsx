import { useTheme } from "@/hooks/use-theme";
import { usePathname, useRouter } from "expo-router";
import { useDrawerProgress } from "expo-router/drawer";
import { SymbolView } from "expo-symbols";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ScreenStack,
  ScreenStackHeaderLeftView,
  ScreenStackHeaderRightView,
  ScreenStackItem,
} from "react-native-screens";
import ThemedText from "./Themedtext";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "Image", href: "/image" },
];

const DrawerMenu = (props) => {
  const pathname = usePathname();
  const { colors } = useTheme();
  const progress = useDrawerProgress();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const scaleDrawerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(progress.value, [0, 1], [0.98, 1]) }],
  }));

  return (
    <Animated.View style={[{ flex: 1 }, scaleDrawerStyle]}>
      {/* A real native navigation bar, so iOS draws its own scroll edge blur
          under the header, the same as `headerTransparent` on a Stack screen. */}
      <ScreenStack style={{ flex: 1 }}>
        <ScreenStackItem
          screenId="drawer-menu"
          activityState={2}
          style={StyleSheet.absoluteFill}
          contentStyle={{ backgroundColor: colors.background }}
          scrollEdgeEffects={{ top: "soft" }}
          headerConfig={{
            translucent: true,
            backgroundColor: "transparent",
            hideShadow: true,
            hideBackButton: true,
            children: (
              <>
                <ScreenStackHeaderLeftView hidesSharedBackground>
                  <ThemedText type="title" style={{ fontSize: 24 }}>
                    ChatGPT?
                  </ThemedText>
                </ScreenStackHeaderLeftView>

                <ScreenStackHeaderRightView>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Search"
                    hitSlop={10}
                    onPress={() => alert("hehe")}
                    style={styles.headerButton}
                  >
                    <SymbolView
                      name="magnifyingglass"
                      tintColor={colors.text}
                    />
                  </Pressable>
                </ScreenStackHeaderRightView>
              </>
            ),
          }}
        >
          {/* Must stay the screen's first child: iOS attaches the edge effect
              and the header inset to the first scroll view it finds. */}
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: insets.left + 16,
              paddingRight: insets.right + 16,
            }}
          >
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
            <ThemedText>Hello</ThemedText>
          </ScrollView>
        </ScreenStackItem>
      </ScreenStack>
    </Animated.View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  headerButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
