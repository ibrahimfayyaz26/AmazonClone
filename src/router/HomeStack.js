import React, {useState} from 'react';
import Home from '../screens/Home/Home';
import Product from '../screens/Product/Product';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

const Header = ({search, setSearch}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={19} />
        <TextInput
          style={{height: 40, marginLeft: 7}}
          placeholder="Search....."
          onChangeText={setSearch}
          value={search}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [search, setSearch] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header search={search} setSearch={setSearch} />,
      }}>
      <Stack.Screen name={'home'} options={{headerTitle: 'Home'}}>
        {() => <Home search={search} />}
      </Stack.Screen>
      <Stack.Screen
        name={'product'}
        component={Product}
        options={{headerTitle: 'Product'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
