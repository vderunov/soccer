import {
    deletePlayerSuccess,
    deletePlayerFail,
    deletePlayerStart,
    editPlayer,
    editPlayerSuccess,
    editPlayerStart,
    editPlayerFail
} from './editPlayer';
import * as actionTypes from './actionTypes';

describe('sync actions', () => {
    it('deletePlayerSuccess', () => {
        expect(deletePlayerSuccess()).toEqual({
            type: actionTypes.DELETE_PLAYER_SUCCESS
        });
    });

    it('deletePlayerFail', () => {
        const expectedAction = {
            type: actionTypes.DELETE_PLAYER_FAIL,
            error: 'testError'
        };

        expect(deletePlayerFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('deletePlayerStart', () => {
        expect(deletePlayerStart()).toEqual({
            type: actionTypes.DELETE_PLAYER_START
        });
    });

    it('editPlayer', () => {
        const expectedAction = {
            type: actionTypes.EDIT_PLAYER,
            player: { name: 'Messi' }
        };

        expect(editPlayer(expectedAction.player)).toEqual(expectedAction);
    });

    it('editPlayerSuccess', () => {
        const expectedAction = {
            type: actionTypes.EDIT_PLAYER_SUCCESS,
            playerData: { name: 'Messi' }
        };

        expect(editPlayerSuccess(expectedAction.playerData)).toEqual(expectedAction);
    });

    it('editPlayerFail', () => {
        const expectedAction = {
            type: actionTypes.EDIT_PLAYER_FAIL,
            error: 'error'
        };

        expect(editPlayerFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('editPlayerStart', () => {
        expect(editPlayerStart()).toEqual({
            type: actionTypes.EDIT_PLAYER_START
        });
    });
});
