import { LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';
import {
	LoginRequest,
	LoginRequestPayload,
	LoginResponseGenerator,
	LoginSuccess,
	SignupRequest,
	SignupRequestPayload,
	SignupResponseGenerator,
	SignupSuccess
} from './types';

export const signupRequest = (payload: SignupRequestPayload): SignupRequest => ({
	type: SIGNUP_REQUEST,
	payload
});

export const signupSuccess = (payload: SignupResponseGenerator): SignupSuccess => ({
	type: SIGNUP_SUCCESS,
	payload
});

export const loginRequest = (payload: LoginRequestPayload): LoginRequest => ({
	type: LOGIN_REQUEST,
	payload
});

export const loginSuccess = (payload: LoginResponseGenerator): LoginSuccess => ({
	type: LOGIN_SUCCESS,
	payload
});
