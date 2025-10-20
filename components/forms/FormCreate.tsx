import { Button, Text, TextInput } from "react-native";
import useForm, { FormType } from "../../hooks/useForm";
import { useContext } from "react";
import PlayerContext from "../../context/PlayerContext";

const FormCreate = () => {
    const { addPlayer, playerEdit } = useContext(PlayerContext);
    const initialState: FormType = { initialForm: { id: playerEdit.id, name: playerEdit.name, email: playerEdit.email, state: playerEdit.state } };
    const { form, handleChangeName, handleChangeEmail } = useForm(initialState);
    const handleSaveBtn = () => {
        addPlayer({ id: form.id, name: form.name, email: form.email, state: form.state });
    }
    return (
        <>
            <Text>Nombre:</Text>
            <TextInput value={form.name} onChangeText={handleChangeName} />
            <Text>Email:</Text>
            <TextInput value={form.email} onChangeText={handleChangeEmail} />
            <Button title="Guardar" onPress={handleSaveBtn}></Button>
        </>
    );
};
export default FormCreate;