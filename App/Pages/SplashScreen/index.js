import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default SplashScreen = () => {
  return (
    <View style={styles.bgMainApp}>
      <Text>ini halaman splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
