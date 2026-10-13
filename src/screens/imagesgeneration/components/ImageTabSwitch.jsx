import {
    ReverseTrendingDataRoute,
    TrendingDataRoute,
} from "@/constants/imageData";
import { FlatList } from "react-native";
import TrendingItem from "./TrendingItem";

export const ImageTabSwitch = ({ tab }) => {
    switch (tab) {
        case "trending":
            return (
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    contentContainerStyle={{ gap: 14 }}
                    scrollEnabled={false}
                    data={TrendingDataRoute}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <TrendingItem item={item} />}
                    initialNumToRender={6}
                    maxToRenderPerBatch={4}
                    windowSize={2}
                />
            );
        case "templates":
            return (
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    contentContainerStyle={{ gap: 14 }}
                    scrollEnabled={false}
                    data={ReverseTrendingDataRoute}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <TrendingItem item={item} />}
                    initialNumToRender={6}
                    maxToRenderPerBatch={4}
                    windowSize={2}
                />
            );
        default:
            return null;
    }
};
