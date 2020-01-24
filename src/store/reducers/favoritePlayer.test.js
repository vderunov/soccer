import reducer from './favoritePlayer';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            favoritePlayers: [],
            loading: false,
            error: false
        });
    });

    it('FETCH_FAVORITE_PLAYER_START', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: false,
                    error: false
                },
                {
                    type: actionTypes.FETCH_FAVORITE_PLAYER_START
                }
            )
        ).toEqual({
            favoritePlayers: [],
            loading: true,
            error: false
        });
    });

    it('FETCH_FAVORITE_PLAYER_SUCCESS', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: true,
                    error: false
                },
                {
                    type: actionTypes.FETCH_FAVORITE_PLAYER_SUCCESS,
                    favoritePlayers: [{ name: 'Messi' }]
                }
            )
        ).toEqual({
            favoritePlayers: [{ name: 'Messi' }],
            loading: false,
            error: false
        });
    });

    it('FETCH_FAVORITE_PLAYER_FAIL', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: true,
                    error: false
                },
                {
                    type: actionTypes.FETCH_FAVORITE_PLAYER_FAIL
                }
            )
        ).toEqual({
            favoritePlayers: [],
            loading: false,
            error: false
        });
    });

    it('DELETE_FAVORITE_PLAYER_SUCCESS', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: false,
                    error: false
                },
                {
                    type: actionTypes.DELETE_FAVORITE_PLAYER_SUCCESS,
                    playerData: { name: 'Messi' }
                }
            )
        ).toEqual({
            favoritePlayers: [],
            loading: false,
            error: false
        });
    });

    it('DELETE_FAVORITE_PLAYER_FAIL', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: true,
                    error: false
                },
                {
                    type: actionTypes.DELETE_FAVORITE_PLAYER_FAIL,
                    error: 'error'
                }
            )
        ).toEqual({
            favoritePlayers: [],
            loading: false,
            error: 'error'
        });
    });

    it('DELETE_FAVORITE_PLAYER_START', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: false,
                    error: false
                },
                {
                    type: actionTypes.DELETE_FAVORITE_PLAYER_START
                }
            )
        ).toEqual({
            favoritePlayers: [],
            loading: true,
            error: false
        });
    });

    it('ADD_FAVORITE_PLAYER_SUCCESS', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: true,
                    error: false
                },
                {
                    type: actionTypes.ADD_FAVORITE_PLAYER_SUCCESS,
                    favoritePlayerData: { name: 'Messi' }
                }
            )
        ).toEqual({
            favoritePlayers: [{ name: 'Messi' }],
            loading: false,
            error: false
        });
    });

    it('ADD_FAVORITE_PLAYER_FAIL', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: true,
                    error: false
                },
                {
                    type: actionTypes.ADD_FAVORITE_PLAYER_FAIL
                }
            )
        ).toEqual({
            favoritePlayers: [],
            loading: false,
            error: false
        });
    });

    it('ADD_FAVORITE_PLAYER_START', () => {
        expect(
            reducer(
                {
                    favoritePlayers: [],
                    loading: false,
                    error: false
                },
                {
                    type: actionTypes.ADD_FAVORITE_PLAYER_START
                }
            )
        ).toEqual({
            favoritePlayers: [],
            loading: true,
            error: false
        });
    });
});
