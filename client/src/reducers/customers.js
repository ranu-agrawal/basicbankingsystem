import { FETCH_ALL } from '../constants/actionTypes';

const reducer = (customers = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
    
        default:
            return customers;
    }
}

export default reducer;