import { useState } from "react"
interface ErrorUserType {
    errorValue: boolean,
    message: string
};
interface UserType {
    id: number,
    username: string,
    password: string
};
const useAuth = (url: string) => {
    const [user, setUser] = useState<UserType[]>([]);
    const [loadingUser, setLoadingUser] = useState(false);
    const [errorUser, setErrorUser] = useState<ErrorUserType>({ errorValue: false, message: "" });
    const signin = async (user: UserType) => {
        try {
            setLoadingUser(true);
            const options: RequestInit = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
            };
            const response = await fetch(url, options);
            if (response.ok) {
                const dataValues = await response.json();
                setUser(dataValues);
            } else {
                const dataInfo = await response.json();
                setErrorUser({ errorValue: true, message: `${dataInfo.message.info}` });
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorUser({ errorValue: true, message: error.message });
            };
        } finally {
            setLoadingUser(false);
        };
    }
    const login = async (user: UserType) => {
        try {
            setLoadingUser(true);
            const options: RequestInit = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
            };
            const response = await fetch(url, options);
            if (response.ok) {
                const dataValues = await response.json();
                setUser(dataValues);
            } else {
                const dataInfo = await response.json();
                setErrorUser({ errorValue: true, message: dataInfo });
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorUser({ errorValue: true, message: error.message });
            };
        } finally {
            setLoadingUser(false);
        };
    }
    return { user, loadingUser, errorUser, signin, login }
}
export default useAuth;