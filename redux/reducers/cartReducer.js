//import { restaurantData } from "../../constants"

import { useState } from "react"


const initalState = {
   count: 0,
   food: []
}


const cartReducer = (state = initalState, action) => {
   switch (action.type) {
      case 'ADD_TO_CART': {
         return {
            ...state,
            food: state.food.concat(action.payload)
         }
      }
      case 'REMOVE_FROM_CART': {
         return {
            ...state,
            food: state.food.filter((item) => item.id !== action.payload)
         }
      }
      case "INCREMENT": {
         return {
            ...state,
            food: state.food.map((item) => {
               if (item.id !== action.payload) {
                  return item
               }
               return { ...item, quantity: item.quantity + 1 }
            })
         }
      }
      case "DECREMENT": {
         return {
            ...state,
            food: state.food.map((item) => {
               if (item.id !== action.payload)
                  return item
               return {
                  ...item, quantity: item.quantity - 1
               }
            })
         }
      }

      default:
         return state
   }
}

export default cartReducer
