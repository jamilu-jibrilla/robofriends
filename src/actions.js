import {
    CHANGE_SEARCH_FIELD,
    PENDING_REQUEST,
    SUCCESS,
    FAILED_REQUEST
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: PENDING_REQUEST})   
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => dispatch({type: SUCCESS, payload: users}))
    .catch((err) => dispatch({type: FAILED_REQUEST, payload: err }))
}

