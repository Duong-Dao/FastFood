import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import CustomRowItem from '../components/CustomRowItem';


const User = () => {
   const navigation = useNavigation();
   function renderHeader() {
      return (
         <View
            style={{
               backgroundColor: COLORS.white,
               height: 20
            }}>
            
         </View>
      );
   }

   function renderUserProfile() {
      return (
         //View cha
         <View
            style={{
               flex: 1,
               backgroundColor: COLORS.white
            }}>

            {/**View con Top */}
            <View
               style={{
                  flex: 2,
                  marginBottom: SIZES.padding * 2
               }}>
               {/**View chua avatar va username */}
               <View
                  style={{
                     flex: 2,
                     flexDirection: "row"
                  }}>
                  {/**Avatar */}

                  <View>
                     <Image
                        source={images.hmm}
                        style={{
                           height: 100,
                           width: 100,
                           resizeMode: "cover",
                           borderRadius: 100,
                           borderWidth: 1,
                           borderColor: "#000",
                           marginTop: SIZES.padding * 2,
                           marginLeft: SIZES.padding * 2,
                        }} />
                  </View>
                  {/**User name */}
                  <View
                     style={{
                        flexDirection: "column",
                        marginLeft: SIZES.padding * 2

                     }}>
                     <Text
                        style={{
                           marginTop: SIZES.padding * 4,
                           ...FONTS.h1,
                           fontWeight: "bold"
                        }}>Thinking emoji</Text>
                     <Text
                        style={{
                           marginTop: SIZES.padding,
                           ...FONTS.body6,
                        }}>   Mobile</Text>
                  </View>
               </View>
               {/**View chua phone va email */}
               <View
                  style={{
                     flex: 1,
                     marginLeft: SIZES.padding * 3,
                     marginTop: SIZES.padding * 2
                  }}>
                  <Text
                     style={{
                        padding: SIZES.padding / 2
                     }}>Phone</Text>
                  <Text
                     style={{
                        padding: SIZES.padding / 2
                     }}>Email</Text>
               </View>
            </View>
            {/** Viền phân cách */}
            <View
               style={{
                  borderColor: "#BBBBBB",
                  borderWidth: 1,
               }} />
            {/**View con Mid */}
            <View
               style={{
                  flex: 0.7,
                  flexDirection: "row"
               }}>
               {/**View con Mid ben trai */}
               <View
                  style={{
                     flex: 1,
                     alignItems: "center",
                     justifyContent: "center",
                  }}>
                  <Text
                     style={{
                        ...FONTS.h2,
                        fontWeight: "bold"
                     }}>$140.20</Text>
                  <Text
                     style={{
                        ...FONTS.body5,
                        color: "#bbbbbb"
                     }}>Wallet</Text>
               </View>
               {/** Viền phân cách */}
               <View
                  style={{
                     borderColor: "#BBBBBB",
                     borderWidth: 1,
                  }} />
               {/**View con Mid ben phai */}
               <View
                  style={{
                     flex: 1,
                     backgroundColor: COLORS.white,
                     alignItems: "center",
                     justifyContent: "center"
                  }}>
                  <Text
                     style={{
                        ...FONTS.h2,
                        fontWeight: "bold"
                     }}>20</Text>
                  <Text
                     style={{
                        ...FONTS.body5,
                        color: "#bbbbbb"
                     }}>Orders</Text>
               </View>
            </View>
            {/** Viền phân cách */}
            <View
               style={{
                  borderColor: "#BBBBBB",
                  borderWidth: 1,
               }} />
            {/**View con Bottom */}
            <View
               style={{
                  flex: 4,
               }}>
               <TouchableOpacity>
                  <CustomRowItem
                     label={"Your Favorites"}
                     icon={icons.favorite} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <CustomRowItem
                     label={"Payment"}
                     icon={icons.wallet} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <CustomRowItem
                     label={"Friends"}
                     icon={icons.friends} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <CustomRowItem
                     label={"Promotions"}
                     icon={icons.tag} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <CustomRowItem
                     label={"Settings"}
                     icon={icons.setting} />
               </TouchableOpacity>
               {/** Vien  */}
               <View
                  style={{
                     marginTop: SIZES.padding * 2,
                     borderWidth: 1,
                     borderColor: "#BBBBBB",
                     marginBottom: SIZES.padding / 10
                  }}></View>
               <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}>
                  <CustomRowItem
                     label={"Logout"}
                     icon={icons.logout} />
               </TouchableOpacity>
            </View>
         </View>
      );
   }

   return (
      <SafeAreaView
         style={styles.container}>
         {renderHeader()}
         {renderUserProfile()}
      </SafeAreaView>
   );
};

export default User;
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white"
   }
});
