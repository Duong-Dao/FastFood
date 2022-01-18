import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { icons } from '../constants';
import { COLORS, SIZES } from '../constants/index';
import { addItemToCart } from '../redux/actions/actions';


export default function FoodInfoScreen({ route }) {

   const navigation = useNavigation()
   const dispatch = useDispatch()

   const addToCart = () => {
      //create item
      const item = {
         id: route.params.id,
         name: route.params.name,
         images: route.params.images,
         price: route.params.price,
         quantity: 1
      }
      //create action
      const action = addItemToCart(item)
      //dispatch
      dispatch(action)
      //thong bao ra man hinh
      ToastAndroid.show("Thành công", ToastAndroid.SHORT)
   }


   return (
      <SafeAreaView
         style={styles.container}>
         <View
            style={{
               flex: 1,
               width: "100%"
            }}>
            <ImageBackground
               source={route.params.images}
               resizeMode="cover"
               style={{
                  height: "100%",
                  width: "100%",
               }}
            >
               <TouchableOpacity
                  style={{
                     height: 55,
                     width: 55,
                     marginTop: 35,
                     marginLeft: 20,
                     alignItems: "center",
                     justifyContent: "center"
                  }}
                  onPress={() => navigation.goBack()}
               >
                  <Image
                     source={icons.back}
                     style={{
                        height: 50,
                        width: 50
                     }}
                  />
               </TouchableOpacity>
            </ImageBackground>
         </View>
         <View
            style={{
               position: "absolute",
               backgroundColor: "white",
               bottom: 100,
               height: 200,
               width: "90%",
               borderRadius: SIZES.radius / 2
            }}>
            <Text
               style={{
                  lineHeight: 35,
                  fontSize: 30,
                  marginTop: 2,
                  marginLeft: 7,
                  marginBottom: 10,
                  fontWeight: "bold"
               }}>{route.params.name}</Text>

            <ScrollView>

               <Text
                  style={{
                     lineHeight: 25,
                     fontSize: 15,

                     marginLeft: 7,
                     fontWeight: "500"
                  }}>{route.params.description}</Text>
            </ScrollView>

         </View>
         <TouchableOpacity
            style={{
               position: "absolute",
               backgroundColor: COLORS.primary,
               bottom: 20,
               width: "90%",
               height: 50,
               borderRadius: SIZES.radius,
               alignItems: "center",
               justifyContent: "center"
            }}
            onPress={() => addToCart()}
         >
            <Text
               style={{
                  fontSize: 23,
                  color: "white",
                  fontWeight: "700"
               }}>
               ADD TO CART
            </Text>
         </TouchableOpacity>

      </SafeAreaView>

   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center"
   },
   title: {
      lineHeight: 25,
      fontSize: 14,
      color: "#000"
   }
})
