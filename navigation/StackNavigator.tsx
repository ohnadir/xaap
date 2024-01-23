import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CartScreen from '../screens/CartScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Confirm"
          component={ConfirmationScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Info"
          component={ProductDetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
