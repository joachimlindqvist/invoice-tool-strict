import React from 'react';

const TaxkeySelector = ({ taxkeys = [] }) => {
    return (
        <div>
            {JSON.stringify(taxkeys)}
        </div>
    )
}

export default TaxkeySelector;