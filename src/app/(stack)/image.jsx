import DrawerToggle from "@/components/DrawerToggle";
import Screen from "@/components/Screen";
import ThemedText from "@/components/Themedtext";
import { usePathname } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const Image = () => {
    const pathName = usePathname();
    return (
        <Screen>
            <DrawerToggle />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.content}
            >
                <ThemedText>{pathName}</ThemedText>
            </ScrollView>
        </Screen>
    );
};

export default Image;

const styles = StyleSheet.create({});
