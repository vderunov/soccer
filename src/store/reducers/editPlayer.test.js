import reducer from './editPlayer';
import * as actionTypes from '../actions/actionTypes';

describe('editPlayer reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            editPlayer: {},
            loading: false
        });
    });

    it('EDIT_PLAYER_START', () => {
        expect(
            reducer(
                {
                    editPlayer: {},
                    loading: false
                },
                {
                    type: actionTypes.EDIT_PLAYER_START,
                    loading: true
                }
            )
        ).toEqual({
            editPlayer: {},
            loading: true
        });
    });

    it('EDIT_PLAYER_SUCCESS', () => {
        expect(
            reducer(
                {
                    editPlayer: {},
                    loading: false
                },
                {
                    type: actionTypes.EDIT_PLAYER_SUCCESS,
                    loading: false,
                    players: { name: 'Messi' }
                }
            )
        ).toEqual({
            editPlayer: {},
            loading: false,
            players: { name: 'Messi' }
        });
    });

    it('EDIT_PLAYER_FAIL', () => {
        expect(
            reducer(
                {
                    editPlayer: {},
                    loading: true
                },
                {
                    type: actionTypes.EDIT_PLAYER_FAIL,
                    loading: false
                }
            )
        ).toEqual({
            editPlayer: {},
            loading: false
        });
    });

    it('EDIT_PLAYER', () => {
        expect(
            reducer(
                {
                    editPlayer: {},
                    loading: false
                },
                {
                    type: actionTypes.EDIT_PLAYER,
                    player: { name: 'Messi' }
                }
            )
        ).toEqual({
            editPlayer: { name: 'Messi' },
            loading: false
        });
    });
});
