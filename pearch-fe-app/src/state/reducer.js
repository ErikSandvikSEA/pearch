//import actions
import {
    GET_REQUEST_START,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILURE,
    SET_USERNAME
} from './actions'

//initial state
const initialState = {
    isGetting: false,
    error: false,
    getResponse: {},
    errorMessage: '',
    username: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_REQUEST_START:
            return {
                ...state,
                isGetting: true,
                error: false,
                errorMessage: ''
            }
        case GET_REQUEST_SUCCESS:
            return {
                ...state,
                isGetting: false,
                error: false,
                errorMessage: '',
                getResponse: action.payload
            }
        case GET_REQUEST_FAILURE:
            return {
                ...state,
                isGetting: false,
                error: true,
                errorMessage: action.payload
            }
        case SET_USERNAME:
            return {
                username: action.payload
            }
        default:
            return state
    }
}