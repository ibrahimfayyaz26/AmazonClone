import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ProductItem from '../../components/productItem/ProductItem';
import products from '../../data/products';

const Home = () => {
  return (
    <View style={{padding: 5}}>
      <FlatList
        data={products}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
