import reducer from './players';
import * as actionTypes from '../actions/actionTypes';

describe('editPlayer reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            players: [],
            moreInfoPlayer: { name: 'No player selected' },
            editPlayer: {},
            loading: false
        });
    });

    it('ADD_MORE_INFO_PLAYER', () => {
        expect(
            reducer(
                {
                    players: [],
                    moreInfoPlayer: { name: 'No player selected' },
                    editPlayer: {},
                    loading: false
                },
                {
                    type: actionTypes.ADD_MORE_INFO_PLAYER,
                    moreInfoPlayer: { name: 'Messi' }
                }
            )
        ).toEqual({
            players: [],
            editPlayer: {},
            loading: false
        });
    });

    it('FETCH_PLAYERS_START', () => {
        expect(
            reducer(
                {
                    players: [],
                    moreInfoPlayer: { name: 'No player selected' },
                    editPlayer: {},
                    loading: false
                },
                {
                    type: actionTypes.FETCH_PLAYERS_START,
                    loading: true
                }
            )
        ).toEqual({
            players: [],
            moreInfoPlayer: { name: 'No player selected' },
            editPlayer: {},
            loading: true
        });
    });

    it('FETCH_PLAYERS_SUCCESS', () => {
        expect(
            reducer(
                {
                    players: [],
                    moreInfoPlayer: { name: 'No player selected' },
                    editPlayer: {},
                    loading: false
                },
                {
                    type: actionTypes.FETCH_PLAYERS_SUCCESS,
                    loading: false,
                    players: [{ name: 'Messi' }]
                }
            )
        ).toEqual({
            players: [{ name: 'Messi' }],
            moreInfoPlayer: { name: 'No player selected' },
            editPlayer: {},
            loading: false
        });
    });

    it('FETCH_PLAYERS_FAIL', () => {
        expect(
            reducer(
                {
                    players: [],
                    moreInfoPlayer: { name: 'No player selected' },
                    editPlayer: {},
                    loading: true
                },
                {
                    type: actionTypes.FETCH_PLAYERS_FAIL,
                    loading: false
                }
            )
        ).toEqual({
            players: [],
            moreInfoPlayer: { name: 'No player selected' },
            editPlayer: {},
            loading: false
        });
    });

    it('REGISTER_PLAYER_START', () => {
        expect(
            reducer(
                {
                    players: [],
                    moreInfoPlayer: { name: 'No player selected' },
                    editPlayer: {},
                    loading: false
                },
                {
                    type: actionTypes.REGISTER_PLAYER_START,
                    loading: true
                }
            )
        ).toEqual({
            players: [],
            moreInfoPlayer: { name: 'No player selected' },
            editPlayer: {},
            loading: true
        });
    });

    it('REGISTER_PLAYER_SUCCESS', () => {
        expect(
            reducer(
                {
                    players: [],
                    moreInfoPlayer: { name: 'No player selected' },
                    editPlayer: {},
                    loading: true
                },
                {
                    type: actionTypes.REGISTER_PLAYER_SUCCESS,
                    playerId: 'asdasd2132',
                    playerData: { name: 'Messi' }
                }
            )
        ).toEqual({
            players: [{ name: 'Messi' }],
            moreInfoPlayer: { name: 'No player selected' },
            editPlayer: {},
            loading: false
        });
    });

    it('REGISTER_PLAYER_FAIL', () => {
        expect(
            reducer(
                {
                    players: [],
                    moreInfoPlayer: { name: 'No player selected' },
                    editPlayer: {},
                    loading: true
                },
                {
                    type: actionTypes.REGISTER_PLAYER_FAIL,
                    loading: false
                }
            )
        ).toEqual({
            players: [],
            moreInfoPlayer: { name: 'No player selected' },
            editPlayer: {},
            loading: false
        });
    });
});
