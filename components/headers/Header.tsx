import { useRouter } from "expo-router";
import { useContext } from "react";
import { Appbar } from "react-native-paper";
import UserContext from "../../context/UserContext";
const Header = () => {
    const router = useRouter();
    const { userData } = useContext(UserContext);
    const handleBackAct = () => {
        router.push("/");
    };
    const handleAccountBtn = () => {
        router.push("auth/Auth")
    };
    const handleShoppingCartBtn = () => {
        router.push("product/Product")
    }
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={handleBackAct}></Appbar.BackAction>
            {userData.username == "" ? <Appbar.Action icon="account-circle" onPress={handleAccountBtn}></Appbar.Action> : null}
            <Appbar.Action icon="cart" onPress={handleShoppingCartBtn}></Appbar.Action>
        </Appbar.Header>
    );
};
export default Header;