import { View } from "react-native"
import { Text } from "react-native-paper"
import useApiProduct from "../../hooks/useApiProduct";
import { useContext, useEffect } from "react";
import ProductContext, { ProductType } from "../../context/ProductContext";

const Product = () => {
    const url = "http://localhost:8080/";
    const { dataProduct, errorProduct, loadingProduct, getAllProduct } = useApiProduct(url);
    const { product, addProduct } = useContext(ProductContext);

    useEffect(() => {
        getAllProduct();
    }, [dataProduct])
    if(dataProduct.length > 0){
        for(let i = 0; i < dataProduct.length;i++){
            addProduct(dataProduct[i]);
        }
    }
    return (
        <View>
            <Text>List Products</Text>
            
        </View>
    );
};
export default Product;