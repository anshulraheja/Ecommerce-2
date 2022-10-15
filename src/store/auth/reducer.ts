import { Reducer } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';
import { AuthActions, IAuthState, LoginResponseGenerator, SignupResponseGenerator } from './types';

export const authInitialState: IAuthState = {
	signupData: {} as SignupResponseGenerator,
	loginData: {} as LoginResponseGenerator
};
export const AuthReducer: Reducer<IAuthState, AuthActions> = (state = authInitialState, action: AuthActions) => {
	switch (action.type) {
		case SIGNUP_REQUEST:
			return {
				...state
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				signupData: action.payload
			};
		case LOGIN_REQUEST:
			return {
				...state
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loginData: action.payload
			};
		default:
			return { ...state };
	}
};
