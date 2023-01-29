let initState = {
    header: 'Header from Redux',
    subheader: ' Sub Header froom Redux'
}

export const reducer  = (state=initState, action={}) =>{
    switch (action.type) {
        case 'CHANGE_HEADER':
            return {...state, header: action.payload}
            break;
        case'SUB_HEADER':
        return {...state, subheader: action.payload}

        default:
            break;
    }
    return{...state}
}