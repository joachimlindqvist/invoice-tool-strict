import React from 'react';
import { connect } from 'react-redux';

import CustomerView from './customer-view';
import CustomerList from './customer-list';

import { createCustomer } from '../reducers/customers/customers-actions';

const CustomerSelector = ({ createCustomer }) => {

    const customers = [
        {
            name: 'ACME'
        }
    ];

    return (
        <div>
            <CustomerView />
            <CustomerList customers={customers} />
            <button onClick={createCustomer}>{'Lägg till ny kund'}</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCustomer: () => { dispatch(createCustomer()) }
    }
}

export default connect(null, mapDispatchToProps)(CustomerSelector);