import { ADD_TURBO, DELETE_TURBO } from '../actions/index'

export default function (state = [], action = {}) {
    switch (action.type) {
        case ADD_TURBO:
            if (state.length = 1) {
                return state.concat(action.payload)
            } else {
                return state
            }

        case DELETE_TURBO:
            return state.filter(turbo => turbo !== action.payload)
        default:
            return state
    }
}