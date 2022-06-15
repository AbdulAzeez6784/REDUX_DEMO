import { BUY_ICECREAM } from "./iceCreamActionTypes"
import { ADD_ICECREAM } from "./iceCreamActionTypes"

const initialState ={
    numberOfIceCreams : 25
}

const iceCreamReducer =( state = initialState , action )=>{
    switch ( action.type ) {
        case BUY_ICECREAM :
            return {
                ...state , numberOfIceCreams : state.numberOfIceCreams -1
            }
        case ADD_ICECREAM :
            return {
                ...state , numberOfIceCreams : state.numberOfIceCreams + 1
            }
            default: return state
    }
}

export default iceCreamReducer