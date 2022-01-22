import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../qunatitySelector/QuantitySelector';
import styles from './styles';

const CartProductItem = ({cartItem}) => {
  const {item, quantity: quan} = cartItem;
  const [qunatity, setQunatity] = useState(quan);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
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
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector qunatity={qunatity} setQunatity={setQunatity} />
      </View>
    </View>
  );
};

export default CartProductItem;
