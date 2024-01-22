import { Pressable, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

interface DeliveryMethodProps{
  currentStep?: number;
  setCurrentStep?: (step: number) => void;
  option?: boolean;
  setOption?: (value: boolean) => void;
}
const DeliveryMethod:React.FC<DeliveryMethodProps> = ({
  currentStep,
  option,
  setOption,
  setCurrentStep
}) => {
  const handleStep=()=>{
    setCurrentStep?.(2)
  }
  const handleOption=()=>{
    setOption?.(!option)
  }
  return (
    <>
      {currentStep == 1 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Choose your delivery options
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 8,
              gap: 7,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            {option ? (
              <FontAwesome name="dot-circle-o" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={handleOption}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text style={{ flex: 1 }}>
              <Text style={{ color: "green", fontWeight: "500" }}>
                Tomorrow by 10pm
              </Text>{" "}
              - FREE delivery with your Prime membership
            </Text>
          </View>

          <Pressable
            onPress={handleStep}
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

export default DeliveryMethod