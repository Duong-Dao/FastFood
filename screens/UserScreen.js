import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {icons, SIZES} from '../constants';

const User = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container_top}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={icons.logout}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container_bot}>
        <Image
          source={icons.user}
          style={{
            height: 100,
            width: 100,
            resizeMode: 'contain',
          }}></Image>
        <Text>Username</Text>
      </View>
    </View>
  );
};

export default User;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  container_top: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: SIZES.padding * 2,
  },
  container_bot: {
    flex: 8,
    alignItems: 'center',
  },
});
