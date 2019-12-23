import React, {useReducer} from 'react';
import Axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { 
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    } 

    const [state, dispatch] = useReducer(GithubReducer,initialState);

    // Search Users
    const searchUsers= async text=> {
        setLoading();
        const res= await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
        `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
        console.log(res.data.items);
        console.log(state.users)
        dispatch({
            type: SEARCH_USERS,
            payLoad: res.data.items
        });
        console.log(state.users)
      }
    // Get User
    // Get Repos
    // Clear Users
    // Set Loading
    const setLoading = () => dispatch({type: SET_ALERT});

    return <GithubContext.Provider  
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers
        }}
    >
        {props.children}
         </GithubContext.Provider>
}

export default GithubState;