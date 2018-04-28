import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const ADD_BASE = 'ADD_BASE'
export const UPDATE_BASE = 'UPDATE_BASE'
export const ADD_SAUCE = 'ADD_SAUCE'
export const UPDATE_SAUCE = 'UPDATE SAUCE'
export const ADD_TOPPINGS = 'ADD_TOPPINGS'
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS'

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

export const addSauce = (sauce) => (dispatch) => {
    request
        .post(`${baseUrl}`)
        .send(sauce)
        .then(response => dispatch({
            type: ADD_SAUCE,
            payload: response.body
        }))
}

//not sure what the parameters need to be 
export const updateSauce = (sauce, updates) => (dispatch) => {
    request
        .put(`${baseUrl}`)
        .send(updates)
        .then(response => dispatch({
            type: UPDATE_SAUCE,
            payload: response.body
        }))
}

export const addToppings = (toppings) => (dispatch) => {
    request
        .post(`${baseUrl}`)
        .send(toppings)
        .then(response => dispatch({
            type: ADD_TOPPINGS,
            payload: response.body
        }))
}

export const updateToppings = (toppings, updates) => (dispatch) => {
    request
        .put(`${baseUrl}`)
        .send(updates)
        .then(response => dispatch({
            type: UPDATE_TOPPINGS,
            payload: response.body
        }))
}