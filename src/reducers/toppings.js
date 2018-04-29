import { ADD_TOPPINGS } from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TOPPINGS:
            return [
                ...state,
                action.payload
            ]

        default:
            return state
    }
}