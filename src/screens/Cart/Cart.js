import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import CartProductItem from '../../components/cartProductItem/CartProductItem';
import products from '../../data/cart';
import ButtonCo from '../../components/button/ButtonCo';

const Cart = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.item?.price || 0) * product.quantity,
    0,
  );

  return (
    <View style={{padding: 5}}>
      <FlatList
        data={products}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <ButtonCo
              text="Proceed to checkout"
              press={() => console.warn('hello3')}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Cart;
