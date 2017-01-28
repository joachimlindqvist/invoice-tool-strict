import React from 'react';
import { connect } from 'react-redux';

import { setCustomer } from '../reducers/invoice-builder/invoice-builder-actions';
import { getById } from '../selectors/general';

const CustomerList = ({ customers, setCustomer }) => {

    const onCustomerChange = (e) => {
        setCustomer(getById(customers, e.target.value));
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
        setCustomer: (customer) => dispatch(setCustomer(customer))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);