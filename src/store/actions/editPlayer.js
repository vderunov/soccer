import * as actionTypes from './actionTypes';
import axios from '../../axios-players';

export const deletePlayerSuccess = () => {
    return {
        type: actionTypes.DELETE_PLAYER_SUCCESS
    };
};

export const deletePlayerFail = error => {
    return {
        type: actionTypes.DELETE_PLAYER_FAIL,
        error
    };
};

export const deletePlayerStart = () => {
    return {
        type: actionTypes.DELETE_PLAYER_START
    };
};

export const deletePlayer = playerData => {
    return dispatch => {
        dispatch(deletePlayerStart());
        axios
            .delete('/players/' + playerData.id + '.json')
            .then(response => {
                dispatch(deletePlayerSuccess());
            })
            .catch(error => {
                dispatch(deletePlayerFail(error));
            });
    };
};

export const editPlayer = player => {
    return {
        type: actionTypes.EDIT_PLAYER,
        player
    };
};

export const editPlayerSuccess = playerData => {
    return {
        type: actionTypes.EDIT_PLAYER_SUCCESS,
        playerData
    };
};

export const editPlayerFail = error => {
    return {
        type: actionTypes.EDIT_PLAYER_FAIL,
        error
    };
};

export const editPlayerStart = () => {
    return {
        type: actionTypes.EDIT_PLAYER_START
    };
};

export const initEditPlayer = playerData => {
    return dispatch => {
        dispatch(editPlayerStart());
        axios
            .put('/players/' + playerData.id + '.json', playerData)
            .then(response => {
                dispatch(editPlayerSuccess(playerData));
            })
            .catch(error => {
                dispatch(editPlayerFail(error));
            });
    };
};
