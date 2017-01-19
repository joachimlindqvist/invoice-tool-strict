import React from 'react';
import { connect } from 'react-redux';

import { setHsd, clearHsd } from '../reducers/invoice-builder/invoice-builder-actions';
import { showHsdSelector } from '../selectors/invoice-tool-selector';

const HsdSelector = ({ showHsdSelector, setHsdRot, setHsdRut, clearHsd }) => {

    if (!showHsdSelector) {
        return null;
    }
    
    return (
        <div>
            <button onClick={setHsdRot}>{'ROT'}</button>
            <button onClick={setHsdRut}>{'RUT'}</button>
            <button onClick={clearHsd}>{'clear hsd'}</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showHsdSelector: showHsdSelector(state.InvoiceBuilder.get('customer'))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHsdRot: () => dispatch(setHsd('ROT')),
        setHsdRut: () => dispatch(setHsd('RUT')),
        clearHsd: () => dispatch(clearHsd())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(HsdSelector);