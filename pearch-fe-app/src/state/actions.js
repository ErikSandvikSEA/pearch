import axios from 'axios'
import { mellin } from '../unneccessaries/notEvenNecessary'

export const GET_REQUEST_START = "GET_REQUEST_START"
export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS"
export const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE"

const config = {
    headers: {
        'Authorization': 'Bearer ' + mellin.BearerToken,
        "Access-Control-Allow-Origin": "*",
      },
}

//actions
export const getRequest = (url) => {
    return dispatch => {
         dispatch({ type: GET_REQUEST_START })
         axios
              .get(url, config)
              .then(response => {
                   dispatch({ type: GET_REQUEST_SUCCESS, payload: response })
              })
              .catch(err => {
                   dispatch({ type: GET_REQUEST_FAILURE, payload: err })
              })
    }
}