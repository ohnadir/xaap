import { ScrollView, View, Pressable } from 'react-native'
import React from 'react'
import Category from '../src/components/Home/Category'
import SearchBar from '../src/components/Home/SearchBar'
import List from "../src/List.json"
import ProductList from '../src/components/Home/ProductList';

const HomeScreen = () => {
    
    return (
        <ScrollView style={{backgroundColor: "white" }} showsHorizontalScrollIndicator={false}>
            <SearchBar/>
            <Category/>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent:"space-around",
                        flexWrap: "wrap",
                        gap:20,
                        marginVertical: 15
                    }}
                >
                    {
                        List.map((item, index)=>(
                            <Pressable
                            
                                key={index}
                                style={{ 
                                    backgroundColor: 'white',
                                    borderRadius: 8,
                                    padding: 10,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                            >
                                <ProductList
                                    item={item}
                                    id={item.id} 
                                    title={item.title}  
                                    image={item.image} 
                                    price={item.price} 
                                    rating={item.rating.rate}
                                />
                            </Pressable>
                        ))
                    }
                </View>
            </ScrollView>
        </ScrollView>
    )
}

export default HomeScreen;