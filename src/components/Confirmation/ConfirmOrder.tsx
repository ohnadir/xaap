import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ConfirmOrderProps{
    currentStep?: number;
    selectedOption?: string;
    selectedAddress?: string;
  }

const ConfirmOrder:React.FC<ConfirmOrderProps>  = ({
    currentStep,
    selectedOption,
    selectedAddress

}) => {
    const total = 2500;
    const handlePlaceOrder = async () => {};
    return (
        <>
            {
                currentStep === 3 && selectedOption === "cash" && (
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text>

                        <View
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 8,
                            backgroundColor: "white",
                            padding: 8,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            }}
                        >
                            <View>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                Save 5% and never run out
                            </Text>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 5 }}>
                                Turn on auto deliveries
                            </Text>
                            </View>

                            <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color="black"
                            />
                        </View>

                        <View
                            style={{
                            backgroundColor: "white",
                            padding: 8,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            }}
                        >
                            <Text>Shipping to {selectedAddress}</Text>

                            <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 8,
                            }}
                            >
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                                Items
                            </Text>

                            <Text style={{ color: "gray", fontSize: 16 }}>₹{total}</Text>
                            </View>

                            <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 8,
                            }}
                            >
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                                Delivery
                            </Text>

                            <Text style={{ color: "gray", fontSize: 16 }}>₹0</Text>
                            </View>

                            <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 8,
                            }}
                            >
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                Order Total
                            </Text>

                            <Text
                                style={{ color: "#C60C30", fontSize: 17, fontWeight: "bold" }}
                            >
                                ₹{total}
                            </Text>
                            </View>
                        </View>

                        <View
                            style={{
                            backgroundColor: "white",
                            padding: 8,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            }}
                        >
                            <Text style={{ fontSize: 16, color: "gray" }}>Pay With</Text>

                            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 7 }}>
                            Pay on delivery (Cash)
                            </Text>
                        </View>

                        <Pressable
                            onPress={handlePlaceOrder}
                            style={{
                            backgroundColor: "#FFC72C",
                            padding: 10,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            }}
                        >
                            <Text>Place your order</Text>
                        </Pressable>
                    </View>
                )
            }
        </>
    )
}

export default ConfirmOrder

const styles = StyleSheet.create({})