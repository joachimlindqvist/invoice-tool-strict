import Customer from '../../entities/customer-entity';
import { List } from 'immutable';
import * as types from './customers-types';

export type SetCustomersAction = {
    type: types.SET_CUSTOMERS,
    payload: List<Customer>
}

export type AddCustomerAction = {
    type: types.ADD_CUSTOMER,
    payload: Customer
}

export type FetchingCustomersAction = {
    type: types.FETCHING_CUSTOMERS
}

export type StoppedFetchingCustomersAction = {
    type: types.STOPPED_FETCHING_CUSTOMERS
}

export type CreatingCustomerAction = {
    type: types.CREATING_CUSTOMER
}