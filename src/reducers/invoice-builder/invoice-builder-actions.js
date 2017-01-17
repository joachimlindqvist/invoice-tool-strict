export let selectCustomer = (customer) => {
    return {
        type: 'SELECT_CUSTOMER',
        payload: customer
    }
}

export let setExpressPayment = (value) => {
    return {
        type: 'SET_EXPRESS_PAYMENT',
        payload: value
    }
}

export let setWorkerNet = (worker, net) => {
    return (dispatch, getState) => {
        // Använd getState och worker för att skapa requestet till /invoicecalculations
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dispatch(setMoneyDistributionWorker([
                    {
                        total: net * 2,
                        gross: net * 1.5,
                        net
                    },
                    {
                        total: net * 2,
                        gross: net * 1.5,
                        net
                    }
                ])));
            }, 1337)
        });
    }
}

export let setMoneyDistributionWorker = (distribution) => {
    return {
        type: 'SET_MONEY_DISTRIBUTION_WORKERS',
        payload: distribution
    }
}