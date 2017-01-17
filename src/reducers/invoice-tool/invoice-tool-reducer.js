import { Map } from 'immutable';

export const initialState = Map({
    showExpressPaymentButton: true
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_EXPRESS_PAYMENT_BUTTON':
            return state.set('showExpressPaymentButton', action.payload);
    }
    return state;
}