// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../Header';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Header title="Home" />
      <Text>Welcome to my e-commerce app!</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

export default HomeScreen;
