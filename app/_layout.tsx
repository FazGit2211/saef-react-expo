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
            <StatusBar style="auto" />
            <View style={styles.container}>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:'black'
    }
})
export default Layout;