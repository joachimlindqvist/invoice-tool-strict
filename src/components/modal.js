import React from 'react';
import { connect } from 'react-redux';

import SettingsModal from './settings-modal';
import CannotUseExpressPaymentModal from './cannot-use-express-payment-modal';
import CannotUseOtherCurrencyWithHsdModal from './cannot-use-other-currency-with-hsd-modal';

import { closeModal } from '../reducers/modal/modal-actions';

const registeredModals = {
    SettingsModal,
    CannotUseExpressPaymentModal,
    CannotUseOtherCurrencyWithHsdModal
}

export const Modal = ({ modal, loading }) => {

    if (!modal) {
        return null
    }

    const OpenModal = registeredModals[modal];

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

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);