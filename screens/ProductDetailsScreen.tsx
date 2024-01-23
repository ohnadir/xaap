import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
    ImageBackground,
    ImageBackgroundProps,
    Dimensions,
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from "@react-navigation/native";
import BackgroundImage from '../src/components/ProductInfo/BackgroundImage';
import Information from '../src/components/ProductInfo/Information';

const ProductDetailsScreen = () => {
    const [addedToCart, setAddItemToCart] = useState()
    const navigation = useNavigation();
    const route = useRoute();
    const product = {
        "id": "65a92f7c6cbe6c63feb78016",
        "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "quantity": 1,
        "price": 695,
        "image": "https://johnhardy.com/cdn/shop/files/BZS60193BSP_Back.jpg?v=1700586750&width=1000"
    }
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "white" }} 
        >
            {/* <View> */}
                <BackgroundImage images={product.image}/>
                <Information title={product.name} price={product.price}/>
                <Pressable
                    // onPress={() => setAddItemToCart(route?.params?.item)}
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
                        addedToCart ? (
                            <View>
                                <Text>Added to Cart</Text>
                            </View>
                        ) 
                        : 
                        (
                        <Text>Add to Cart</Text>
                        )
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