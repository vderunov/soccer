import * as actionTypes from './actionTypes';
import axios from '../../axios-players';

export const fetchFavoritePlayerSuccess = players => {
    return {
        type: actionTypes.FETCH_FAVORITE_PLAYER_SUCCESS,
        players
    };
};

export const fetchFavoritePlayerFail = error => {
    return {
        type: actionTypes.FETCH_FAVORITE_PLAYER_FAIL,
        error
    };
};

export const fetchFavoritePlayerStart = () => {
    return {
        type: actionTypes.FETCH_FAVORITE_PLAYER_START
    };
};

export const fetchFavoritePlayer = (token, userId) => {
    return dispatch => {
        dispatch(fetchFavoritePlayerStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios
            .get('favoritePlayers.json' + queryParams)
            .then(response => {
                const fetchPlayersStart = [];
                for (let key in response.data) {
                    fetchPlayersStart.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchFavoritePlayerSuccess(fetchPlayersStart));
            })
            .catch(error => {
                dispatch(fetchFavoritePlayerFail(error));
            });
    };
};

export const addFavoritePlayerSuccess = favoritePlayerData => {
    return {
        type: actionTypes.ADD_FAVORITE_PLAYER_SUCCESS,
        favoritePlayerData
    };
};

export const addFavoritePlayerFail = error => {
    return {
        type: actionTypes.ADD_FAVORITE_PLAYER_FAIL,
        error
    };
};

export const addFavoritePlayerStart = () => {
    return {
        type: actionTypes.ADD_FAVORITE_PLAYER_START
    };
};

export const addFavoritePlayer = (favoritePlayerData, token) => {
    return dispatch => {
        dispatch(addFavoritePlayerStart());
        axios
            .post('favoritePlayers.json?auth=' + token, favoritePlayerData)
            .then(response => {
                dispatch(addFavoritePlayerSuccess(favoritePlayerData));
            })
            .catch(error => {
                dispatch(addFavoritePlayerFail(error));
            });
    };
};
