import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    Info: { 
        id: number;
        title: string;
        image: string;
        price: number;
        item:any;
    }
  };

interface ProductListProps {
    item: any;
    id: number;
    image: string;
    title: string;
    price: number;
    rating: number;
    addedToCart?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
    id,
    image,
    title,
    price,
    rating,
    addedToCart,
    item
}) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleNavigate = () => {
        navigation.navigate("Info", { 
            id: id,
            title: title,
            price: price,
            image: image,
            item: item 
        });
    };

    return (
        <View>
            <Pressable key={id} onPress={handleNavigate}>
                <Image
                    style={{ width: 150, height: 150, resizeMode: "contain" }}
                    source={{ uri: image }}
                />

                <Text numberOfLines={1} style={{ width: 150, marginTop: 10, color: "black" }}>
                    {title}
                </Text>

                <View
                    style={{
                        marginTop: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>₹{price}</Text>
                    <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                        {rating} ratings
                    </Text>
                </View>
            </Pressable>

            <Pressable
                style={{
                    backgroundColor: "#FFC72C",
                    padding: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginTop: 10,
                    
                }}
            >
                {addedToCart ? (
                    <View>
                        <Text style={{color: "black", fontWeight: '600',}} >Added to Cart</Text>
                    </View>
                ) : (
                    <Text style={{color: "black", fontWeight: '600',}}>Add to Cart</Text>
                )}
            </Pressable>
        
        </View>
    );
};

export default ProductList;
