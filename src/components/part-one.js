import React from 'react';

import CustomerSelector from './customer-selector';
import InvoiceSpecification from './invoice-specification';

const PartOne = () => {
    return (
        <div>
            {'PartOne'}
            <CustomerSelector />
            <InvoiceSpecification />
        </div>
    );
}

export default PartOne;