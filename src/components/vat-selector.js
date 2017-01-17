import React from 'react';

const VatSelector = ({ vats = [] }) => {
    return (
        <div>
            <select>
                {
                    vats.map((vat, key) => {
                        return (<option value={vat} key={key}>{vat}</option>)
                    })
                }
            </select>
        </div> 
    )
};

export default VatSelector;