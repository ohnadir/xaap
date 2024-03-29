import { View, Image, TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface CustomInputProps{
    name: string,
    InputName?: React.JSX.Element,
    iconName?: string,
    placeholder: string,
    icon: any,
    onchange?: ()=> void,
    type?: boolean,
}
const CustomInput: React.FC<CustomInputProps> = ({
    name,
    placeholder,
    icon,
    onchange,
    type,
    InputName
}) => {
    // const CustomIcon=inputName;
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
            {/* <InputName
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
            /> */}
            <Image
                style={{width: 18, height: 18,}}
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