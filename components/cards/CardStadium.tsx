import { View, Text } from "react-native"
import StadiumList from "../lists/StadiumList";
import { useReducer, useState } from "react";
import StadiumShiftList from "../lists/StadiumShiftList";
import { ShiftType } from "../../hooks/useApiShift";
interface ActionType {
    type: string,
    payload: ShiftType
};
const initialState: ShiftType = { day: "", time: "", price: 0 };
const types = {
    changeShift: 'change_shift'
}
function reducer(shift: ShiftType, action: ActionType) {
    switch (action.type) {
        case types.changeShift: {
            return {
                day: shift.day,
                time: shift.time,
                price: shift.price
            };
        }
        default:
            return shift;
    };
}

const CardStadium = () => {
    const [selectStadium, setSelectStadium] = useState(0);
    const [shift, dispatch] = useReducer(reducer, initialState);
    return (
        <View>
            <StadiumList selectedStadium={selectStadium} setSelectedStadium={setSelectStadium} />
            <StadiumShiftList stadiumId={selectStadium} setShift={() => dispatch} />
            <Text>{shift.day} {shift.price} {shift.time}</Text>
        </View>
    );
};
export default CardStadium;