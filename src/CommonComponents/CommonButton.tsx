import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CommonButtonProps{
    label:string
}

const CommonButton: React.FC<CommonButtonProps> = ({
    label
}) => {
  return (
    <View>
      <Text>CommonButton</Text>
    </View>
  )
}

export default CommonButton

const styles = StyleSheet.create({})