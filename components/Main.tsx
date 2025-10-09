import { Button, Image, Text, View } from "react-native";
const Main = () => {
    return (
        <>
            <View>
                <Image source={require('../assets/FNº5.png')} />
                <Text>La applicación web Sistema Administrativo de Eventos de Fútbol, tiene como objetivo el poder agendar los eventos de manera sencilla y rápida, mediante la incorporación de los participantes, la fecha, el lugar y un código para poder buscar e visualizar el evento.También mediante su código podrá realizar los cambios necesarios así como también su eliminación, sin la necesidad de estar registrado.Aunque de estar registrado podra tener la facilidad de visualizar a todos sus eventos.</Text>
            </View>
            <Button title="Nuevo evento." onPress={() => alert("Btn")}></Button>
        </>
    );
};
export default Main;