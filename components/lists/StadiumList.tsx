import { FlatList, Text, StyleSheet, ActivityIndicator } from "react-native";
import useApiStadium, { StadiumType } from "../../hooks/useApiStadium";
import { useEffect } from "react";
import { EventPropsType } from "../../app/event/eventInfo";

const StadiumList = ({ stadium, setStadium, setShift }: EventPropsType) => {
    const urlStadium = "http://localhost:5041/Stadium";
    const { dataStadium, loadingStadium, errorStadium, getAllStadiums } = useApiStadium(urlStadium);

    useEffect(() => {
        getAllStadiums();
    }, [urlStadium]);

    const handleSets = (st: StadiumType) => {
        setStadium(st);
        setShift({ day: "", time: "", price: 0 });
    }
    return (
        <>
            <Text style={styles.items}>Estadios disponibles</Text>
            {loadingStadium ? <ActivityIndicator></ActivityIndicator> : null}
            {errorStadium.errorValue ? <Text>{errorStadium.message}</Text> : null}
            {dataStadium.length > 0 ? <FlatList data={dataStadium} renderItem={({ item }) => <Text style={styles.items} onPress={() => handleSets(item)}>{item.name} {item.address}</Text>} keyExtractor={item => item.name} extraData={stadium} /> : <Text>No hay estadios disponibles.</Text>}
        </>
    );
};
const styles = StyleSheet.create({
    items: {
        color: 'white'
    }
});
export default StadiumList;