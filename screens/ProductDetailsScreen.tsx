import React from 'react'
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

const ProductDetailsScreen = () => {
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
            style={{ flex: 1, backgroundColor: "white" }} showsVerticalScrollIndicator={false}
        >
            <View>
                <BackgroundImage images={product.image}/>
            </View>
        </ScrollView>
    )
}

export default ProductDetailsScreen;