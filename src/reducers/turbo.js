import { ADD_TURBO, DELETE_TURBO } from '../actions/index'

export default function (state = [], action = {}) {
    switch (action.type) {
        case ADD_TURBO:
            return state.concat(action.payload)

        case DELETE_TURBO:
            return state.filter(turbo => turbo !== action.payload)
        default:
            return state
    }
}