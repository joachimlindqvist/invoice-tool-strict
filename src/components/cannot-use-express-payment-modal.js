import React from 'react';

export const CannotUseExpressPaymentModal = ({ loading }) => {
    return (
        <div>
            {'CannotUseExpressPaymentModal'}
            {loading ? 'loading...': ''}
        </div>
    );
}

export default CannotUseExpressPaymentModal;