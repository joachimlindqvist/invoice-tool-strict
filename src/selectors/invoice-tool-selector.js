import { createSelector } from 'reselect';

export const getCustomerCountry = (state) => {
    return state.InvoiceBuilder.get('customer').get('country');
}

export const getHsd = (state) => {
    return state.InvoiceBuilder.get('hsd');
}

export const getExpressPayment = (state) => {
    return state.InvoiceBuilder.get('expressPayment');
}

export const showExpressPaymentSelector = createSelector(
    [ getCustomerCountry, getHsd ],
    (country, hsd) => {
        const correctCountry = country === undefined || country === 'SWEDEN';
        const notHsd = hsd === null;
        return correctCountry && notHsd;
    }
);

export const showHsdSelector = createSelector(
    getCustomerCountry,
    (country) => country === undefined || country === 'SWEDEN'
);
