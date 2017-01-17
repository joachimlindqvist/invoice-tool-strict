import { Map, List, fromJS } from 'immutable';

export const initialState = Map({
    customer: Map(),
    expressPayment: false,
    workers: List([
        Map({
            total: 2000,
            gross: 1500,
            net: 1000
        }),
        Map({
            total: 2000,
            gross: 1500,
            net: 1000
        })
    ])
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CUSTOMER':
            return state.set('customer', Map(action.payload));
        case 'SET_EXPRESS_PAYMENT':
            return state.set('expressPayment', action.payload)
        case 'SET_MONEY_DISTRIBUTION_WORKERS':
            return state.set('workers', fromJS(action.payload))
    }
    return state;
}