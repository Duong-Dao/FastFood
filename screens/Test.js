import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
   Alert, Image, SafeAreaView,
   FlatList, StyleSheet, Text, TouchableOpacity, View, Animated, ToastAndroid
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import CustomCart from '../components/CustomCart';
import { COLORS, icons, restaurantData, SIZES } from '../constants';
import { removeItemFromCart } from '../redux/actions/actions';
//import { decrement, increment, removeItemFromCart } from '../redux/actions/actions';
import Swipeable from 'react-native-gesture-handler/Swipeable';


export default function Info() {
   //khai báo các hàm cần sử dụng
   //const navigation = useNavigation()
   const cart = useSelector(state => state.cart)
   const dispatch = useDispatch()


   //xoá item
   const removeItem = (id) => {
      //action
      const action = removeItemFromCart(id)
      //dispatch
      dispatch(action)

      //
      Alert.alert("Xong")
   }
   const renderRightAction = (progress, dragX, onClick) => {

      const scale = dragX.interpolate({
         inputRange: [-60, 0.5],
         outputRange: [1, 0.1]
      })
      const Style = {
         transform: [
            {
               scale
            }
         ]
      }
      return (
         <Animated.View
            style={[Style, {
               alignItems: "center",
               justifyContent: "center",
               backgroundColor: "cyan",
               width: 90,
               height: "100%"
            }]}>
            <TouchableOpacity
               onPress={onClick}
            >
               <Image
                  source={icons.trash}
                  style={{
                     height: 35,
                     width: 35
                  }}
               />
            </TouchableOpacity>
         </Animated.View>
      )
   }

   //Render từng item trong danh sách 
   const renderItem = ({ item }, onClick) => {
      return (
         <Swipeable
            renderRightActions={(progress, dragX) => renderRightAction(progress, dragX, onClick)}>
            <View
               style={{
                  alignItems: "center",
                  marginVertical: 10,
               }}>
               <CustomCart item={item} />
            </View>
         </Swipeable>
      )
   }
   return (
      <SafeAreaView
         style={styles.container}>
         {/* View 1 */}
         <View
            style={{
               flex: 1,
               backgroundColor: COLORS.primary,
            }}>
            <TouchableOpacity
               style={{
                  height: 50,
                  width: 50,
                  marginTop: 30,
                  marginLeft: 20

               }}
            //onPress={() => navigation.goBack()}
            >
               <Image
                  source={icons.back}
                  style={{
                     height: 35,
                     width: 35
                  }}
               />
            </TouchableOpacity>
         </View>
         {/* View 2 */}
         <View
            style={{
               position: "absolute",
               bottom: 0,
               width: "100%",
               height: "85%",
               backgroundColor: "white",
               borderTopLeftRadius: 25,
               borderTopRightRadius: 25,
               alignItems: "center"
            }}>
            {/* hiển thị danh sách trong giỏ hàng */}
            <View
               style={{
                  position: "absolute",
                  top: 15,
                  height: "60%",
                  width: "95%",
                  backgroundColor: "white",
                  padding: SIZES.padding,
                  borderRadius: SIZES.radius,
                  //backgroundColor: COLORS.primary,
                  ...styles.shadows
               }}>


               <FlatList
                  data={restaurantData}
                  renderItem={(item) => renderItem(item, () => { removeItem(item.id) })}
                  keyExtractor={item => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                     borderRadius: SIZES.radius
                  }}
               />

            </View>
            <View
               style={{
                  position: "absolute",
                  bottom: 80,
                  height: "20%",
                  width: "95%",
                  backgroundColor: "cyan",

               }}>
               {/* Cot ben trai */}
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between"
                  }}>
                  <Text>Total</Text>
                  <Text>111111</Text>
               </View>

            </View>
            <TouchableOpacity
               style={{
                  position: "absolute",
                  bottom: 10,
                  height: 50,
                  width: "90%",
                  backgroundColor: COLORS.primary,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: SIZES.radius
               }}
               onPress={() => Alert.alert("Thanh toán thành công")}
            >
               <Text
                  style={{
                     color: "white",
                     fontSize: 18,
                     fontStyle: "italic"
                  }}>Payment</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   shadows: {
      shadowColor: "#000",
      shadowOffset: {
         height: 0,
         width: 0
      },
      shadowOpacity: 0.3,
      shadowRadius: SIZES.radius,
      elevation: 20
   }
})
