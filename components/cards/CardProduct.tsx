import { Image, ScrollView } from "react-native";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";
import useApiProduct from "../../hooks/useApiProduct";
import { useEffect } from "react";
interface CardProductType {
    url: string
}
const CardProduct = ({ url }: CardProductType) => {
    const urlProduct = `http://localhost:8080/${url}`;
    const { dataProduct, loadingProduct, errorProduct, getAllProduct } = useApiProduct(urlProduct);
    useEffect(() => {
        getAllProduct();
    }, [urlProduct])
    return (
        <ScrollView>
            {loadingProduct ? <ActivityIndicator animating={true} size="large" /> : null}
            {errorProduct.errorValue ? <Text>{errorProduct.message}</Text> : null}
            {dataProduct.length > 0 ? dataProduct.map((elem) => {
                return <Card key={elem.id}><Card.Content><Text>{elem.name} {elem.price}</Text></Card.Content></Card>
            }) : <Text>No hay productos.</Text>}
        </ScrollView>
    );
};
export default CardProduct;