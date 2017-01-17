import { combineReducers } from 'redux';

import InvoiceBuilder from './invoice-builder/invoice-builder-reducer';
import Customers from './customers/customers-reducer';
import InvoiceTool from './invoice-tool/invoice-tool-reducer';
import Modal from './modal/modal-reducer';

export default combineReducers({
    InvoiceBuilder,
    Customers,
    InvoiceTool,
    Modal
});