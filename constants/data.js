import { icons, images } from "./index"

export const categoryData = [{
   id: 1,
   name: "Rice",
   icon: icons.rice_bowl
},

{
   id: 2,
   name: "Noodle",
   icon: icons.noodle
},

{
   id: 3,
   name: "Drink",
   icon: icons.drink
},
{
   id: 4,
   name: "Burger",
   icon: icons.hamburger
},
{
   id: 5,
   name: "Fries",
   icon: icons.fries
},]
export const restaurantData = [{
   id: 1,
   name: "Cơm gà",
   categories: [1],
   photo: images.comga,
   price: 25,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 2,
   name: "Cơm chiên trứng",
   categories: [1],
   photo: images.comchientrung,
   price: 20,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 3,
   name: "Cơm rang dưa bò",
   categories: [1],
   photo: images.comrangduabo,
   price: 40,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 4,
   name: "Mì hải sản",
   categories: [2],
   photo: images.mihaisan,
   price: 30,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 5,
   name: "Mì xào bò",
   categories: [2],
   photo: images.mixaobo,
   price: 35,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 6,
   name: "Trà sữa",
   categories: [3],
   photo: images.trasua,
   price: 20,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 7,
   name: "Trà đào",
   categories: [3],
   photo: images.tradao,
   price: 15,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 8,
   name: "Honey mustard chicken burger",
   categories: [4],
   photo: images.honey_mustard_chicken_burger,
   price: 50,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 9,
   name: "Crispy chicken burger",
   categories: [4],
   photo: images.crispy_chicken_burger,
   price: 50,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 10,
   name: "Burger",
   categories: [4],
   photo: images.burger,
   price: 50,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
},
{
   id: 11,
   name: "Khoai tây chiên",
   categories: [5],
   photo: images.khoaitaychien,
   price: 15,
   description: "The highlight of the bread lies in its crunchiness, " +
      "richness in flavor, bringing great taste. " +
      "Bread includes pate, butter, cucumber, chili, … " +
      "In addition, inside the bread, there are different types of filling such as: " +
      "fried eggs, silk rolls, char siu, grilled meat, sausages, … " +
      "All create a unique flavor for the dish."
}]

export default {
   categoryData,
   restaurantData
}