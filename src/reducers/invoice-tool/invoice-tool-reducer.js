import { Map, List } from 'immutable';
import CurrencyEntity from '../../entities/currency-entity';

export const initialState = Map({
    showExpressPaymentButton: true,
    errorCannotUserExpressPayment: false,
    currencies: List([
        new CurrencyEntity({ id: 'SEK' }),
        new CurrencyEntity({ id: 'USD' }),
        new CurrencyEntity({ id: 'GBP' })
    ])
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR_CANNOT_USE_EXPRESS_PAYMENT':
            return state.set('errorCannotUserExpressPayment', true);
    }
    return state;
}