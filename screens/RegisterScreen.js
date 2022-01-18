import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,  TextInput, SafeAreaView, Image, ImageBackground } from 'react-native'
import { SIZES, icons, COLORS, FONTS, images } from '../constants'

function Register() {

   function renderHeader() {
      return (
         <View
            style={{
               marginTop: -150,
               marginBottom: 100,
               alignItems: "center"
            }}>
            <Text
               style={{
                  fontSize: 80,
                  color: "#000",
                  fontWeight: "bold"
               }}>Register</Text>
         </View>
      )
   }

   function renderInput() {
      return (
         <View
            style={{

            }}>
            <View
               style={{
                  flexDirection: "row",
               }}>
               <View
                  style={{
                     width: "80%",
                     borderTopRightRadius: 105,
                     borderBottomRightRadius: 105,
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
                        borderBottomWidth: 0.8,
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
                        borderBottomWidth: 0.8,
                        fontSize: 25
                     }}
                     //onChangeText={()=>}
                     placeholder="Password"
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
                     placeholder="Email"
                     keyboardType="default">
                  </TextInput>
               </View>
               <View
                  style={{
                     position: "absolute",
                     height: 80,
                     width: 80,
                     borderRadius: SIZES.radius * 2,
                     backgroundColor: COLORS.primary,
                     right: 44,
                     top: 64,
                     zIndex: 1,
                     ...styles.shadowContainer,
                     alignItems: "center",
                     justifyContent: "center"
                  }}>
                  <TouchableOpacity
                     style={{
                        height: 80,
                        width: 80,
                        alignItems: "center",
                        justifyContent: "center",
                     }}>
                     <Image
                        source={icons.check}
                        style={{
                           height: 35,
                           width: 35
                        }} />
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      )
   }

   return (
      <SafeAreaView
         style={{
            ...styles.container
         }}>
         <ImageBackground
            style={styles.container}
            source={images.bgLog_Reg}
            resizeMode="stretch">
            {renderHeader()}
            {renderInput()}
         </ImageBackground>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center"
   },
   shadowContainer: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 25,
      elevation: 10

   },
});
export default Register;