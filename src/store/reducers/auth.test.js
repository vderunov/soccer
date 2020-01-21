import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false
        });
    });

    it('should store the token upon login', () => {
        expect(
            reducer(
                {
                    token: null,
                    userId: null,
                    error: null,
                    loading: false
                },
                {
                    type: actionTypes.AUTH_SUCCESS,
                    idToken: 'some-token',
                    userId: 'some-user-id'
                }
            )
        ).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false
        });
    });

    it('should logout', () => {
        expect(
            reducer(
                {
                    token: null,
                    userId: null,
                    error: null,
                    loading: false
                },
                {
                    type: actionTypes.AUTH_LOGOUT,
                    idToken: null,
                    userId: null
                }
            )
        ).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false
        });
    });

    it('should auth fail', () => {
        expect(
            reducer(
                {
                    token: null,
                    userId: null,
                    error: null,
                    loading: false
                },
                {
                    type: actionTypes.AUTH_FAIL,
                    error: 'some-error',
                    loading: false
                }
            )
        ).toEqual({
            token: null,
            userId: null,
            error: 'some-error',
            loading: false
        });
    });

    it('should auth start', () => {
        expect(
            reducer(
                {
                    token: null,
                    userId: null,
                    error: null,
                    loading: false
                },
                {
                    type: actionTypes.AUTH_START,
                    error: null,
                    loading: true
                }
            )
        ).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: true
        });
    });
});
