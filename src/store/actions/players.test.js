import {} from './players';
import * as actionTypes from './actionTypes';
import { addMoreInfoPlayer } from './players';
import { fetchPlayersStart } from './players';
import { fetchPlayersSuccess } from './players';
import { fetchPlayersFail } from './players';
import { registerPlayerSuccess } from './players';
import { registerPlayerFail } from './players';
import { registerPlayerStart } from './players';

describe('sync actions', () => {
    it('addMoreInfoPlayer', () => {
        const expectedAction = {
            type: actionTypes.ADD_MORE_INFO_PLAYER,
            player: { name: 'Messi' }
        };

        expect(addMoreInfoPlayer(expectedAction.player)).toEqual(expectedAction);
    });

    it('fetchPlayersStart', () => {
        expect(fetchPlayersStart()).toEqual({
            type: actionTypes.FETCH_PLAYERS_START
        });
    });

    it('fetchPlayersSuccess', () => {
        const expectedAction = {
            type: actionTypes.FETCH_PLAYERS_SUCCESS,
            players: { name: 'Messi' }
        };

        expect(fetchPlayersSuccess(expectedAction.players)).toEqual(expectedAction);
    });

    it('fetchPlayersFail', () => {
        const expectedAction = {
            type: actionTypes.FETCH_PLAYERS_FAIL,
            error: 'error'
        };

        expect(fetchPlayersFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('registerPlayerSuccess', () => {
        const expectedAction = {
            type: actionTypes.REGISTER_PLAYER_SUCCESS,
            playerId: '1231fd1212n3',
            playerData: { name: 'Messi' }
        };

        expect(registerPlayerSuccess(expectedAction.playerId, expectedAction.playerData)).toEqual(expectedAction);
    });

    it('registerPlayerFail', () => {
        const expectedAction = {
            type: actionTypes.REGISTER_PLAYER_FAIL,
            error: 'error'
        };

        expect(registerPlayerFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('registerPlayerStart', () => {
        expect(registerPlayerStart()).toEqual({
            type: actionTypes.REGISTER_PLAYER_START
        });
    });
});
