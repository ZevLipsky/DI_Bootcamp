export const GET_USERS = 'GET_USERS';
export const SEARCH = 'SEARCH';

const initState  = {
    arr:[],
     text: ''
}

export const reducer = (state=initState, action ={}) => {
    switch (action.type) {
        case GET_USERS:
            
        return{...state, arr:action.payload}

        case SEARCH:
            console.log('SEARCH', action.payload);
            return{...state, text:action.payload}
            
    
        default:
            return{...state}
    }
}