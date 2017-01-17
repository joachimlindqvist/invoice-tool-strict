import React from 'react';
import { connect } from 'react-redux';

import SettingsModal from './settings-modal';

const modals = {
    SettingsModal
}

export const Modal = ({ modal, loading }) => {

    if (!modal) {
        return null
    }

    const OpenModal = modals[modal];

    return (
        <div>
            <OpenModal type={modal} loading={loading}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: state.Modal.get('modal'),
        loading: state.Modal.get('loading')
    }
}

export default connect(mapStateToProps)(Modal);