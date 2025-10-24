import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { PlayerProvider } from "../context/PlayerContext";
import { EventProvider } from "../context/EventContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/headers/Header";
const Layout = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <EventProvider>
                    <PlayerProvider>
                        <Header />
                        <Slot />
                    </PlayerProvider>
                </EventProvider>
            </View>
        </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    slot: {
        flexGrow: 1
    }
})
export default Layout;