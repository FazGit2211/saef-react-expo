import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";
const Header = () => {
    const router = useRouter();
    const handleBackAct = () => {
        router.push("/");
    };
    const handleAccountBtn = () => {
        router.push("auth/Auth")
    }
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={handleBackAct}></Appbar.BackAction>
            <Appbar.Action icon="account-circle" onPress={handleAccountBtn}></Appbar.Action>
        </Appbar.Header>
    );
};
export default Header;