import { Map, List } from 'immutable';
import { IAction, IThunkAction, IListAction } from '../index';
import * as types from './customers-types';
import * as actionTypes from './customers-action-types';
import Customer from '../../entities/customer-entity';

const createDummyCustomer = ({ id, country = 'SWEDEN' }) => {
    return Map({
        id,
        name: `customer${id}`,
        country
    });
};

export let refreshCustomers = () : IThunkAction => {
    return (dispatch) => {
        dispatch(fetchingCustomers());
        setTimeout(() => {
            dispatch(stoppedFetchingCustomers())
            dispatch(setCustomers(List<Customer>([])))
        }, 2000);
        return 'true';
    };
}

export let createCustomer = () : IThunkAction => {
    return (dispatch, getState) => {
        dispatch(creatingCustomer());
        setTimeout(() => {
            dispatch(stoppedCreatingCustomer());
            dispatch(addCustomer(getState().Customers.get('list').size + 1))
        }, 2000)
    }
}

export let creatingCustomer = () : IAction => {
    return {
        type: 'CREATING_CUSTOMER'
    }
}

export let stoppedCreatingCustomer = () : IAction => {
    return {
        type: 'STOPPED_CREATING_CUSTOMER'
    }
}

export let addCustomer = (id) : IAction => {
    return {
        type: 'ADD_CUSTOMER',
        payload: createDummyCustomer({ id })
    }
}

export let fetchingCustomers = () : IAction => {
    return {
        type: 'FETCHING_CUSTOMERS'
    };
};

export let stoppedFetchingCustomers = () : IAction => {
    return {
        type: 'STOPPED_FETCHING_CUSTOMERS'
    };
};

export let setCustomers = (customers: List<Customer>) : actionTypes.SetCustomersAction => {
    return {
        type: types.SET_CUSTOMERS,
        payload: customers
    };
}