import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {icons, COLORS, FONTS, SIZES} from '../constants';

function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert('hihi')}
        style={{
          height: 50,
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.back}
          style={{
            height: 40,
            width: 40,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: '100%',
            backgroundColor: COLORS.darkgray,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h4}}>Location</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => console.log('ahaha')}>
        <Image
          source={icons.search}
          style={{
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
  },
});
