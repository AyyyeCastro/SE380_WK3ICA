import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function WhoAmI() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>I am Andrew</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
