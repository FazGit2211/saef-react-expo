import { createContext, ReactNode, useState } from "react"

export interface ProductType {
    id: number,
    name:string,
    price: number,
    description: string,
    stock: number,
    category: string
};

interface ProviderProductType {
    children: ReactNode
};

interface ProductContextType {
    product: ProductType[],
    addProduct: (prod:ProductType) => void,
};

const defaultValues : ProductContextType = {
    product:[{id:0,name:"",price:0,description:"",stock:0,category:""}],
    addProduct: () => {}
}

const ProductContext = createContext(defaultValues);
const ProductProvider = ({children}: ProviderProductType) => {
    const [product,setProduct] = useState(defaultValues.product);
    const addProduct = (prod:ProductType) => {
        setProduct([prod]);
    };
    const data = {product,addProduct};
    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}
export {ProductProvider}
export default ProductContext;