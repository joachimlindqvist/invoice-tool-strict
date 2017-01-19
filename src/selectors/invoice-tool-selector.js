export const showExpressPaymentSelector = (customer, hsd) => {
    const correctCountry = customer.get('country') === undefined || customer.get('country') === 'SWEDEN';
    const notHsd = hsd === null;
    return correctCountry && notHsd;
}

export const showHsdSelector = (customer) => {
    return customer.get('country') === undefined || customer.get('country') === 'SWEDEN';
}