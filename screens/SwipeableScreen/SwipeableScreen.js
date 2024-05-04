import React from 'react';
import { Button, View, Text } from 'react-native';

function SwipeableScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Swipeable Screen</Text>
      <Button
        title="Go to Swipeable Screen"
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  );
}

export default SwipeableScreen;
