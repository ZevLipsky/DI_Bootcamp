import { GET_USERS, SEARCH } from "./reducer";


export const getUsers = (arr) => {
    return{
        type: GET_USERS,
        payload: arr
    }
}

export const search = (value) => {
    return{
        type: SEARCH,
        payload: value
    }
}