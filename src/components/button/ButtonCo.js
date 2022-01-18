import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

const ButtonCo = ({press, text, containerStyle}) => {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={press}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonCo;
