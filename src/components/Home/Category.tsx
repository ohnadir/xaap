import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import Categories from '../../category.json'
const Category = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                Categories.map((item, index) => (
                    <Pressable
                        key={index}
                        style={{
                            margin: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{ width: 50, height: 50, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />

                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 12,
                                fontWeight: "500",
                                marginTop: 5,
                            }}
                        >
                            {item?.name}
                        </Text>
                    </Pressable>
                ))
            }
            <View style={{height:1, borderBottomWidth: 1,  borderColor: "#d0d0d0"}}/>
          </ScrollView>
    )
}
export default Category;