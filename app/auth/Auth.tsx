import { View } from "react-native"
import FormAuth from "../../components/forms/FormAuth"
import { Text } from "react-native-paper";

const Auth = () => {
    return (
        <View>
            <Text variant="titleLarge">!Te damos la bienvenida de nuevo!</Text>
            <FormAuth />
            <Text variant="titleMedium">¿Olvidaste tu contraseña?</Text>
        </View>
    );
};
export default Auth;