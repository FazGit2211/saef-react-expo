import { createContext, ReactNode, useState } from "react";

export interface UserType {
    id: number,
    username: string,
    password: string
};
interface ContextUserType {
    userData: UserType,
    addUserContext: (userData: UserType) => void
};
interface ProviderUserType {
    children: ReactNode
};
const useContextUserDefault: ContextUserType = {
    userData: { id: 0, username: "", password: "" },
    addUserContext: () => { }
};

const UserContext = createContext(useContextUserDefault);
const UserProvider = ({ children }: ProviderUserType) => {
    const [userData, setUserData] = useState<UserType>({ id: 0, username: "", password: "" });
    const addUserContext = (userData: UserType) => { setUserData(userData) };
    const data = { userData, addUserContext };
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
};
export { UserProvider };
export default UserContext;