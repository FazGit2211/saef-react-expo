import { View, Button, Text } from "react-native"
import StadiumList from "../lists/StadiumList";
import StadiumShiftList from "../lists/StadiumShiftList";
import { useContext, useState } from "react";
import { StadiumType } from "../../hooks/useApiStadium";
import { ShiftType } from "../../hooks/useApiShift";
import EventContext from "../../context/EventContext";
import { useRouter } from "expo-router";

const CardStadium = () => {
    const { addShift, addStadium } = useContext(EventContext);
    const router = useRouter();
    const [stadiumSelected, setSelectedStadium] = useState<StadiumType>({ id: 0, name: "", address: "" });
    const [shiftSelected, setSelectedShift] = useState<ShiftType>({ day: "", time: "", price: 0 });
    const handleBtnConfirm = () => {
        addShift(shiftSelected);
        addStadium(stadiumSelected);
        router.push("/event/eventInfo");
    }
    return (
        <View>
            <StadiumList stadium={stadiumSelected} setStadium={setSelectedStadium} shift={shiftSelected} setShift={setSelectedShift} />
            <StadiumShiftList stadium={stadiumSelected} setShift={setSelectedShift} shift={shiftSelected} setStadium={setSelectedStadium} />
            <Text>{stadiumSelected.name} {stadiumSelected.address} {shiftSelected.day} {shiftSelected.time} {shiftSelected.price}</Text>
            {stadiumSelected.name !== "" && shiftSelected.day !== "" ? <Button title="Confirmar turno." onPress={handleBtnConfirm}></Button> : null}
        </View>
    );
};
export default CardStadium;