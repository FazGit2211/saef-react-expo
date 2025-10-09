import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
const Layout = () => {
    return (
        <View>
            <StatusBar style="auto" />
            <Slot />
        </View>
    );
};
export default Layout;