import { ScrollView, View } from 'react-native'
import React from 'react'
import Category from '../src/components/Home/Category'
import SearchBar from '../src/components/Home/SearchBar'

const HomeScreen = () => {
    return (
        <ScrollView style={{backgroundColor: "white"}}>
            <SearchBar/>
            <Category/>
        </ScrollView>
    )
}

export default HomeScreen;