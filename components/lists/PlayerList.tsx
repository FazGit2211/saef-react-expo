import { Button, FlatList, StyleSheet, Text } from "react-native"
import { PlayerType } from "../../context/PlayerContext";
import { useState } from "react";
import { useRouter } from "expo-router";
interface FlatListProps {
    players: PlayerType[],
    removePlayerByIndex: (index: number) => void,
    addPlayerEdit: (item: PlayerType) => void,
    showModal: () => void
}

const PlayerList = ({ players, removePlayerByIndex, addPlayerEdit, showModal }: FlatListProps) => {
    const router = useRouter();
    const [deleted, setDeleted] = useState(false);
    const handleEditBtn = (player: PlayerType) => {
        addPlayerEdit(player);
        showModal();
    };

    const handleDeletBtn = (index: number) => {
        removePlayerByIndex(index);
        setDeleted(!deleted);
    };
    return (
        <>
            <FlatList data={players} renderItem={({ item, index }) => <Text style={styles.items}>{item.name} {item.email}<Button title="Eliminar" onPress={() => handleDeletBtn(index)} /><Button title="Editar" onPress={() => handleEditBtn(item)} /></Text>} keyExtractor={item => item.name} />
            {players.length > 0 ? <Button title="Confirmar jugadores" onPress={() => router.push("/event/eventInfo")}></Button> : null}
        </>
    );
};
const styles = StyleSheet.create({
    items: {
        color: 'white'
    }
})
export default PlayerList;