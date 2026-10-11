import { HugeIcons } from "@/constants/hugeiconsSymbols";
import { Symbols } from "@/constants/sfSymbols";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { SymbolView } from "expo-symbols";
import { Platform } from "react-native";

const Icon = ({ name, size, tintColor, weight }) => {
    const platform = Platform.OS;
    const iossymbol = Symbols[name];

    if (platform !== "ios") {
        const symbol = HugeIcons[name];
        return (
            <HugeiconsIcon
                icon={symbol}
                size={size}
                color={tintColor}
                strokeWidth={weight}
            />
        );
    }

    return (
        <SymbolView
            name={iossymbol}
            size={size}
            tintColor={tintColor}
            weight={weight}
        />
    );
};

export default Icon;
