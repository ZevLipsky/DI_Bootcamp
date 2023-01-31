export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

export const increase_count = () => {
    return{
        type: INCREASE,
    }
}

export const decrease_count = (num) => {
    return{
        type: DECREASE,
        payload: num
    }
}