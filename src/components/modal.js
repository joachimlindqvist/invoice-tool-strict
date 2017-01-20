import React from 'react';
import { connect } from 'react-redux';

import SettingsModal from './settings-modal';
import CannotUseExpressPaymentModal from './cannot-use-express-payment-modal';

const modals = {
    SettingsModal,
    CannotUseExpressPaymentModal
}

export const Modal = ({ modal, loading }) => {

    if (!modal) {
        return null
    }

    const OpenModal = modals[modal];

    if (!OpenModal) {
        console.error(`Tried to open modal \`${modal}\` but no such modal is defined in the Modal component.`);
        return null;
    }

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