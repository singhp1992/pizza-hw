import {ADD_BASE, UPDATE_BASE} from '../actions/pizza'

export default function (state = [], action = {}) {
    switch (action.type) {
        // case FETCHED_ALL_PRODUCTS:
        //     return action.payload

        case ADD_BASE:
            return [
                ...state,
                action.payload
            ]
        case UPDATE_BASE:
            return state.map(base => {
                if (base.id === action.payload.id) {
                    return action.payload
                } else
                    return base
            })

        default:
            return state
    }
}