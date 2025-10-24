import { useEffect } from "react";
import { FlatList, Text, StyleSheet, ActivityIndicator } from "react-native";
import useApiShift from "../../hooks/useApiShift";
import { EventPropsType } from "../../app/event/eventInfo";

const StadiumShiftList = ({ stadium, setShift }: EventPropsType) => {
    const urlShift = "http://localhost:5041/Shift";
    const { dataShift, loadingShift, errorShift, getShiftById } = useApiShift(urlShift);
    useEffect(() => {
        if (stadium.id > 0) {
            getShiftById(stadium.id);
        }
    }, [stadium.id]);
    return (
        <>
            <Text style={styles.items}>Turnos disponibles</Text>
            {loadingShift ? <ActivityIndicator /> : null}
            {errorShift.errorValue ? <Text>{errorShift.message}</Text> : null}
            {dataShift.length > 0 ? <FlatList data={dataShift} renderItem={({ item }) => <Text style={styles.items} onPress={() => setShift(item)}>{item.day} {item.time} {item.price}</Text>} keyExtractor={item => item.time} /> : <Text style={styles.items}>No hay turnos disponibles.</Text>}
        </>
    );
};
const styles = StyleSheet.create({
    items: {
        color: 'white'
    }
});
export default StadiumShiftList;