import { useRouter } from "expo-router";
import { useContext } from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native"
import PlayerContext from "../../context/PlayerContext";

const EventInfo = () => {
    const { players } = useContext(PlayerContext);
    const router = useRouter();
    const handleBtnPlayer = () => {
        router.push("/player/playerInfo");
    };
    return (
        <View style={styles.container}>
            <Button title="Jugadores" onPress={handleBtnPlayer}></Button>
            <Button title="Fecha"></Button>
            <Button title="Cancha"></Button>
            {players.length > 0 ? <FlatList data={players} renderItem={({ item }) => <Text style={styles.items}>{item.name} {item.email}</Text>} keyExtractor={item => item.name} /> : null}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    items: {
        color: 'white'
    }
})
export default EventInfo;