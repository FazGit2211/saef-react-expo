import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { PlayerProvider } from "../context/PlayerContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Layout = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <PlayerProvider>
                    <Slot />
                </PlayerProvider>
            </View>
        </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'black',
    }
})
export default Layout;