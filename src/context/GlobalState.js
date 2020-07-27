import React,{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const intialState = {
    transactions: []
}

// Craeate context
export const GlobalContext = createContext(intialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    // Actions
    function deletetransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction 
        })
    }

    return(
        <GlobalContext.Provider value={{transactions: state.transactions,
        deletetransaction,
        addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}