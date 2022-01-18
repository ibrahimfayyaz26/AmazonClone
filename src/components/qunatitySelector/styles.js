import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e3e3ee3',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#0072b9',
  },
});

export default styles;
