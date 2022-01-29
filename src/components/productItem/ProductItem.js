import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ProductItem = ({item}) => {
  const navigation = useNavigation();

  const press = () => {
    navigation.navigate('product', {id: item.id});
  };

  return (
    <Pressable onPress={press} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.right}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((e, i) => (
            <FontAwesome
              key={e + item.id}
              style={styles.star}
              name={
                e <= item.avgRating
                  ? 'star'
                  : e - 0.5 <= item.avgRating
                  ? 'star-half-full'
                  : 'star-o'
              }
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
