import React from 'react';
import Cart from '../screens/Cart/Cart';
import Address from '../screens/Address/Address';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'cart'}
        component={Cart}
        options={{headerTitle: 'Cart'}}
      />
      <Stack.Screen
        name={'address'}
        component={Address}
        options={{headerTitle: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
