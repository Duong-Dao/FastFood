import React from "react";
import { Text, Image, View } from "react-native"
import { FONTS, SIZES } from "../constants";


function CustomRowItem({ label, icon }) {
   return (
      <View
         style={{
            flexDirection: "row",
            height: 35,
            paddingLeft: SIZES.padding * 4,
            marginTop: SIZES.padding * 2,
            alignItems: "center",
         }}>

         <Image
            source={icon}
            style={{
               height: 25,
               width: 25,
            }} />
         <Text
            style={{
               ...FONTS.body3,
               paddingLeft: SIZES.padding * 3
            }}>{label}</Text>

      </View>
   )
}

export default CustomRowItem;