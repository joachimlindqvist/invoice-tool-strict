import { Map } from 'immutable';

const createDummyCustomer = ({ id, country = 'SWEDEN' }) => {
    return Map({
        id,
        name: `customer${id}`,
        country
    });
};

export let refreshCustomers = () => {
    return (dispatch) => {
        dispatch(fetchingCustomers());
        setTimeout(() => {
            dispatch(stoppedFetchingCustomers())
            dispatch(setCustomers())
        }, 2000)
    };
}

export let createCustomer = () => {
    return (dispatch, getState) => {
        dispatch(creatingCustomer());
        setTimeout(() => {
            dispatch(stoppedCreatingCustomer());
            dispatch(addCustomer(getState().Customers.get('list').size + 1))
        }, 2000)
    }
}

export let creatingCustomer = () => {
    return {
        type: 'CREATING_CUSTOMER'
    }
}

export let stoppedCreatingCustomer = () => {
    return {
        type: 'STOPPED_CREATING_CUSTOMER'
    }
}

export let addCustomer = (id) => {
    return {
        type: 'ADD_CUSTOMER',
        payload: createDummyCustomer({ id })
    }
}

export let fetchingCustomers = () => {
    return {
        type: 'FETCHING_CUSTOMERS'
    };
};

export let stoppedFetchingCustomers = () => {
    return {
        type: 'STOPPED_FETCHING_CUSTOMERS'
    };
};

export let setCustomers = () => {
    return {
        type: 'SET_CUSTOMERS',
        payload: [
            createDummyCustomer({ id: 0 }),
            createDummyCustomer({ id: 1, country: 'URUGUAY' }),
        ]
    };
}