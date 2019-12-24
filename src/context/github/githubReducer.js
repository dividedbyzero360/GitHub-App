
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payLoad,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS: {
            return {
                ...state,
                users: [],
                loading: false
            }
        }
        case GET_USER:
            return {
                ...state,
                user: action.payLoad,
                loading: false
            }

        case GET_REPOS:
            return {
                ...state,
                repos: action.payLoad,
                loading: false
            }
        default:
            return state
    }
}