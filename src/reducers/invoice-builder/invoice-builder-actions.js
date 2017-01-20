import { openModal } from '../modal/modal-actions';
import CannotUseExpressPaymentModal from '../../components/cannot-use-express-payment-modal';
import { getCustomerCountry } from '../../selectors/invoice-tool-selector';

let __setExpressPayment = (value) => {
    return {
        type: 'SET_EXPRESS_PAYMENT',
        payload: value
    }
}

export let selectCustomer = (customer) => {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_CUSTOMER',
            payload: customer
        });

        if (customer.get('country') !== null && customer.get('country') !== 'SWEDEN') {
            dispatch(setExpressPayment(false));
            dispatch(clearHsd());
            dispatch(openModal(CannotUseExpressPaymentModal));
        }
    }
}

export let setHsd = (hsdType) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_HSD',
            payload: hsdType
        });

        if (getState().InvoiceBuilder.get('expressPayment')) {
            dispatch(setExpressPayment(false));
            dispatch(openModal(CannotUseExpressPaymentModal));
        }
    }
}

export let clearHsd = () => {
    return {
        type: 'SET_HSD',
        payload: null
    }
}

export let setExpressPayment = (value) => {
    return (dispatch, getState) => {
        const customer = getCustomerCountry(getState());
        if (customer === undefined || customer === 'SWEDEN') {
            dispatch(__setExpressPayment(value));
        }
        else {
            dispatch(__setExpressPayment(false));
            dispatch(openModal(CannotUseExpressPaymentModal));
        }
    };

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
