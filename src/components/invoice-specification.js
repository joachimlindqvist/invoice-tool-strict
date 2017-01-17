import React from 'react';

import WorkDateSelector from './work-date-selector';
import HsdSelector from './hsd-selector';
import InvoiceSpecificationInput from './invoice-specification-input';
import ExpressPaymentSelector from './express-payment-selector';
import CampaignCodeSelector from './campaign-code-selector';
import InvoiceAmountSelector from './invoice-amount-selector';

const InvoiceSpecification = () => {
    return (
        <div>
            <WorkDateSelector/>
            <HsdSelector />
            <InvoiceSpecificationInput />
            <ExpressPaymentSelector />
            <CampaignCodeSelector />
            <InvoiceAmountSelector />
        </div>
    )
};

export default InvoiceSpecification;