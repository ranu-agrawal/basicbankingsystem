import * as api from '../api';
import { FETCH_TRANSACTIONS, CREATE_TRANSACTION } from '../constants/actionTypes';

//action creators

export const getTransactions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTransactions();

        dispatch({ type: FETCH_TRANSACTIONS, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const createTransaction = (transaction) => async (dispatch) => {
    try {
        const { data } = await api.createTransaction(transaction);

        dispatch({ type: CREATE_TRANSACTION, payload: data });

    } catch (error) {
        console.log(error);
    }
}