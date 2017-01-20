import React from 'react';
import { connect } from 'react-redux';

import { setExpressPayment } from '../reducers/invoice-builder/invoice-builder-actions';
import { getExpressPayment, showExpressPaymentSelector } from '../selectors/invoice-tool-selector';

const ExpressPaymentSelector = ({
    showExpressPaymentButton,
    expressPayment,
    setExpressPayment
}) => {

    if (!showExpressPaymentButton) {
        return null;
    }

    return (
        <div>
            <button onClick={setExpressPayment.bind(this, !expressPayment)}>
                {'ExpressPaymentSelector'}{expressPayment ? '1' : '0'}
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expressPayment: getExpressPayment(state),
        showExpressPaymentButton: showExpressPaymentSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setExpressPayment: (value) => dispatch(setExpressPayment(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpressPaymentSelector);
