import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: [],
    moreInfoPlayer: { name: 'No player selected' },
    editPlayer: {},
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MORE_INFO_PLAYER:
            return {
                ...state,
                moreInfoPlayer: action.player
            };
        case actionTypes.FETCH_PLAYERS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                loading: false,
                players: action.players
            };
        case actionTypes.FETCH_PLAYERS_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.REGISTER_PLAYER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.REGISTER_PLAYER_SUCCESS:
            return {
                ...state,
                loading: false,
                players: state.players.concat(action.playerData)
            };
        case actionTypes.REGISTER_PLAYER_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
