import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const Login = () => {
   const navigation = useNavigation();
   function renderHeader() {
      return (
         <View
            style={{
               marginTop: 70,
               alignItems: "center",

            }}>
            <Text
               style={{
                  fontSize: 80,
                  color: "#000",
                  fontWeight: "bold"
               }}>Login</Text>
         </View>
      )
   }

   function renderInput() {

      return (
         <View>
            <View
               style={{
                  flexDirection: "row",
                  marginTop: 100
               }}>
               <View
                  style={{
                     width: "80%",
                     borderTopRightRadius: 55,
                     borderBottomRightRadius: 55,
                     backgroundColor: "white",
                     zIndex: 0,
                     marginLeft: 0,
                     ...styles.shadowContainer,
                  }}>
                  <TextInput
                     style={{
                        height: 70,
                        width: "99%",
                        textAlign: "left",
                        borderBottomWidth: 0.5,
                        fontSize: 25
                     }}
                     //onChangeText={()=>}
                     placeholder="Username"
                     keyboardType="default">

                  </TextInput>
                  <TextInput
                     style={{
                        height: 70,
                        width: "99%",
                        textAlign: "left",
                        fontSize: 25
                     }}
                     //onChangeText={()=>}
                     placeholder="Password"
                     keyboardType="default">
                  </TextInput>
               </View>
               <View
                  style={{
                     position: "absolute",
                     height: 65,
                     width: 65,
                     borderRadius: SIZES.radius * 2,
                     backgroundColor: COLORS.primary,
                     right: 44,
                     top: 39,
                     zIndex: 1,
                     ...styles.shadowContainer,
                     alignItems: "center",
                     justifyContent: "center"
                  }}>
                  <TouchableOpacity
                     style={{
                        height: 50,
                        width: 50,
                        alignItems: "center",
                        justifyContent: "center",

                     }}
                  >
                     <Image
                        source={icons.rightArrow}
                        style={{
                           height: 35,
                           width: 35
                        }} />
                  </TouchableOpacity>
               </View>
            </View>
            <Text
               style={{
                  fontSize: 20,
                  marginLeft: 200,
                  marginTop: 50,
                  color: "#FF3300",
                  fontWeight: "bold"
               }}
               onPress={() => Alert.alert("Qu??n m???t kh???u")}>Forgot Password ?</Text>
         </View>
      )
   }
   function renderFooter() {
      return (
         <TouchableOpacity
            style={{
               height: 50,
               width: 150,
               borderTopRightRadius: 55,
               borderBottomRightRadius: 55,
               alignItems: "center",
               justifyContent: "center",
               backgroundColor: COLORS.primary,
               marginTop: 50,
               ...styles.shadowContainer,
            }}
            onPress={() => navigation.replace("Register")}>
            <Text
               style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#000"
               }}>Register</Text>
         </TouchableOpacity>
      )
   }

   return (
      <SafeAreaView
         style={styles.container}>
         <ImageBackground
            source={images.bgLog_Reg}
            resizeMode="stretch"
            style={{
               opacity: 0.95,
               ...styles.container
            }}>
            {renderHeader()}
            {renderInput()}
            {renderFooter()}
         </ImageBackground>
      </SafeAreaView>
   )
};

export default Login;
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   shadowContainer: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: SIZES.radius / 2,
      elevation: 15,
   }
})
