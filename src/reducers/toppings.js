import { ADD_TOPPINGS, DELETE_TOPPING } from '../actions/index'

export default function (state = [], action = {}) {
    switch (action.type) {
        case ADD_TOPPINGS:
            if (state.length < 3) {
                return state.concat(action.payload)
            } else {
                window.alert('ONLY PICK THREE')
                return state
            }

        case DELETE_TOPPING:
            return state.filter(topping => topping !== action.payload)
        default:
            return state
    }
}