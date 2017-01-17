import { Map } from 'immutable';

export const initialState = Map({
    modal: null,
    loading: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return state.set('modal', action.payload)
        case 'CLOSE_MODAL':
            return state.set('modal', null);
        case 'SET_MODAL_LOADING':
            return state.set('loading', action.payload)
    }
    
    return state;
}