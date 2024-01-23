import React, { useState } from 'react'
import {
    Text,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
    ImageBackgroundProps,
    Dimensions,
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

type CustomImageBackgroundProps = ImageBackgroundProps & { style: { resizeMode?: string } };
interface BackgroundImageProps{
    images?: string;
    onAction?: ()=> void;
    onShare?: ()=> void;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
    images,
    onAction,
    onShare
}) => {
    const [hasFavorited, setHasFavorited] = useState(false);
    console.log(hasFavorited)
    const { width } = Dimensions.get("window");
    const height = (width * 100) / 100;
    const imageBackgroundStyle: CustomImageBackgroundProps['style'] = {
        width,
        height,
        resizeMode: 'contain',
    };
    return (
        <ScrollView >
            <ImageBackground
                style={imageBackgroundStyle}
                source={{ uri: images }}
            >
                <View
                    style={{
                        padding: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: "#C60C30",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        }}
                    >
                        <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: 12,
                        }}
                        >
                        20% off
                        </Text>
                    </View>

                    <View
                        style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: "#E0E0E0",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        }}
                    >
                        <MaterialCommunityIcons
                        name="share-variant"
                        size={24}
                        color="black"
                        />
                    </View>
                </View>

                <View
                    style={{
                        width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: "#E0E0E0",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            marginTop: "auto",
                            marginLeft: 20,
                            marginBottom: 20,
                            position: "relative"
                        }}
                    >
                        <Pressable
                            onPress={()=>setHasFavorited(!hasFavorited)}
                        >
                            
                            <AntDesign name="hearto" size={23} color="black" />
                            <AntDesign
                                style={{
                                    position: "absolute", 
                                    paddingLeft: 2, 
                                    paddingTop: 1, 
                                    zIndex: -1
                                }} name="heart" 
                                size={20} 
                                color={hasFavorited ? "red" : "#E0E0E0"}
                             />
                        </Pressable>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default BackgroundImage;