import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 5,
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
});

export default styles;
