import { ACTION_TYPES } from "../actions/xForm"
const initialState = {
    list:[]
}

export const xForm = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
    
        default:
            return state
    }
}