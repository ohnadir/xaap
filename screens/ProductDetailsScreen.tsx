import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Pressable, DeviceEventEmitter, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
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
    const addItemToCart = (item:any) => {
        setAddItemToCart(true);
        dispatch(addToCart(item));
        setTimeout(() => {
            setAddItemToCart(false);
        }, 60000);
    };

    const [isLandscape, setIsLandscape] = useState(
        Dimensions.get('window').width > Dimensions.get('window').height
      );
    
    useEffect(() => {
        const handleOrientationChange = ({ window }: { window: { width: number; height: number } }) => {
          setIsLandscape(window.width > window.height);
        };
    
        Dimensions.addEventListener('change', handleOrientationChange);
    
        return () => {
          DeviceEventEmitter.removeAllListeners('change');
        };
    
    }, []);

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "white" }} 
        >
            {/* <View> */}
                <View style={{
                    flexDirection: isLandscape ? "row" : "column",
                    marginTop: 10,
                    marginBottom: 30
                }}>
                    <BackgroundImage images={(route?.params as RouteParams)?.image}/>
                    <Information title={(route?.params as RouteParams)?.title} price={(route?.params as RouteParams)?.price}/>
                </View>
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
                            <Text style={{color: "black", fontWeight : "500"}}>Added to Cart</Text>
                        </View>
                        : 
                        <Text style={{color: "black", fontWeight : "500"}}>Add to Cart</Text>
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
                    <Text style={{color: "black", fontWeight : "500"}}>Buy Now</Text>
                </Pressable>
            {/* </View> */} 
        </ScrollView>
    )
}

export default ProductDetailsScreen;