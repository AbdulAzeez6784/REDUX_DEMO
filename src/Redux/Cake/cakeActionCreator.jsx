import { BUY_CAKE } from "./cakeActionTypes";
import { ADD_CAKE } from "./cakeActionTypes";

const buycake =()=>{
    return {
        type : BUY_CAKE,
        payload:"buying cake"
    }
}
export const addcake =()=>{
    return {
        type : ADD_CAKE,
        payload:"Adding cakes"
    }
}
export default buycake 
