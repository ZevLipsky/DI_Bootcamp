export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'

export const increase_count = () => {
  return {
    type:'INCREASE_COUNT'
  }
}

export const decrease_count = () => {
  return {
    type:DECREASE_COUNT
  }
}
