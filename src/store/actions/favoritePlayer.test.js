import {
    addFavoritePlayerFail,
    addFavoritePlayerStart,
    addFavoritePlayerSuccess,
    deleteFavoritePlayerFail,
    deleteFavoritePlayerStart,
    deleteFavoritePlayerSuccess,
    fetchFavoritePlayerFail,
    fetchFavoritePlayerStart,
    fetchFavoritePlayerSuccess
} from './favoritePlayers';
import * as actionTypes from './actionTypes';

describe('sync actions', () => {
    it('deleteFavoritePlayerSuccess', () => {
        const expectedAction = {
            type: actionTypes.DELETE_FAVORITE_PLAYER_SUCCESS,
            playerData: { name: 'Messi' }
        };

        expect(deleteFavoritePlayerSuccess(expectedAction.playerData)).toEqual(expectedAction);
    });

    it('deleteFavoritePlayerFail', () => {
        const expectedAction = {
            type: actionTypes.DELETE_FAVORITE_PLAYER_FAIL,
            error: 'error'
        };

        expect(deleteFavoritePlayerFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('deleteFavoritePlayerStart', () => {
        expect(deleteFavoritePlayerStart()).toEqual({
            type: actionTypes.DELETE_FAVORITE_PLAYER_START
        });
    });

    it('fetchFavoritePlayerSuccess', () => {
        const expectedAction = {
            type: actionTypes.FETCH_FAVORITE_PLAYER_SUCCESS,
            favoritePlayers: { name: 'Messi' }
        };

        expect(fetchFavoritePlayerSuccess(expectedAction.favoritePlayers)).toEqual(expectedAction);
    });

    it('fetchFavoritePlayerFail', () => {
        const expectedAction = {
            type: actionTypes.FETCH_FAVORITE_PLAYER_FAIL,
            error: 'error'
        };

        expect(fetchFavoritePlayerFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('fetchFavoritePlayerStart', () => {
        expect(fetchFavoritePlayerStart()).toEqual({
            type: actionTypes.FETCH_FAVORITE_PLAYER_START
        });
    });

    it('addFavoritePlayerSuccess', () => {
        const expectedAction = {
            type: actionTypes.ADD_FAVORITE_PLAYER_SUCCESS,
            favoritePlayerData: { name: 'Messi' }
        };

        expect(addFavoritePlayerSuccess(expectedAction.favoritePlayerData)).toEqual(expectedAction);
    });

    it('addFavoritePlayerFail', () => {
        const expectedAction = {
            type: actionTypes.ADD_FAVORITE_PLAYER_FAIL,
            error: 'error'
        };

        expect(addFavoritePlayerFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('addFavoritePlayerStart', () => {
        expect(addFavoritePlayerStart()).toEqual({
            type: actionTypes.ADD_FAVORITE_PLAYER_START
        });
    });
});
