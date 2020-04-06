import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.absoluteCenter}>
      <Text style={styles.text}> This is home. Juriswed! ™ </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});
