import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { PlayerProvider } from "../context/PlayerContext";
import { EventProvider } from "../context/EventContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/headers/Header";
import { UserProvider } from "../context/UserContext";
import { ProductProvider } from "../context/ProductContext";
const Layout = () => {
    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <UserProvider>
                    <EventProvider>
                        <PlayerProvider>
                            <Header />
                            <ProductProvider>
                                <Slot />
                            </ProductProvider>
                        </PlayerProvider>
                    </EventProvider>
                </UserProvider>
            </View>
        </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})
export default Layout;