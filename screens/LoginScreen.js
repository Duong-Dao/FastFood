import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { SIZES } from '../constants';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 1,
          height: 50,
          width: '90%',
          alignItems: 'center',
          borderRadius:SIZES.radius,
          
        }}
      />
      <Button title="Login" onPress={() => navigation.navigate('User')} />
    </View>
  );
};

export default Login;
