import React, {useState} from 'react';
import {View, Text} from 'react-native';
import product from '../../data/product';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/qunatitySelector/QuantitySelector';
import ButtonCo from '../../components/button/ButtonCo';
import ImageCarousel from '../../components/imageCarousel/ImageCarousel';

const Product = () => {
  const [option, setOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [qunatity, setQunatity] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={option}
        onValueChange={itemValue => setOption(itemValue)}>
        {product.options.map(op => (
          <Picker.Item key={op} label={op} value={op} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector qunatity={qunatity} setQunatity={setQunatity} />
      <ButtonCo
        containerStyle={{backgroundColor: '#e3c905'}}
        press={() => console.warn('hello', 1)}
        text={'Add To Cart'}
      />
      <ButtonCo press={() => console.warn('hello', 2)} text={'Buy Now'} />
    </View>
  );
};

export default Product;
