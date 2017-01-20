import { listen } from './listener-utility';
import { showExpressPaymentButton } from '../reducers/invoice-tool/invoice-tool-actions';
import { setExpressPayment } from '../reducers/invoice-builder/invoice-builder-actions';

export const toggleExpressPayment = (store) => {
    // return listen(
    //     store,
    //     (state) => {
    //         const customer = state.InvoiceBuilder.get('customer')
    //         return (customer && customer.get('country')) || null
    //     }, 
    //     (customerCountry) => {
    //         if (customerCountry === null || customerCountry === 'SWEDEN') {
    //             store.dispatch(showExpressPaymentButton(true));
    //         }
    //         else {
    //             store.dispatch(showExpressPaymentButton(false));
    //             store.dispatch(setExpressPayment(false));
    //         }
    //     }
    // );
}