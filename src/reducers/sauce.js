import { ADD_SAUCE, UPDATE_SAUCE } from '../actions/index'

export default function (state = [], action = {}) {
    switch (action.type) {
        // case FETCHED_ALL_PRODUCTS:
        //     return action.payload

        case ADD_SAUCE:
            return [
                ...state,
                action.payload
            ]
        case UPDATE_SAUCE:
            return state.map(sauce => {
                if (sauce.id === action.payload.id) {
                    return action.payload
                } else
                    return sauce
            })

        default:
            return state
    }
}