import { Card, Text } from "react-native-paper"
import { StyleSheet } from "react-native";
const CardMain = () => {
    return (
        <Card>
            <Card.Cover source={require('../../assets/FNº5.png')}></Card.Cover>
            <Card.Content>
                <Text>La aplicación web Sistema Administrativo de Eventos de Fútbol, tiene como objetivo agendar los eventos de manera sencilla y rápida, mediante la incorporación de los participantes y la selección de turnos disponibles.También mediante el inicio de session podrá realizar los cambios necesarios a sus eventos.</Text>
            </Card.Content>
        </Card>
    );
};
const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 5
    }, text: {
        textAlign: 'justify',
        margin: 5,
        color: 'white'
    }
});
export default CardMain;