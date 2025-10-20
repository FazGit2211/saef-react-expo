import { useContext, useState } from "react";
import { Button, Text, View } from "react-native";
import ModalCreate from "../modals/ModalCreate";
import PlayerContext from "../../context/PlayerContext";
import PlayerList from "../lists/PlayerList";

const CardPlayerNew = () => {
    const [modal, setModal] = useState(false);
    const { players, removePlayerByIndex, addPlayerEdit } = useContext(PlayerContext);
    const handleModal = () => {
        setModal(false);
    };
    return (
        <View>
            <Button title="+" onPress={() => setModal(true)}></Button>
            {players.length > 0 ? <PlayerList players={players} removePlayerByIndex={removePlayerByIndex} addPlayerEdit={addPlayerEdit} showModal={() => setModal(true)}/> : <Text>No hay jugadores</Text>}
            {modal ? <ModalCreate show={modal} handleShow={handleModal} /> : null}
        </View>
    );
};
export default CardPlayerNew;