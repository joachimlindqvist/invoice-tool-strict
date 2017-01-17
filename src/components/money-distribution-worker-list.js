import React from 'react';
import { connect } from 'react-redux';

import MoneyDistributionWorker from './money-distribution-worker';

const MoneyDistributionWorkerList = ({ workers = [] }) => {
    return (
        <div>
            {
                workers.map((worker, key) => {
                    return (<MoneyDistributionWorker key={key} worker={worker} />);
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        workers: state.InvoiceBuilder.get('workers')
    }
}

export default connect(mapStateToProps)(MoneyDistributionWorkerList);