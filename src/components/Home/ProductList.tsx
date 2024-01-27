import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    Info: { 
        id: number;
        title: string;
        price: number;
    }
  };

interface ProductListProps {
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
    addedToCart
}) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleNavigate = () => {
        navigation.navigate("Info", { 
            id: id,
            title: title,
            price: price, 
        });
    };

    return (
        <View>
            <Pressable key={id} onPress={handleNavigate}>
                <Image
                    style={{ width: 150, height: 150, resizeMode: "contain" }}
                    source={{ uri: image }}
                />

                <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
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
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>₹{price}</Text>
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
                        <Text>Added to Cart</Text>
                    </View>
                ) : (
                    <Text>Add to Cart</Text>
                )}
            </Pressable>
        
        </View>
    );
};

export default ProductList;
