import { Image, Text, View, Pressable } from 'react-native'
import React from 'react'

interface ProductInfoProps{
    name: string;
    price: number;
    rating?: boolean;
    image: string;
    quantity: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
    name,
    price,
    rating,
    image,
    quantity
}) => {
  return (
    <View style={{borderBottomWidth:1, borderColor: "#D0D0D0", paddingVertical: 20}}>
        <View style={{flexDirection: "row", gap: 5}}>
            <View style={{width : "40%"}}>
                <Image style={{ width: 120, height: 120, resizeMode: "contain" }} source={{uri:image}}/>
            </View>
            <View style={{width : "60%"}}>
                <Text numberOfLines={3} style={{ color: "black"}} >{name}</Text>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginTop: 6 }}>${price}</Text>
                <Text style={{ color: "green" }}>In Stock</Text>
                <Text style={{ color: "green" }}>{rating} rating</Text>
            </View>
        </View>
        <View style={{flexDirection: "row", gap: 10, alignItems: "center", marginVertical: 16}}>
            <Pressable 
                style={{
                    backgroundColor : "#d0d0d0", 
                    paddingHorizontal:8, 
                    borderRadius: 4
                }}>
                    <Text style={{color: "black", fontSize: 18, fontWeight: "400"}}>-</Text>
            </Pressable>
            <Text style={{ color: "green" }}>{quantity}</Text>
            <Pressable 
                style={{
                    backgroundColor : "#d0d0d0", 
                    paddingHorizontal:8, 
                    borderRadius: 4
                }}>
                    <Text style={{color: "black", fontSize: 18, fontWeight: "400"}}>+</Text>
            </Pressable>
            <Pressable 
                style={{
                    backgroundColor: "white", 
                    borderWidth: 1, 
                    borderRadius: 4,
                    paddingHorizontal: 8,
                    paddingVertical: 3, 
                }}>
                    <Text
                        style={{
                            color: "black",
                            fontSize: 12,
                            fontWeight: "400",
                            borderColor: "black",
                            
                        }}
                    >
                        Delete
                    </Text>
            </Pressable>
        </View>
        <View 
            style={{
                flexDirection: "row", 
                gap: 16, 
                alignItems: "center",
            }}
        >
            <Text 
                style={{
                    color: "black",
                    borderWidth:1,
                    borderRadius:4, 
                    paddingHorizontal: 6, 
                    paddingVertical: 2, 
                    fontSize: 12,
                    fontWeight: "400",
                    borderColor: "black"
                }}
            >
                    Save For Later
            </Text>
            <Text 
                style={{
                    color: "black",
                    borderWidth:1,
                    borderRadius:4, 
                    paddingHorizontal: 6, 
                    paddingVertical: 2, 
                    fontSize: 12,
                    fontWeight: "400",
                    borderColor: "black"
                }}
            >
                See More like this
            </Text>
        </View>
    </View>
  )
}

export default ProductInfo;