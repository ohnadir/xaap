import {Pressable, Text} from 'react-native';
import React from 'react';

interface CommonButtonProps{
    label:string,
    color?: string,
    outline?:boolean
}

const CommonButton: React.FC<CommonButtonProps> = ({
    label,
    color,
    outline
}) => {
  return (
    <Pressable
          style={{
            width: outline ? "100%" : 200,
            backgroundColor: "#FEBE10",
            borderRadius: 4,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: "400",
              color: "black"
            }}
          >
            {label}
          </Text>
        </Pressable>
  )
}

export default CommonButton