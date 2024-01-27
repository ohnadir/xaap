import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                    focused 
                    ? 
                    <Entypo name="home" size={24} color="#008E97" />
                    : 
                    <AntDesign name="home" size={24} color="black" />
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: "#008E97" },
                    tabBarIcon: ({ focused }) =>
                    focused
                    ?
                    <Ionicons name="person" size={24} color="#008E97" />
                    :
                    <Ionicons name="person-outline" size={24} color="black" />
                }}
            />

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: "Cart",
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                    focused
                    ?
                    <AntDesign name="shoppingcart" size={24} color="#008E97" />
                    :
                    <AntDesign name="shoppingcart" size={24} color="black" />
                }}
            />
      </Tab.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})