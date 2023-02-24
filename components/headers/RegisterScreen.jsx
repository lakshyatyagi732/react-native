// screens/RegisterScreen.js

import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Header from '../Header';

function RegisterScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleRegister() {
    // Handle registration logic here
  }

  return (
    <View>
      <Header title="Register" />
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default RegisterScreen;
