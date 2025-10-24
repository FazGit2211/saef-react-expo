import { useRouter } from "expo-router";
import { Button, Image, Text, View, StyleSheet } from "react-native"

const Header = () => {
    const router = useRouter();
    const handleBtnPlayer = () => {
        router.push("/player/playerInfo");
    }
    const handleBtnShift = () => {
        router.push("/shift/shiftInfo");
    }
    return (
        <View>
            <Text>Header</Text>
            <Image source={require('../../assets/FNº5.png')} style={styles.img} alt="Logo de futbol"></Image>
            <Button onPress={() => router.push("/event/eventInfo")} title="Nuevo" />
            <Button title="Jugadores" onPress={handleBtnPlayer}></Button>
            <Button title="Turnos" onPress={handleBtnShift}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        borderRadius: 5
    }
})
export default Header;