import { useState } from "react";
import { ProductType } from "../context/ProductContext";

interface ErrorProductType {
    errorValue: boolean,
    message: string
};
const useApiProduct = (url: string) => {
    const [dataProduct, setDataProduct] = useState<ProductType[]>([]);
    const [errorProduct, setErrorProduct] = useState<ErrorProductType>({ errorValue: false, message: "" });
    const [loadingProduct, setLoadingProduct] = useState(false);
    const getAllProduct = async () => {
        try {
            setLoadingProduct(true);
            const options: RequestInit = {
                method: "GET",
                headers: { "content-type": "application/json","Access-Control-Allow-Origin":"*" },
            };
            const response = await fetch(url, options);
            if (response.ok) {
                const dataValues = await response.json();
                setDataProduct(dataValues);
                setErrorProduct({ errorValue: false, message: "Get ok." });
            } else {
                const dataInfo = await response.json();
                setErrorProduct({ errorValue: true, message: `${dataInfo.message.info}` });
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorProduct({ errorValue: true, message: error.message });
            };
        } finally {
            setLoadingProduct(false);
        };
    }
    return { dataProduct, loadingProduct, errorProduct, getAllProduct }
}
export default useApiProduct;
