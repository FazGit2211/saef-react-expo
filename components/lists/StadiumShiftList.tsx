import { useEffect } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import useApiShift, { ShiftType } from "../../hooks/useApiShift";

interface PropsType {
    stadiumId: number,
    setShift: (action: string, shift: ShiftType) => void
}
const StadiumShiftList = ({ stadiumId, setShift }: PropsType) => {
    const urlShift = "http://localhost:5041/Shift";
    const { dataShift, loadingShift, errorShift, getShiftById } = useApiShift(urlShift);
    useEffect(() => {
        if (stadiumId > 0) {
            getShiftById(stadiumId);
        }
    }, [stadiumId]);
    return (
        <>
            <Text style={styles.items}>Turnos disponibles</Text>
            {dataShift.length > 0 ? <FlatList data={dataShift} renderItem={({ item }) => <Text style={styles.items} onPress={() => setShift('change_shift', item)}>{item.day} {item.price}</Text>} keyExtractor={item => item.day} /> : null}
        </>
    );
};
const styles = StyleSheet.create({
    items: {
        color: 'white'
    }
});
export default StadiumShiftList;