export const changeHeader = (val)=> {
    return{
        type: "CHANGE_HEADER",
        payload: val
    }
}

export const changeSubHeader = val =>{
    return{
        type: "SUB_HEADER",
        payload: val
    }
}