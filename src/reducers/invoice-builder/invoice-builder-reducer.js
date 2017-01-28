import { Map, List, fromJS } from 'immutable';
import CurrencyEntity from '../../entities/currency-entity';

export const initialState = Map({
    customer: null,
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
    ]),
    hsd: null,
    currency: new CurrencyEntity({ id: 'SEK' })
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CUSTOMER':
            return state.set('customer', Map(action.payload));
        case 'SET_EXPRESS_PAYMENT':
            return state.set('expressPayment', action.payload);
        case 'SET_MONEY_DISTRIBUTION_WORKERS':
            return state.set('workers', fromJS(action.payload));
        case 'SET_HSD':
            return state.set('hsd', action.payload);
        case 'SET_CURRENCY':
            return state.set('currency', action.payload);
    }
    
    return state;
}