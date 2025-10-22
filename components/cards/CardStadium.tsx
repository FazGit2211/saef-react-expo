import { View } from "react-native"
import StadiumList from "../lists/StadiumList";
import { useState } from "react";
import StadiumShiftList from "../lists/StadiumShiftList";

const CardStadium = () => {
    const [selectStadium, setSelectStadium] = useState(0);
    return (
        <View>
            <StadiumList selectedStadium={selectStadium} setSelectedStadium={setSelectStadium} />
            <StadiumShiftList stadiumId={selectStadium} />
        </View>
    );
};
export default CardStadium;