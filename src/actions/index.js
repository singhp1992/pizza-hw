export const ADD_BASE = 'ADD_BASE'
export const ADD_SAUCE = 'ADD_SAUCE'
export const ADD_TOPPINGS = 'ADD_TOPPINGS'
export const DELETE_TOPPING = 'DELETE_TOPPING'
export const ADD_TURBO = 'ADD_TURBO'
export const DELETE_TURBO = 'DELETE_TURBO'


export const addBase = (bases) => {
    return {
        type: ADD_BASE,
        payload: bases
    }
}

export const addSauce = (sauces) => {
    return {
        type: ADD_SAUCE,
        payload: sauces
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

export const addTurbo = (turbo) => {
    return {
        type: ADD_TURBO,
        payload: turbo
    }
}

export const deleteTurbo = (turbo) => {
    return {
        type: DELETE_TURBO,
        payload: turbo
    }
}