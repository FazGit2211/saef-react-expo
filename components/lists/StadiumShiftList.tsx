import { useEffect } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import useApiShift from "../../hooks/useApiShift";

interface PropsType {
    stadiumId: number
}
const StadiumShiftList = ({ stadiumId }: PropsType) => {
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
            {dataShift.length > 0 ? <FlatList data={dataShift} renderItem={({ item }) => <Text style={styles.items}>{item.day} {item.price}</Text>} keyExtractor={item => item.day} /> : null}
        </>
    );
};
const styles = StyleSheet.create({
    items: {
        color: 'white'
    }
});
export default StadiumShiftList;