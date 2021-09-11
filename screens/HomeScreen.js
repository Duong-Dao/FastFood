import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { COLORS, FONTS, icons, SIZES, images } from '../constants';




export default function HomeScreen() {
  const categoryData = [{
    id: 1,
    name: "Rice",
    icon: icons.rice_bowl
  },
  {
    id: 2,
    name: "Sushi",
    icon: icons.sushi
  },
  {
    id: 3,
    name: "Salad",
    icon: icons.salad
  },
  {
    id: 4,
    name: "Pizza",
    icon: icons.pizza
  },
  {
    id: 5,
    name: "Noodle",
    icon: icons.noodle
  },
  {
    id: 6,
    name: "Donut",
    icon: icons.donut
  },
  {
    id: 7,
    name: "Drink",
    icon: icons.drink
  }, {
    id: 8,
    name: "Hot-dog",
    icon: icons.hotdog
  },
  {
    id: 9,
    name: "Burger",
    icon: icons.hamburger
  },
  {
    id: 10,
    name: "Fries",
    icon: icons.fries
  },]

  const restaurantData = [{
    id: 1,
    name: "ByProgrammers Burger",
    rating: 4.8,
    categories: [5, 7],

    photo: images.japanese_restaurant,
    duration: "30 - 45 min",
    menu: [
      {
        menuId: 1,
        name: "Crispy Chicken Burger",
        photo: images.crispy_chicken_burger,
        description: "Burger with crispy chicken, cheese and lettuce",
        calories: 200,
        price: 10
      },
      {
        menuId: 2,
        name: "Crispy Chicken Burger with Honey Mustard",
        photo: images.honey_mustard_chicken_burger,
        description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        calories: 250,
        price: 15
      },
      {
        menuId: 3,
        name: "Crispy Baked French Fries",
        photo: images.baked_fries,
        description: "Crispy Baked French Fries",
        calories: 194,
        price: 8
      }
    ]
  },
  {
    id: 2,
    name: "ByProgrammers Burger",

    categories: [5, 7],

    photo: images.burger_restaurant_1,
    duration: "30 - 45 min",
    menu: [
      {
        menuId: 1,
        name: "Crispy Chicken Burger",
        photo: images.crispy_chicken_burger,
        description: "Burger with crispy chicken, cheese and lettuce",
        calories: 200,
        price: 10
      },
      {
        menuId: 2,
        name: "Crispy Chicken Burger with Honey Mustard",
        photo: images.honey_mustard_chicken_burger,
        description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        calories: 250,
        price: 15
      },
      {
        menuId: 3,
        name: "Crispy Baked French Fries",
        photo: images.baked_fries,
        description: "Crispy Baked French Fries",
        calories: 194,
        price: 8
      }
    ]
  },]

  const [categories, setCategories] = useState(categoryData)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [restaurant, setRestaurant] = useState(restaurantData)

  function onSelectedCategories(catelory) {
    //fillter restaurant data
    let restaurantList = restaurantData.filter(i =>
      i.categories.includes(catelory.id))
    setRestaurant(restaurantList)


    setSelectedCategory(catelory)
  }

  function renderMainCategory() {
    return (
      <View>
        <View style={{
          marginVertical: 20,
          marginHorizontal: 20
        }}>
          <Text style={{
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
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                padding: SIZES.padding,
                paddingBottom: SIZES.padding * 2,
                marginRight: SIZES.padding,
                backgroundColor: (selectedCategory?.id === item.id) ? COLORS.primary : COLORS.white,
                width: 80,
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
          )}
        >
        </FlatList>


      </View>
    );
  }

  function renderMenuRestaurant() {
    return (
      <FlatList
        data={restaurantData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
        (
          <TouchableOpacity>
          </TouchableOpacity>
        )}
      ></FlatList>
    )
  }
  return (
    <SafeAreaView>
      <Header />
      {renderMainCategory()}
      {renderMenuRestaurant()}
    </SafeAreaView>
  );
}
