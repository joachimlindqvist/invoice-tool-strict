import React from 'react';
import { connect } from 'react-redux';

import { openSettingsModal } from '../reducers/modal/modal-actions';

const Header = ({ openSettingsModal }) => {
    return (
        <div>
            {'Frilans Finans Logo'}
            <button onClick={openSettingsModal}>{'Kontoinställningar'}</button>
            <button>{'Stäng verktyget'}</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        openSettingsModal: () => { dispatch(openSettingsModal()) }
    }
}

export default connect(null, mapDispatchToProps)(Header);