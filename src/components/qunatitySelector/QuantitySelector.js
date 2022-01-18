import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const QuantitySelector = ({qunatity, setQunatity}) => {
  const min = () => {
    setQunatity(Math.max(0, qunatity - 1));
  };
  const plus = () => {
    setQunatity(qunatity + 1);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={plus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Text style={styles.quantity}>{qunatity}</Text>
      <Pressable onPress={min} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
