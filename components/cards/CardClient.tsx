import { useContext, useState } from "react";
import { Button, Text, TextInput, StyleSheet } from "react-native";
import EventContext from "../../context/EventContext";
export interface ClientType {
    name: string,
    surname: string,
    dni: number,
    email: string
};
const CardClient = () => {
    const { addClient } = useContext(EventContext);
    const [form, setForm] = useState<ClientType>({ name: "", surname: "", dni: 0, email: "" });
    const handleChangeName = (name: string) => {
        if (name.trim() !== "") {
            setForm({ ...form, name: name });
        }
    };
    const handleChangeSurname = (surname: string) => {
        if (surname.trim() !== "") {
            setForm({ ...form, surname: surname })
        }
    };
    const handleChangeDni = (dni: string) => {
        let dniToNumber = parseInt(dni);
        if (dniToNumber > 0) {
            setForm({ ...form, dni: dniToNumber })
        }
    };
    const handleChangeEmail = (email: string) => {
        if (email.trim() !== "") {
            setForm({ ...form, email: email })
        }
    };
    const handleBtnConfirmShift = () => {
        addClient(form);
    }
    return (
        <>
            <Text style={styles.items}>Información personal:</Text>
            <Text style={styles.items}>Nombre:</Text>
            <TextInput value={form.name} onChangeText={handleChangeName} style={styles.items} />
            <Text style={styles.items}>Apellido:</Text>
            <TextInput value={form.surname} onChangeText={handleChangeSurname} style={styles.items} />
            <Text style={styles.items}>Nº Documento:</Text>
            <TextInput value={form.dni.toString()} onChangeText={handleChangeDni} style={styles.items} />
            <Text style={styles.items}>Email de contacto:</Text>
            <TextInput value={form.email} onChangeText={handleChangeEmail} style={styles.items} />
            <Button title="Confirmar turno" onPress={handleBtnConfirmShift} />
        </>
    );
};
const styles = StyleSheet.create({
    items: {
        color: 'white'
    }
});
export default CardClient;