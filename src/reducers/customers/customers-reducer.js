import { List, Map } from 'immutable';

export const initialState = Map({
    list: List(),
    isFetchingCustomers: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CUSTOMERS':
            return state.set('list', List(action.payload));
        case 'FETCHING_CUSTOMERS':
            return state.set('isFetchingCustomers', true);
        case 'STOPPED_FETCHING_CUSTOMERS':
            return state.set('isFetchingCustomers', false);
        case 'ADD_CUSTOMER':
            return state.set('list', state.get('list').push(action.payload))
        default:
            return state;
    }
}