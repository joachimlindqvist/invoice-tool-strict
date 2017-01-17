import React from 'react';

import CurrencySelector from './currency-selector';
import VatSelector from './vat-selector';

const InvoiceAmountSelector = () => {
    return (
        <div>
            <input defaultValue={'1337'} />
            <CurrencySelector />
            <VatSelector />
            <span>{'Including vat amount'}</span>
        </div>
    )
}

export default InvoiceAmountSelector;