import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import ButtonCo from '../../components/button/ButtonCo';

const countries = countryList.getData();

const Address = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [city, setCity] = useState('');

  const onCheckout = () => {
    console.warn('Hello');
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Picker selectedValue={country} onValueChange={setCountry}>
          {countries.map(op => (
            <Picker.Item key={op.code} label={op.name} value={op.code} />
          ))}
        </Picker>
      </View>
      {/* Full name */}
      <View style={styles.row}>
        <Text style={styles.label}>Full name (First and Last name)</Text>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={fullname}
          onChangeText={setFullname}
        />
      </View>

      {/* Phone number */}
      <View style={styles.row}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
        />
      </View>

      {/* Address */}
      <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={text => {
            setAddress(text);
            setAddressError('');
          }}
        />
      </View>

      {/* City */}
      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <ButtonCo text="Checkout" press={onCheckout} />
    </View>
  );
};

export default Address;
