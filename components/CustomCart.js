import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useDispatch, } from 'react-redux'
import { COLORS, SIZES } from '../constants'
import { decrement, increment } from '../redux/actions/actions';


export default function CustomCart(props) {

   const dispatch = useDispatch()
   const { item } = props
   return (
      <View
         style={[styles.container, styles.shadows]}>
         <View
            style={{
               flex: 1,
               height: "100%",
               alignItems: "center",
               justifyContent: "center",
               marginLeft: 5
            }}>

            <Image
               source={item.images}
               resizeMode="cover"
               style={{
                  height: 50,
                  width: 50,
                  borderRadius: SIZES.radius / 4
               }}
            />
         </View>
         <View
            style={{
               flex: 2,
               height: "100%",
               alignItems: "center",
               justifyContent: "center",
            }}>
            <Text>{item.name}</Text>
         </View>
         <View
            style={{
               flex: 0.5,
               height: "100%",
               alignItems: "center",
               justifyContent: "center",
            }}>
            <Text>${item.price}</Text>
         </View>
         <View
            style={{
               flex: 1,
               height: "100%",
               alignItems: "center",
               justifyContent: "center",
               flexDirection: "row"
            }}>
            <TouchableOpacity
               style={{
                  height: 20,
                  width: 20,
                  backgroundColor: COLORS.primary,
                  borderRadius: 4,
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 5
               }}
               onPress={() => dispatch(decrement(item.id))}
            >
               <Text
                  style={{
                     color: "white",
                     fontWeight: "700"
                  }}>-</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity
               style={{
                  height: 20,
                  width: 20,
                  backgroundColor: COLORS.primary,
                  borderRadius: 4,
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 5
               }}
               onPress={() => dispatch(increment(item.id))}
            >
               <Text
                  style={{
                     color: "white",
                     fontWeight: "700"
                  }}>+</Text>
            </TouchableOpacity>
         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      height: 60,
      width: "90%",
      borderRadius: 5,
      flexDirection: "row",
      borderWidth: 0.1,
      padding: SIZES.padding
   },
   shadows: {
      shadowColor: "#000",
      shadowOffset: {
         height: 0,
         width: 0
      },
      shadowOpacity: 0.3,
      shadowRadius: SIZES.radius,
      elevation: 10
   }
})
