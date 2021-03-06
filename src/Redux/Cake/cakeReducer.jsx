import { BUY_CAKE } from "./cakeActionTypes";
import { ADD_CAKE } from "./cakeActionTypes";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
      case ADD_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };
    default:
      return state;
  }
};

export default cakeReducer
