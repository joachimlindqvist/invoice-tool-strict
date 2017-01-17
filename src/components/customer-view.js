import React from 'react';

const CustomerView = ({ customer }) => {
    return (
        <div>
            {JSON.stringify(customer)}
        </div>
    );
}

export default CustomerView;