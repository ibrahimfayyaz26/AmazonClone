import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 150,
    resizeMode: 'contain',
    flex: 2,
  },
  right: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {margin: 2},
  price: {fontSize: 18, fontWeight: 'bold'},
  oldPrice: {
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    fontSize: 12,
  },
  quantityContainer: {
    margin: 5,
  },
});

export default styles;
