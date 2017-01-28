import { createSelector } from 'reselect';

export const getCustomerCountry = (state) => {
    const customer = state.InvoiceBuilder.get('customer');
    return customer ? customer.get('country') : null;
}

export const getHsd = (state) => {
    return state.InvoiceBuilder.get('hsd');
}

export const getExpressPayment = (state) => {
    return state.InvoiceBuilder.get('expressPayment');
}

export const getCurrency = (state) => {
    return state.InvoiceBuilder.get('currency');
}

export const getCurrencies = (state) => {
    return state.InvoiceTool.get('currencies');
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

export const enabledCurrencySelector = createSelector(
    getHsd,
    (hsd) => {
        return !hsd;
    }
)