// components/Header.js

import React from 'react';
import { View, Text } from 'react-native';

function Header({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default Header;
