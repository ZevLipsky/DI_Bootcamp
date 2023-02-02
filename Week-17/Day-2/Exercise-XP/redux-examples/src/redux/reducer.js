import { INCREASE, DECREASE } from "./action"

const initState = {
    count: 0
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case INCREASE:
            
            return {...state, count: state.count+1}
        case DECREASE:

            return {...state, count: state.count - action.payload}
    
        default:
            return {...state}
    }

    return {...state}
}