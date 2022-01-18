import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import quantityReducer from "./quantityReducer";


const rootReducer = combineReducers({
   cart: cartReducer,
   // quantity: quantityReducer
})

export default rootReducer