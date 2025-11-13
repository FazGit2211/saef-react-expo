import { ScrollView, Image } from "react-native"
import CardProduct from "../../components/cards/CardProduct";
import { Button, Card } from "react-native-paper";
import { useState } from "react";

const Product = () => {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState("");
    return (
        <ScrollView>
            <Card>
                <Card.Content>
                    <Image source={require('../../assets/tshirt.jpg')}></Image>
                    <Image source={require('../../assets/footwears.jpg')}></Image>
                    <Image source={require('../../assets/pants.jpg')}></Image>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" icon="cart" onPress={() => { setShow(!show); setCategory("tshirt") }}>Ver camisetas</Button>
                    <Button mode="contained" icon="cart" onPress={() => { setShow(!show); setCategory("pant") }}>Ver pantalones</Button>
                    <Button mode="contained" icon="cart" onPress={() => { setShow(!show); setCategory("footwears") }}>Ver calzados</Button>
                </Card.Actions>
            </Card>
            {show ? <CardProduct url={category} /> : null}
        </ScrollView>
    );
};
export default Product;