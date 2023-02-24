// screens/LoginScreen.js

import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Header from '../Header';

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin() {
    // Handle login logic here
  }

  return (
    <View>
      <Header title="Login" />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

export default LoginScreen;
