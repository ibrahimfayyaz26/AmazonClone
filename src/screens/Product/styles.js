import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {},
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
  price: {fontSize: 18, fontWeight: 'bold'},
  oldPrice: {
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    fontSize: 12,
  },
});

export default styles;
