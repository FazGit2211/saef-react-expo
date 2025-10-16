import { useRouter } from "expo-router";
import { View, StyleSheet, Button } from "react-native"

const EventInfo = () => {
    const router = useRouter();
    const handleBtnPlayer = () => {
        router.push("/player/playerInfo");
    }
    return (
        <View style={styles.container}>
            <Button title="Jugadores" onPress={handleBtnPlayer}></Button>
            <Button title="Fecha"></Button>
            <Button title="Cancha"></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        gap: 15
    }
})
export default EventInfo;