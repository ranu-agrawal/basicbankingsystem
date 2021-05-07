import { FETCH_TRANSACTIONS, CREATE_TRANSACTION } from '../constants/actionTypes';

const reducer = (transactions =[], action) => {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return action.payload;
        case CREATE_TRANSACTION:
            return [...transactions, action.payload];
    
        default:
            return transactions;
    }
}

export default reducer;