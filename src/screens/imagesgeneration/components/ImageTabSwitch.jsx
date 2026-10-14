import {
    ReverseTrendingDataRoute,
    TrendingDataRoute,
} from "@/constants/imageData";
import { View } from "react-native";
import TrendingItem from "./TrendingItem";

export const ImageTabSwitch = ({ tab }) => {
    switch (tab) {
        case "trending":
            return (
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 12,
                    }}
                >
                    {TrendingDataRoute &&
                        TrendingDataRoute.map((item) => (
                            <TrendingItem key={item.id} item={item} />
                        ))}
                </View>
            );
        case "templates":
            return (
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 12,
                    }}
                >
                    {ReverseTrendingDataRoute &&
                        ReverseTrendingDataRoute.map((item) => (
                            <TrendingItem key={item.id} item={item} />
                        ))}
                </View>
            );
        default:
            return null;
    }
};
