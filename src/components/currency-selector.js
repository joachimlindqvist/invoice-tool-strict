import React from 'react';

const CurrencySelector = ({ currencies = [] }) => {
    return (
        <div>
            <select>
                {
                    currencies.map((currency, key) => {
                        return (<option value={currency} key={key}>{currency}</option>)
                    })
                }
            </select>
        </div> 
    )
}

export default CurrencySelector;