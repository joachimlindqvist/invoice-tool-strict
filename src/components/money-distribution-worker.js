import React from 'react';
import { connect } from 'react-redux';

import TaxkeySelector from './taxkey-selector';
import Input from './input';
import { setWorkerNet } from '../reducers/invoice-builder/invoice-builder-actions';

export const MoneyDistributionWorker = ({ worker, setWorkerNet }) => {

    const onNetKeyUp = (e) => {
        setWorkerNet(worker, e.target.value);
    }

    return (
        <div>
            <label>total <Input value={worker.get('total')} /></label><br />
            <label>gross <Input value={worker.get('gross')} /></label><br />
            <label>net <Input value={worker.get('net')} onBlur={onNetKeyUp} /></label><br />
            {<TaxkeySelector />}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWorkerNet: (worker, net) => { dispatch(setWorkerNet(worker, net)) }
    }
}

export default connect(null, mapDispatchToProps)(MoneyDistributionWorker);