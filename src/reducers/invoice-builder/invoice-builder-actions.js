import { openModal } from '../modal/modal-actions';
import CannotUseExpressPaymentModal from '../../components/cannot-use-express-payment-modal';
import CannotUseOtherCurrencyWithHsdModal from '../../components/cannot-use-other-currency-with-hsd-modal';
import { getCustomerCountry } from '../../selectors/invoice-tool-selector';
import CurrencyEntity from '../../entities/currency-entity';
import fetch from '../../fetch-mock';

let __setExpressPayment = (value) => {
    return {
        type: 'SET_EXPRESS_PAYMENT',
        payload: value
    }
}

export let setCustomer = (customer) => {
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

export let setCurrency = (currency) => {
    return (dispatch, getState) => {
        const hsd = getState().InvoiceBuilder.get('hsd');
        if (!hsd || currency.get('id') === 'SEK') {
            dispatch({
                type: 'SET_CURRENCY',
                payload: currency
            });
        }
        else {
            dispatch({
                type: 'SET_CURRENCY',
                payload: 'SEK'
            });
            dispatch(openModal(CannotUseOtherCurrencyWithHsdModal));
        }
    } 
}

export let setHsd = (hsdType) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_HSD',
            payload: hsdType
        });

        if (hsdType !== null) {
            if (getState().InvoiceBuilder.get('expressPayment')) {
                dispatch(setCurrency(new CurrencyEntity({ id: 'SEK' })));
                dispatch(setExpressPayment(false));
                dispatch(openModal(CannotUseExpressPaymentModal));
            }
            dispatch(setCurrency(new CurrencyEntity({ id: 'SEK' })));
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
        const response = [
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
        ];
        return fetch('http://api.ff/invoicecalculations', {}, response).then((response) => {
            dispatch(setMoneyDistributionWorker(response));            
        });
    }
}

export let setMoneyDistributionWorker = (distribution) => {
    return {
        type: 'SET_MONEY_DISTRIBUTION_WORKERS',
        payload: distribution
    }
}
