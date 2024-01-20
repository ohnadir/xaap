import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
interface CustomInputProps{
    placeholder: string,
    icon: any,
    onchange?: ()=> void,
    type?: boolean,
}
const CustomInput: React.FC<CustomInputProps> = ({
    placeholder,
    icon,
    onchange,
    type
}) => {
  return (
    <View 
        style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: '#D0D0D0',
            borderRadius: 5,
            paddingHorizontal : 12,
        }}
    >
        <Image
            style={{width: 18, height: 18}}
            source={icon}
        />
        <TextInput
            style={{
                color: "gray",
                paddingVertical : 5,
                width: 300,
            }} 
            secureTextEntry={type ? true : false}
            placeholder={placeholder}  
            placeholderTextColor="#8899a6"
        />
    </View>
  )
}

export default CustomInput