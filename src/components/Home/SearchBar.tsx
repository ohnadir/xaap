import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = () => {
    return (
        <View
            style={{
                backgroundColor: "#00CED1",
                padding: 10,
                flexDirection: "row",
                alignItems: "center"
            }}
          >
            <Pressable
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 7,
                    gap: 8,
                    backgroundColor: "white",
                    borderRadius: 3,
                    height: 38,
                    flex: 1,
                    width: "100%",
                    borderWidth: 1
                }}
            >
                <AntDesign
                    style={{ paddingLeft: 10 }}
                    name="search1"
                    size={20}
                    color="black"
                />
                <TextInput style={{width: "90%"}} placeholder="Search Amazon.in" />
            </Pressable>

            <Feather name="mic" size={20} color="black" />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})