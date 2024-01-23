import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface InformationProps{
    title: string;
    price: number;
    
}
const Information: React.FC<InformationProps> = ({
    title,
    price
}) => {
    return (
        <View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "500", color: "black" }}>{title}</Text>
                <Text style={{ fontSize: 18, fontWeight: "600", color: "black", marginTop: 6 }}>${price}</Text>
            </View>
            <Text style={{ height: 1, borderColor: "#D0D0D0", borderBottomWidth: 1 }} />
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                <Text style={{color: "black"}}>Color: </Text>
                <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>Black</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                <Text style={{color: "black"}}>Size: </Text>
                <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>Normal</Text>
            </View>

            <Text style={{ height: 1, borderColor: "#D0D0D0", borderBottomWidth: 1 }} />

            <View style={{ padding: 10 }}>

                <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginVertical: 5 }}>Total : ${price}</Text>

                <Text style={{ color: "#00CED1" }}>FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins</Text>

                <View
                    style={{
                        flexDirection: "row",
                        marginVertical: 5,
                        alignItems: "center",
                        gap: 5,
                    }}
                >
                    <Ionicons name="location" size={24} color="black" />

                    <Text style={{ fontSize: 15, color: "black", fontWeight: "500" }}>
                        Deliver To Sujan - Bangalore 560019
                    </Text>
                </View>
            </View>

            <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}>
                IN Stock
            </Text>
        </View>
    )
}

export default Information

const styles = StyleSheet.create({})