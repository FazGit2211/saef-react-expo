import { createContext, ReactNode, useState } from "react";
import { ShiftType } from "../hooks/useApiShift";
import { StadiumType } from "../hooks/useApiStadium";
import { ClientType } from "../components/cards/CardClient";
import { PlayerType } from "./PlayerContext";
interface EventType {
    shift: ShiftType,
    stadium: StadiumType,
    client: ClientType,
    player: PlayerType[],
    addShift: (sh: ShiftType) => void,
    addStadium: (st: StadiumType) => void,
    addClient: (cl: ClientType) => void,
    addPlayer: (player: PlayerType) => void,
};
const useContextDefaultValues: EventType = {
    shift: { day: "", time: "", price: 0 },
    stadium: { id: 0, name: "", address: "" },
    client: { name: "", surname: "", dni: 0, email: "" },
    player: [],
    addShift: () => { },
    addStadium: () => { },
    addClient: () => { },
    addPlayer: () => { }
};
interface ProviderPlayerType {
    children: ReactNode
};
const EventContext = createContext(useContextDefaultValues);
const EventProvider = ({ children }: ProviderPlayerType) => {
    const [shift, setShift] = useState<ShiftType>(useContextDefaultValues.shift);
    const [stadium, setStadium] = useState<StadiumType>(useContextDefaultValues.stadium);
    const [client, setClient] = useState<ClientType>(useContextDefaultValues.client);
    const [player, setPlayer] = useState<PlayerType[]>([]);
    const addShift = (sh: ShiftType) => {
        setShift(sh);
    };
    const addStadium = (st: StadiumType) => {
        setStadium(st);
    };
    const addClient = (cl: ClientType) => {
        setClient(cl);
    };
    const addPlayer = (p: PlayerType) => {
        const values = [...player, p];
        setPlayer(values);
    };
    const data = { shift, stadium, client, player, addShift, addStadium, addClient, addPlayer };
    return <EventContext.Provider value={data}>{children}</EventContext.Provider>
}
export { EventProvider }
export default EventContext;