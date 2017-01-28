import React from 'react';
import { connect } from 'react-redux';

import { enabledCurrencySelector, getCurrencies, getCurrency } from '../selectors/invoice-tool-selector';
import { setCurrency } from '../reducers/invoice-builder/invoice-builder-actions';

import { getById } from '../selectors/general';

const CurrencySelector = ({
    currencies = [], 
    enabledCurrencySelector,
    currency,
    setCurrency
}) => {

    const onChange = (e) => {
        setCurrency(getById(currencies, e.target.value));
    }

    return (
        <div>
            <select disabled={!enabledCurrencySelector} onChange={onChange} value={currency.get('id')}>
                {
                    currencies.map((currency, key) => {
                        return (<option value={currency.get('id')} key={key}>{currency.get('id')}</option>)
                    })
                }
            </select>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        currency: getCurrency(state),
        currencies: getCurrencies(state),
        enabledCurrencySelector: enabledCurrencySelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrency: (currency) => dispatch(setCurrency(currency))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);