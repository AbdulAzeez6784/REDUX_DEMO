import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducer";
import userReducer from "./Users/userReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    users : userReducer
})

export default rootReducer