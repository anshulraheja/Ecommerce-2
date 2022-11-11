import { LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

export type IAuthState = {
	signupData: SignupResponseGenerator;
	loginData: LoginResponseGenerator;
};
export type SignupRequestPayload = {
	name: string;
	email: string;
	password: string;
};

export type SignupRequest = {
	type: typeof SIGNUP_REQUEST;
	payload: SignupRequestPayload;
};

export type SignupSuccess = {
	type: typeof SIGNUP_SUCCESS;
	payload: SignupResponseGenerator;
};

export type LoginRequestPayload = {
	email: string;
	password: string;
	navigate?: any;
	pathname?: string;
};

export type LoginRequest = {
	type: typeof LOGIN_REQUEST;
	payload: LoginRequestPayload;
};

export type LoginSuccess = {
	type: typeof LOGIN_SUCCESS;
	payload: LoginResponseGenerator;
};

export type IUserResponse = {
	_id: string;
	email: string;
	password: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	cart: any[];
	wishlist: any[];
	id: string;
};
export interface SignupResponseGenerator {
	createdUser: IUserResponse;
	encodedToken: string;
}

export interface LoginResponseGenerator {
	foundUser: IUserResponse;
	encodedToken: string;
}

export type AuthActions = SignupRequest | SignupSuccess | LoginRequest | LoginSuccess;
