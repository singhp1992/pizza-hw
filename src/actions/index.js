import * as request from 'superagent'
//import { bases } from '../allOptions'

export const ADD_BASE = 'ADD_BASE'
//export const UPDATE_BASE = 'UPDATE_BASE'
export const ADD_SAUCE = 'ADD_SAUCE'
//export const UPDATE_SAUCE = 'UPDATE SAUCE'
export const ADD_TOPPINGS = 'ADD_TOPPINGS'
export const DELETE_TOPPING = 'DELETE_TOPPING'

export const addBase = (base) => {
    return {
        type: ADD_BASE,
        payload: base
    }
}

export const addSauce = (sauce) => {
    return {
        type: ADD_SAUCE,
        payload: sauce
    }
}

export const addToppings = (toppings) => {
    return {
        type: ADD_TOPPINGS,
        payload: toppings
    }
}

export const deleteTopping = (topping) => {
    return {
        type: DELETE_TOPPING,
        payload: topping
    }
}