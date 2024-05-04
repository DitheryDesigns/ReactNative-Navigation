import React from 'react';
import { Button, View, Text } from 'react-native';

function LandingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Landing Screen</Text>
      <Button
        title="Go to Swipeable Screen"
        onPress={() => navigation.navigate('Swipeable')}
      />
    </View>
  );
}

export default LandingScreen;
