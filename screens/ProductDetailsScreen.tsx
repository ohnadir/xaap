import React, { useState } from 'react'
import { Text, View, ScrollView, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackgroundImage from '../src/components/ProductInfo/BackgroundImage';
import Information from '../src/components/ProductInfo/Information';
import { addToCart } from '../src/Redux/cartReducers';

interface RouteParams {
    title: string;
    image: string;
    price: number;
    item: any;
}

const ProductDetailsScreen = () => {
    const [addedToCart, setAddItemToCart] = useState<boolean>(false)
    const route = useRoute();
    const dispatch = useDispatch();
    const cart = useSelector((state:any) => state.cart.cart);
    console.log(cart)
    const addItemToCart = (item:any) => {
        setAddItemToCart(true);
        dispatch(addToCart(item));
        setTimeout(() => {
            setAddItemToCart(false);
        }, 60000);
    };
    
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "white" }} 
        >
            {/* <View> */}
                <BackgroundImage images={(route?.params as RouteParams)?.image}/>
                <Information title={(route?.params as RouteParams)?.title} price={(route?.params as RouteParams)?.price}/>
                <Pressable
                    onPress={() => addItemToCart((route?.params as RouteParams)?.item)}
                    style={{
                    backgroundColor: "#FFC72C",
                    padding: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginVertical: 10,
                    }}
                >
                    {
                        addedToCart 
                        ? 
                        <View>
                            <Text>Added to Cart</Text>
                        </View>
                        : 
                        <Text>Add to Cart</Text>
                    }
                </Pressable>

                <Pressable
                    style={{
                    backgroundColor: "#FFAC1C",
                    padding: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginVertical: 10,
                    }}
                >
                    <Text>Buy Now</Text>
                </Pressable>
            {/* </View> */} 
        </ScrollView>
    )
}

export default ProductDetailsScreen;