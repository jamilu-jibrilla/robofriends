import {
    CHANGE_SEARCH_FIELD,
    PENDING_REQUEST,
    SUCCESS,
    FAILED_REQUEST
} from "./constants";


const initialStateRobots = {
    searchField: ""
}

export const searchRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD :
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}

const initialState = {
    isPending: true,
    robots: [],
    error: ""
}

export const getRobots = (state=initialState, action={}) => {
    switch (action.type) {
        case PENDING_REQUEST:
            return Object.assign({},state, {isPending: true})
        case SUCCESS:
            return Object.assign({},state, {robots: action.payload, isPending: false})
        case FAILED_REQUEST:
            return Object.assign({},state, {error: action.payload, isPending: false})           
        default:
            return state
    }
}