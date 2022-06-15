import { BUY_ICECREAM } from "./iceCreamActionTypes"
import { ADD_ICECREAM } from "./iceCreamActionTypes"

const buyIceCream =()=>{
    return{
        type: BUY_ICECREAM,
        payload: "Buying IceCream"
    }
}
export const addIceCream =()=>{
    return{
        type: ADD_ICECREAM,
        payload: "Adding IceCream"
    }
}

export default buyIceCream