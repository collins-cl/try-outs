import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EDGES = ["bottom", "left", "top", "right"];

const Screen = ({ children }) => {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <SafeAreaView style={{ flex: 1 }} edges={EDGES}>
                {children}
            </SafeAreaView>
        </View>
    );
};

export default Screen;
