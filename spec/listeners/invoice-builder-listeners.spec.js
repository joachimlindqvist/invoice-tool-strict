import createStore from '../test-store';

import { toggleExpressPayment } from '../../src/listeners/invoice-builder-listeners';
import { showExpressPaymentButton } from '../../src/reducers/invoice-tool/invoice-tool-actions';
import { setCustomer, setExpressPayment } from '../../src/reducers/invoice-builder/invoice-builder-actions';

describe('Invoice Builder listener', function () {
    describe('toggleExpressPayment', function () {

        // Test som kollar om actions har körts
        it('should show express button on initial state', function() {
            const store = createStore();
            const unsubscribe = toggleExpressPayment(store);
            // Skulle vara stabilare att kolla store.getActions() innehåller
            // showExpressPaymentButton(true) på vilket index som helst eftersom
            // actionet inte nödvändigvis behöver vara det första som dispatchas.
            // Samma gäller testet under
            expect(store.getActions()[0]).toEqual(showExpressPaymentButton(true));
            unsubscribe();
        });

        // Test som kollar om actions har körts
        it('should hide express button and switch to non-express payment if country isn\'t Sweden.', function () {
            const store = createStore();
            const unsubscribe = toggleExpressPayment(store);
            store.dispatch(setCustomer({ country: 'URUGUAY' }));
            expect(store.getActions()[2]).toEqual(showExpressPaymentButton(false));
            expect(store.getActions()[3]).toEqual(setExpressPayment(false));
            unsubscribe();
        });

        // Samma test som första testet fast det kollar om state ser rätt ut
        it('should show express button on initial state #2', function() {
            const store = createStore();
            const unsubscribe = toggleExpressPayment(store);
            expect(store.getState().InvoiceTool.get('showExpressPaymentButton')).toBeTruthy();
            unsubscribe();
        });

        // Samma test som andra testet fast det kollar om state ser rätt ut
        it('should hide express button and switch to non-express payment if country isn\'t Sweden. #2', function () {
            const store = createStore();
            const unsubscribe = toggleExpressPayment(store);
            store.dispatch(setCustomer({ country: 'URUGUAY' }));
            expect(store.getState().InvoiceTool.get('showExpressPaymentButton')).toBeFalsy();
            expect(store.getState().InvoiceBuilder.get('expressPayment')).toBeFalsy();
            unsubscribe();
        });
    });
})