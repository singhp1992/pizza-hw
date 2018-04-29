import {ADD_BASE} from '../actions/index'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_BASE:
            return action.payload.value
        default:
            return state
    }
}

