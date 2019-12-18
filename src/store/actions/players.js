import * as actionTypes from './actionTypes';
import axios from '../../axios-players';

export const addMoreInfoPlayer = player => {
    return {
        type: actionTypes.ADD_MORE_INFO_PLAYER,
        player
    };
};

export const fetchPlayersStart = () => {
    return {
        type: actionTypes.FETCH_PLAYERS_START
    };
};

export const fetchPlayersSuccess = players => {
    return {
        type: actionTypes.FETCH_PLAYERS_SUCCESS,
        players
    };
};

export const fetchPlayersFail = error => {
    return {
        type: actionTypes.FETCH_PLAYERS_FAIL,
        error
    };
};

export const fetchPlayers = () => {
    return dispatch => {
        dispatch(fetchPlayersStart());
        axios
            .get('/players.json')
            .then(response => {
                const fetchPlayersStart = [];
                for (let key in response.data) {
                    fetchPlayersStart.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchPlayersSuccess(fetchPlayersStart));
            })
            .catch(err => {
                dispatch(fetchPlayersFail(err));
            });
    };
};

export const registerPlayerSuccess = (id, playerData) => {
    return {
        type: actionTypes.REGISTER_PLAYER_SUCCESS,
        playerId: id,
        playerData
    };
};

export const registerPlayerFail = error => {
    return {
        type: actionTypes.REGISTER_PLAYER_FAIL,
        error
    };
};

export const registerPlayerStart = () => {
    return {
        type: actionTypes.REGISTER_PLAYER_START
    };
};

export const registerPlayer = playerData => {
    return dispatch => {
        dispatch(registerPlayerStart());
        axios
            .post('/players.json', playerData)
            .then(response => {
                dispatch(registerPlayerSuccess(response.data.name, playerData));
            })
            .catch(error => {
                dispatch(registerPlayerFail(error));
            });
    };
};
