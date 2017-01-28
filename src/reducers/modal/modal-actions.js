import SettingsModal from '../../components/settings-modal'

export const openSettingsModal = () => {
    return (dispatch) => {
        dispatch(setModalLoading(true));
        dispatch(openModal(SettingsModal.name));
        setTimeout(() => {
            dispatch(setModalLoading(false));
        }, 2000)
    }
}

export const openModal = (modal) => {
    return {
        type: 'OPEN_MODAL',
        payload: modal.name || modal
    }
}

export const setModalLoading = (loading) => {
    return {
        type: 'SET_MODAL_LOADING',
        payload: loading
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    }
}