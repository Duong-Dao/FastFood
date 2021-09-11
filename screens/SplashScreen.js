import React from 'react';
import {View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {images} from '../constants';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={images.fastfood} style={{height: 300, width: 300}} />
      <ActivityIndicator size="large" color="#ccc" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b2958f',
  },
});
