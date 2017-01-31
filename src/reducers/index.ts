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

export type DefaultAction = { type: '' };
export const DefaultAction : DefaultAction = { type: '' };

export interface IAction {
    type: string,
    payload?: IPayload
}

export interface IListAction extends IAction {
    payload: any[]
}

export interface IThunkAction {
    (dispatch: any, getState?: any) : void
}

interface IPayload {
    [propName: string]: any
}