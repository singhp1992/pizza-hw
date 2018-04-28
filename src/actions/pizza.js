import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const ADD_BASE = 'ADD_BASE'
export const UPDATE_BASE = 'UPDATE_BASE'

// const initialState = {
//     loading: false
// };

export const addBase = (base) => (dispatch) => {
    request
        .post(`${baseUrl}`)
        .send(base)
        .then(response => dispatch({
            type: ADD_BASE,
            payload: response.body
        }))
}

export const updateBase = (base, updates) => (dispatch) => {
    request
        .put(`${baseUrl}`)
        .send(updates)
        .then(response => dispatch({
            type: UPDATE_BASE,
            payload: response.body
        }))
}