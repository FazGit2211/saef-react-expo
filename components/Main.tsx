import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
const Main = () => {    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/FNº5.png')} style={styles.img} />
            <Text style={styles.text}>La aplicación web Sistema Administrativo de Eventos de Fútbol, tiene como objetivo agendar los eventos de manera sencilla y rápida, mediante la incorporación de los participantes, la fecha, el lugar y un código para crear, buscar e visualizar el evento.También mediante su código podrá realizar los cambios necesarios así como también su eliminación, sin la necesidad de estar registrado.Aunque de estar registrado podra tener la facilidad de visualizar a todos sus eventos.</Text>            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
    , img: {
        width: 100,
        height: 100,
        borderRadius: 5
    }, text: {
        textAlign: 'justify',
        margin: 5,
        color: 'white'
    }
})
export default Main;