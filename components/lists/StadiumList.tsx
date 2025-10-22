import { FlatList, Text, StyleSheet } from "react-native";
import useApiStadium from "../../hooks/useApiStadium";
import { useEffect } from "react";
interface StadiumProsType {
    selectedStadium: number,
    setSelectedStadium: (id: number) => void
}
const StadiumList = ({ selectedStadium, setSelectedStadium }: StadiumProsType) => {
    const urlStadium = "http://localhost:5041/Stadium";
    const { dataStadium, getAllStadiums } = useApiStadium(urlStadium);

    useEffect(() => {
        getAllStadiums();
    }, [urlStadium]);

    return (
        <>
            <Text style={styles.items}>Estadios disponibles</Text>
            {dataStadium.length > 0 ? <FlatList data={dataStadium} renderItem={({ item }) => <Text style={styles.items} onPress={() => setSelectedStadium(item.id)}>{item.name} {item.address}</Text>} keyExtractor={item => item.name} extraData={selectedStadium} /> : null}
        </>
    );
};
const styles = StyleSheet.create({
    items: {
        color: 'white'
    }
});
export default StadiumList;