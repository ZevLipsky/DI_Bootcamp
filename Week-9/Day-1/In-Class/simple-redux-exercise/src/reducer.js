let initState = {
    property_one: 'one one',
    property_two: 'two',
    text1: 'text one',
}

export const reducer = (state =initState, action={} ) =>{
    //action.type action.payload
    switch(action.type){
        case 'PROP_ONE':
    return{...state, property_one:'txt txt txt', }
    default:
    return{...state}
}
}