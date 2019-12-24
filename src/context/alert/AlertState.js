import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';


import {
    SET_ALERT,
    REMOVE_ALERT
} from '../../context/types'


const AlertState = props => {
    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);

        console.log("Here" + state)
    }

    return <AlertContext.Provider value={{
        initialState: state,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;