import { Image, Pressable, ScrollView, Text, View, Dimensions, DeviceEventEmitter } from 'react-native'
import React, { useEffect, useState } from 'react'
import Categories from '../../category.json';
const Category = () => {
    const [isLandscape, setIsLandscape] = useState(
        Dimensions.get('window').width > Dimensions.get('window').height
      );
    
      useEffect(() => {
        const handleOrientationChange = ({ window }: { window: { width: number; height: number } }) => {
          setIsLandscape(window.width > window.height);
        };
    
        Dimensions.addEventListener('change', handleOrientationChange);
    
        return () => {
          DeviceEventEmitter.removeAllListeners('change');
        };
    
    }, []);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10}}>
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
                            style={{ 
                                width: isLandscape ? 120 : 50, 
                                height: isLandscape ? 60 : 50, 
                                resizeMode: "contain" 
                            }}
                            source={{ uri: item.image }}
                        />

                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: isLandscape ? 16 : 12, 
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