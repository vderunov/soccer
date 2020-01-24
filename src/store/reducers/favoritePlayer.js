import * as actionTypes from '../actions/actionTypes';
import { removeItem } from '../../shared/utility';

const initialState = {
    favoritePlayers: [],
    loading: false,
    error: false
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
                favoritePlayers: action.favoritePlayers
            };
        case actionTypes.FETCH_FAVORITE_PLAYER_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.DELETE_FAVORITE_PLAYER_SUCCESS:
            const newArr = removeItem(state.favoritePlayers, action.playerData);
            return {
                ...state,
                loading: false,
                favoritePlayers: newArr
            };
        case actionTypes.DELETE_FAVORITE_PLAYER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.DELETE_FAVORITE_PLAYER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.ADD_FAVORITE_PLAYER_SUCCESS:
            return {
                ...state,
                favoritePlayers: state.favoritePlayers.concat(action.favoritePlayerData),
                loading: false
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
