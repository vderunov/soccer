import { authFail, authStart, authSuccess, logout } from './auth';
import * as actionTypes from './actionTypes';

describe('sync actions', () => {
    it('authStart', () => {
        expect(authStart()).toEqual({
            type: actionTypes.AUTH_START
        });
    });

    it('authSuccess', () => {
        const expectedAction = {
            type: actionTypes.AUTH_SUCCESS,
            idToken: '41h24jj1',
            userId: 16471674
        };

        expect(authSuccess(expectedAction.idToken, expectedAction.userId)).toEqual(expectedAction);
    });

    it('authFail', () => {
        const expectedAction = {
            type: actionTypes.AUTH_FAIL,
            error: 'testErr'
        };

        expect(authFail(expectedAction.error)).toEqual(expectedAction);
    });

    it('logout', () => {
        const expectedAction = {
            type: actionTypes.AUTH_LOGOUT
        };

        expect(logout(expectedAction.error)).toEqual(expectedAction);
    });
});
