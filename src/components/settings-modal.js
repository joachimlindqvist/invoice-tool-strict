import React from 'react';

export const SettingsModal = ({ loading }) => {
    return (
        <div>
            {'SettingsModal'}
            {loading ? 'loading...': ''}
        </div>
    );
}

export default SettingsModal;