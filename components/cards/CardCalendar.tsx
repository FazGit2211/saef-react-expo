import { DataTable } from "react-native-paper";
import { StadiumType } from "../../hooks/useApiStadium";
import { ShiftType } from "../../hooks/useApiShift";
interface CalendarType {
    stadium: StadiumType,
    shift: ShiftType[]
};
const CardCalendar = ({ stadium }: CalendarType) => {
    return (
        <DataTable>
            <DataTable.Title>
                <DataTable.Cell>Estadio:{stadium.name}</DataTable.Cell>
            </DataTable.Title>
            <DataTable.Header>
                <DataTable.Title>DO</DataTable.Title>
                <DataTable.Title>LU</DataTable.Title>
                <DataTable.Title>MA</DataTable.Title>
                <DataTable.Title>MI</DataTable.Title>
                <DataTable.Title>JU</DataTable.Title>
                <DataTable.Title>VI</DataTable.Title>
                <DataTable.Title>SA</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell>Turnos del domingo</DataTable.Cell>
                <DataTable.Cell>Turnos del lunes</DataTable.Cell>
                <DataTable.Cell>Turnos del martes</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
};
export default CardCalendar;