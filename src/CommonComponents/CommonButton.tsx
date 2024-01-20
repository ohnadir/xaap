import {Pressable, Text} from 'react-native';
import React from 'react';

interface CommonButtonProps{
    label:string,
    color: string,
}

const CommonButton: React.FC<CommonButtonProps> = ({
    label,
    color
}) => {
  return (
    <Pressable
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 4,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 5,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {label}
          </Text>
        </Pressable>
  )
}

export default CommonButton