import axios from 'axios'

export const GET_REQUEST_START = "GET_REQUEST_START"
export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS"
export const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE"
export const SET_USERNAME = "SET_USERNAME"

//actions
export const getRequest = (url, username) => {
    return dispatch => {
         dispatch({ type: GET_REQUEST_START })
         axios
              .get(`${url}/tweets/${username}`)
              .then(response => {
                   dispatch({ type: GET_REQUEST_SUCCESS, payload: response })
              })
              .catch(err => {
                   dispatch({ type: GET_REQUEST_FAILURE, payload: err })
              })
    }
}

export const setUsername = e => {
     return dispatch => {
          dispatch({ type: SET_USERNAME, payload: e.target.value })
     }
}