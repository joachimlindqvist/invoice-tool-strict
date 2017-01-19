import React from 'react';
import { connect } from 'react-redux';

import { setHsd, clearHsd } from '../reducers/invoice-builder/invoice-builder-actions';

const HsdSelector = ({ setHsdRot, setHsdRut, clearHsd }) => {
    return (
        <div>
            <button onClick={setHsdRot}>{'ROT'}</button>
            <button onClick={setHsdRut}>{'RUT'}</button>
            <button onClick={clearHsd}>{'clear hsd'}</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHsdRot: () => dispatch(setHsd('ROT')),
        setHsdRut: () => dispatch(setHsd('RUT')),
        clearHsd: () => dispatch(clearHsd());
    }
}

export default  connect(null, mapDispatchToProps)(HsdSelector);