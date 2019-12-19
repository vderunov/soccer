import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favoritePlayers: [],
    loading: false
};

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FAVORITE_PLAYER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_FAVORITE_PLAYER_SUCCESS:
            return {
                ...state,
                loading: false,
                players: action.players
            };
        case actionTypes.FETCH_FAVORITE_PLAYER_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.ADD_FAVORITE_PLAYER_SUCCESS:
            return {
                ...state,
                favoritePlayers: state.favoritePlayers.concat(action.favoritePlayerData)
            };
        case actionTypes.ADD_FAVORITE_PLAYER_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.ADD_FAVORITE_PLAYER_START:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default reduce;
