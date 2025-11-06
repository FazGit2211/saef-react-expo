import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, TextInput } from "react-native-paper";
import useAuth from "../../hooks/useAuth";
import { router } from "expo-router";
import UserContext from "../../context/UserContext";

const FormAuth = () => {
    const url = "http://localhost:4150/Auth";
    const { loadingUser, errorUser, login, user } = useAuth(url);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { userData, addUserContext } = useContext(UserContext);
    const handleSendBtn = () => {
        if (username.trim() !== "" && password.trim() !== "") {
            login({ id: 0, username: username, password: password });
        }
    }
    const handleRedirect = () => {
        if (user.length > 0) {
            addUserContext({id:user[0].id,username:user[0].username,password:user[0].password});
            router.push("event/eventInfo");
        }
    }

    useEffect(() => {
        handleRedirect();
    }, [user])
    return (
        <>
            <TextInput label="Usuario" value={username} onChangeText={setUsername} mode="outlined"></TextInput>
            <TextInput label="Contraseña" value={password} onChangeText={setPassword} mode="outlined"></TextInput>
            <Button icon="send-circle" mode="contained" onPress={handleSendBtn}>Enviar</Button>
            {userData.username != "" ? <Button icon="send-circle" mode="contained">Registrarce</Button> : null}
            {loadingUser ? <ActivityIndicator animating={true} /> : null}
            {errorUser.errorValue ? <Text>{errorUser.message}</Text> : null}
        </>
    );
};
export default FormAuth;