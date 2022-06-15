import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userActionTypes"

const initialState = {
    isLoading : false ,
    data : "" ,
    error : ""
}

const userReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST : {
            return {
                ...state , 
                isLoading : true
            }
         }
         case FETCH_USERS_SUCCESS : {
            return {
                ...state ,
                isLoading : false ,
                data : action.payload ,
                error : "" 
            }
        }
        case FETCH_USERS_FAILURE : {
            return {
                ...state ,
                isLoading : false ,
                data : "" ,
                error : action.payload
            }
        }

        default : return state
    }

}

export default userReducer