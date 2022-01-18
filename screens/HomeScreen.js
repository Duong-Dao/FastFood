import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES, images } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux"
import { categoryData, restaurantData } from "../constants"


export default function HomeScreen() {
   const navigation = useNavigation();

   
   const [selectedCategory, setSelectedCategory] = useState(null)
   const [restaurant, setRestaurant] = useState(restaurantData)
   
   function onSelectedCategories(catelory) {
      
      let restaurantList = restaurantData.filter(i =>
         i.categories.includes(catelory.id))
      setRestaurant(restaurantList)
      setSelectedCategory(catelory)
   }
   function renderHeader() {
      const cart = useSelector(state => state.cart)
      return (
         <View
            style={{
               flexDirection: 'row',
               height: 50,
               marginVertical: SIZES.padding
            }}>
            

            <TouchableOpacity
               //onPress={() => navigation.goBack()}
               style={{
                  height: 50,
                  width: 50,
                  paddingLeft: SIZES.padding * 2,
                  justifyContent: 'center',
               }}>
               <Image
                  source={icons.user}
                  style={{
                     height: 30,
                     width: 30,
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
                     backgroundColor: COLORS.white,
                     borderRadius: SIZES.radius,
                     alignItems: 'center',
                     justifyContent: 'center',
                     ...styles.shadows
                  }}>
                  <Text style={{ ...FONTS.h3 }}>Welcome</Text>
               </View>
            </View>
           
            <View style={{ padding: 5 }}>
               <View style={{
                  position: 'absolute',
                  height: 25,
                  width: 25,
                  borderRadius: 15,
                  backgroundColor: COLORS.primary,
                  right: 35,
                  bottom: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2000,
               }}>
                  <Text style={{
                     color: 'white',
                     fontWeight: 'bold'
                  }}>{cart.food.length}</Text>
               </View>
               <TouchableOpacity
                  style={{
                     height: 50,
                     width: 50,
                     paddingRight: SIZES.padding,
                     justifyContent: 'center',
                  }}
                  onPress={() => navigation.navigate("Cart")}>
                  <Image
                     source={icons.myCart}
                     style={{
                        height: 30,
                        width: 30,
                        resizeMode: "contain"
                     }}
                  />
               </TouchableOpacity>
            </View>
         </View>
      );
   }

   function renderMenuCategory() {

      const renderItem = ({ item }) => (
         <TouchableOpacity
            style={{
               borderRadius: SIZES.radius,
               alignItems: "center",
               justifyContent: "center",
               padding: SIZES.padding,
               paddingBottom: SIZES.padding * 2,
               marginRight: SIZES.padding,
               backgroundColor: (selectedCategory?.id === item.id) ? COLORS.primary : COLORS.white,
               width: 70,
               ...styles.shadows,
            }}
            onPress={() => onSelectedCategories(item)}>
            <View
               style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: COLORS.white
               }}>
               <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={{
                     height: 30,
                     width: 30
                  }}
               ></Image>
            </View>

            <Text
               style={{
                  ...FONTS.h5,
                  marginTop: 10
               }}>{item.name}</Text>
         </TouchableOpacity>
      )
      return (
         <View>
            <View
               style={{
                  marginVertical: 20,
                  marginHorizontal: 20
               }}>
               <Text
                  style={{
                     ...FONTS.h1,
                     fontSize: SIZES.h3,
                     textTransform: "uppercase"
                  }}
               >
                  menu categories
               </Text>
            </View>
            <FlatList
               data={categoryData}
               horizontal
               showsHorizontalScrollIndicator={false}
               keyExtractor={item => item.id.toString()}
               renderItem={renderItem}
               contentContainerStyle={{
                  paddingHorizontal: SIZES.padding * 2,
                  paddingVertical: SIZES.padding
               }}
            >
            </FlatList>
         </View>
      );
   }

   function renderMenuRestaurant() {

      const renderItem = ({ item }) => (
         <View
            style={{
               paddingBottom: SIZES.padding,
               marginBottom: SIZES.padding,

            }}>
            <TouchableOpacity
               style={{
                  marginBottom: SIZES.padding,
               }}

               onPress={() => navigation.navigate("Info", {
                  id: item.id,
                  images: item.photo,
                  name: item.name,
                  price: item.price,
                  description: item.description
               })}
            >
               <View
                  style={{
                     borderWidth: 0.5,
                     borderRadius: SIZES.radius
                  }}>
                  <Image
                     source={item.photo}
                     resizeMode="cover"
                     style={{
                        width: "100%",
                        height: 300,
                        borderRadius: SIZES.radius,
                     }}
                  >
                  </Image>
                  <View
                     style={{
                        position: "absolute",
                        bottom: 0,
                        height: 50,
                        width: SIZES.width * 0.35,
                        backgroundColor: COLORS.white,
                        borderTopRightRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                        alignContent: "center",
                        justifyContent: "center",
                        
                     }}>
                     <Text
                        style={{
                           ...FONTS.body2,
                           textAlign: "center",
                           fontWeight: "bold"
                        }}>${item.price}</Text>
                  </View>

               </View>

            </TouchableOpacity>
            <Text
               style={{
                  ...FONTS.body2,
                  textAlign: "center",
                  paddingBottom: SIZES.padding
               }}>{item.name}</Text>
         </View>
      )
      return (
         <FlatList
            data={restaurant}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            style={{
               paddingHorizontal: SIZES.padding,
               flex: 1
            }}
         />
      )
   }
   return (
      <SafeAreaView style={styles.container}>
         {renderHeader()}
         {renderMenuCategory()}
         {renderMenuRestaurant()}
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4
   },
   shadows: {
      shadowColor: "#000",
      shadowOffset: {
         height: 3,
         width: 0
      },
      shadowRadius: 3,
      shadowOpacity: 0.1,
      elevation: 10,

   }
})
