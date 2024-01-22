import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

interface PaymentProps{
    currentStep?: number;
    selectedOption?: string;
    setCurrentStep?: (step: number) => void;
    option?: boolean;
    setSelectedOption?: (value: string) => void;
}


const Payment: React.FC<PaymentProps> = ({
    currentStep,
    selectedOption,
    setSelectedOption,
    setCurrentStep
}) => {
    return (
        <>
        {currentStep == 2 && (
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Select your payment Method
              </Text>
    
              <View
                style={{
                  backgroundColor: "white",
                  padding: 8,
                  borderColor: "#D0D0D0",
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 7,
                  marginTop: 12,
                }}
              >
                {selectedOption === "cash" ? (
                  <FontAwesome5 name="dot-circle" size={20} color="#008397" />
                ) : (
                  <Entypo
                    onPress={() => setSelectedOption?.("cash")}
                    name="circle"
                    size={20}
                    color="gray"
                  />
                )}
    
                <Text>Cash on Delivery</Text>
              </View>
    
              <View
                style={{
                  backgroundColor: "white",
                  padding: 8,
                  borderColor: "#D0D0D0",
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 7,
                  marginTop: 12,
                }}
              >
                {selectedOption === "card" ? (
                  <FontAwesome5 name="dot-circle" size={20} color="#008397" />
                ) : (
                  <Entypo
                    onPress={() => {
                      setSelectedOption?.("card");
                    }}
                    name="circle"
                    size={20}
                    color="gray"
                  />
                )}
    
                <Text>UPI / Credit or debit card</Text>
              </View>
              <Pressable
                onPress={() => setCurrentStep?.(3)}
                style={{
                  backgroundColor: "#FFC72C",
                  padding: 10,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text>Continue</Text>
              </Pressable>
            </View>
        )}
        </>
    )
}

export default Payment

const styles = StyleSheet.create({})