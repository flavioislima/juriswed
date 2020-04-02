import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {AppNavigation} from './src/navigation';

const App = () => {
  return (
    <>
      <View style={styles.absoluteCenter}>
        <Text style={styles.text}> Hello, Juriswed! ™ </Text>
      </View>
      <AppNavigation />
    </>
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

export default App;
