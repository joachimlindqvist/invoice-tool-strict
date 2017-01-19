import { showExpressPaymentButton } from '../invoice-tool/invoice-tool-actions';
import { openModal } from '../modal/modal-actions';
import CannotUseExpressPaymentModal from '../../components/cannot-use-express-payment-modal';

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

        if (customer.get('country') === null || customer.get('country') === 'SWEDEN') {
            dispatch(showExpressPaymentButton(true));
        }
        else {
            dispatch(showExpressPaymentButton(false));
            dispatch(setExpressPayment(false));
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

        dispatch(showExpressPaymentButton(false));
        
        if (getState().InvoiceBuilder.get('expressPayment')) {
            dispatch(setExpressPayment(false));
            dispatch(openModal(CannotUseExpressPaymentModal));
        }
    }
}

export let setExpressPayment = (value) => {
    return (dispatch, getState) => {
        if (getState().InvoiceBuilder.get('customer').get('country') === 'SWEDEN') {
            dispatch(__setExpressPayment(value));
        }
        else {
            dispatch(__setExpressPayment(value));
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