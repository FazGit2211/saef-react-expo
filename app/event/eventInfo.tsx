import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native"
import PlayerContext from "../../context/PlayerContext";
import CardStadium from "../../components/cards/CardStadium";
import { StadiumType } from "../../hooks/useApiStadium";
import { ShiftType } from "../../hooks/useApiShift";
import CardClient from "../../components/cards/CardClient";
import EventContext from "../../context/EventContext";

export interface EventPropsType {
    stadium: StadiumType,
    setStadium: (st: StadiumType) => void,
    shift: ShiftType,
    setShift: (sh: ShiftType) => void
};

const EventInfo = () => {
    const { shift, stadium } = useContext(EventContext);
    const { players } = useContext(PlayerContext);
    const router = useRouter();
    const handleBtnPlayer = () => {
        router.push("/player/playerInfo");
    }
    const handleBtnShift = () => {
        router.push("/shift/shiftInfo");
    }
    return (
        <View style={styles.container}>
            <Button title="Jugadores" onPress={handleBtnPlayer}></Button>
            <Button title="Turnos" onPress={handleBtnShift}></Button>
            {players.length > 0 ? <FlatList data={players} renderItem={({ item }) => <Text style={styles.items}>{item.name} {item.email}</Text>} keyExtractor={item => item.name} /> : null}
            {shift.day !== "" && stadium.address !== "" ? <Text style={styles.items}>{stadium.name} {stadium.address} {shift.day} {shift.time} $$${shift.price}</Text> : null}
            {shift.day !== "" && stadium.address !== "" && players.length > 0 ? <CardClient></CardClient> : null}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    items: {
        color: 'white'
    }
})
export default EventInfo;