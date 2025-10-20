import { createContext, ReactNode, useState } from "react"
export interface PlayerType {
    id: number;
    name: string,
    email: string,
    state: string,
};
interface ContextPlayerType {
    players: PlayerType[],
    playerEdit: PlayerType,
    addPlayer: (player: PlayerType) => void,
    addPlayerEdit: (player: PlayerType) => void,
    removePlayerByIndex: (indexPlayer: number) => void,
    removeAll: () => void;
};

interface ProviderPlayerType {
    children: ReactNode
};
const useContextDefault: ContextPlayerType = {
    players: [], playerEdit: {id:0,name:"",email:"",state:""}, addPlayer: () => { }, addPlayerEdit: () => { }, removePlayerByIndex: () => { }, removeAll: () => { }
}
const PlayerContext = createContext(useContextDefault);

const PlayerProvider: React.FC<ProviderPlayerType> = ({ children }) => {
    const [players, setPlayers] = useState<PlayerType[]>([]);
    const [playerEdit, setPlayerEdit] = useState<PlayerType>(useContextDefault.playerEdit);

    const addPlayer = (p: PlayerType) => {
        const values = [...players, p];
        setPlayers(values);
    };

    const addPlayerEdit = (p: PlayerType) => {        
        setPlayerEdit(p);
    };

    const removePlayerByIndex = (indexPlayer: number) => {
        players.splice(indexPlayer, 1);
    };

    const removeAll = () => {
        setPlayers(useContextDefault.players);
    }

    const data = { players, playerEdit, addPlayer, addPlayerEdit, removePlayerByIndex, removeAll };

    return <PlayerContext.Provider value={data}>{children}</PlayerContext.Provider>
}
export { PlayerProvider }
export default PlayerContext;