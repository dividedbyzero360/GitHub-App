import React, { useReducer } from 'react';
import Axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
} from '../types'

let githubClientID;
let githubSecret;
if (process.env.NODE_ENV !== 'production') {
    githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubSecret = process.env.REACT_APP_GITHUB_SECRET;
} else {
    githubClientID = process.env.GITHUB_CLIENT_ID;
    githubSecret = process.env.GITHUB_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = async text => {
        setLoading();
        const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}` +
            `&client_secret=${githubSecret}`);
        dispatch({
            type: SEARCH_USERS,
            payLoad: res.data.items
        });
    }
    // Get User
    const getUser = async username => {
        setLoading();
        const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}` +
            `&client_secret=${githubSecret}`);
        dispatch({
            type: GET_USER,
            payLoad: res.data

        })
    }
    // Get Repos
    const getUserRepos = async username => {
        setLoading();
        const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}` +
            `&client_secret=${githubSecret}`);
        dispatch({
            type: GET_REPOS,
            payLoad: res.data

        })
    }
    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });




    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;