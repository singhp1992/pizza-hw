import { ADD_TOPPINGS, UPDATE_TOPPINGS } from '../actions/index'

export default function (state = [], action = {}) {
    switch (action.type) {
        // case FETCHED_ALL_PRODUCTS:
        //     return action.payload

        case ADD_TOPPINGS:
            return [
                ...state,
                action.payload
            ]
        case UPDATE_TOPPINGS:
            return state.map(toppings => {
                if (toppings.id === action.payload.id) {
                    return action.payload
                } else
                    return toppings
            })

        default:
            return state
    }
}