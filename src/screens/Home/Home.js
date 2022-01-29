import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ProductItem from '../../components/productItem/ProductItem';
import products from '../../data/products';

const Home = ({search}) => {
  // console.log(search);
  return (
    <View style={{padding: 5}}>
      <FlatList
        data={products}
        keyExtractor={({id}) => id * Math.random()}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
