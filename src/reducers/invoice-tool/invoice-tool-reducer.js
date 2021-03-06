import { Map } from 'immutable';

export const initialState = Map({
    showExpressPaymentButton: true,
    errorCannotUserExpressPayment: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR_CANNOT_USE_EXPRESS_PAYMENT':
            return state.set('errorCannotUserExpressPayment', true);
    }
    return state;
}