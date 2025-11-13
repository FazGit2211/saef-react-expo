import { Button, Card, Text } from "react-native-paper"
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
const CardMain = () => {
    const router = useRouter();
    const handleLoginBtn = () => {
        router.push("auth/Auth");
    }
    return (
        <Card>
            <Card.Cover source={require('../../assets/FNº5.png')} style={styles.img}></Card.Cover>
            <Card.Content style={styles.card}>
                <Text variant="headlineSmall">!Bienvenido a SAEF!</Text>
                <Text style={styles.text} variant="titleMedium">La aplicación Sistema Administrativo de Eventos de Fútbol, tiene como objetivo agendar los eventos de manera sencilla y rápida, mediante la incorporación de los participantes y la selección de turnos disponibles.También mediante el inicio de session podrá realizar los cambios necesarios a sus eventos.</Text>
                <Button mode="contained" style={styles.btn} textColor="black" buttonColor="white">Registrarse</Button>
                <Button mode="contained" onPress={handleLoginBtn} textColor="white" buttonColor="blue">Iniciar sesión</Button>
            </Card.Content>
        </Card>
    );
};
const styles = StyleSheet.create({
    card: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    img: {
        borderRadius: 5,
        alignItems: 'center',
    }, text: {
        textAlign: 'justify',
        color: 'white'
    },
    btn:{
        marginBottom:2
    }
});
export default CardMain;