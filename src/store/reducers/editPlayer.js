import * as actionTypes from '../actions/actionTypes';

const initialState = {
    editPlayer: {},
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_PLAYER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.EDIT_PLAYER_SUCCESS:
            return {
                ...state,
                loading: false,
                players: action.players
            };
        case actionTypes.EDIT_PLAYER_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.EDIT_PLAYER:
            return {
                ...state,
                editPlayer: action.player
            };
        default:
            return state;
    }
};

export default reducer;
