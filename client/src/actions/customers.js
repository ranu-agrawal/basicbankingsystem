import * as api from '../api';
import { FETCH_ALL } from '../constants/actionTypes';

//action creators

export const getCustomers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCustomers();

        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {
        console.log(error);
    }
}