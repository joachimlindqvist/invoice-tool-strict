import React from 'react';
import { connect } from 'react-redux';

import { selectCustomer } from '../reducers/invoice-builder/invoice-builder-actions';
import { getById } from '../selectors/general';

const CustomerList = ({ customers, selectCustomer }) => {

    const onCustomerChange = (e) => {
        selectCustomer(getById(customers, e.target.value));
    }

    let customerOptions = customers.map((customer, key) => {
        return (
            <option value={customer.get('id')} key={key}>
                {customer.get('name')}
            </option>
        );
    });
    
    return (
        <div>
            <select onChange={onCustomerChange}>{customerOptions}</select>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        customers: state.Customers.get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCustomer: (customer) => dispatch(selectCustomer(customer))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);