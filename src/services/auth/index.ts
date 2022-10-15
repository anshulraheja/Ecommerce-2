import { LoginRequestPayload, SignupRequestPayload } from '../../store/auth';
import { serviceUrl } from '../serviceUrl';
import { makeRequest } from '../serviceUtils/makeRequest';

export const signup = (payload: SignupRequestPayload) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.authUrl}signup`, { ...payload }, resolve, reject, 'POST');
	});
};
export const login = (payload: LoginRequestPayload) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.authUrl}login`, { ...payload }, resolve, reject, 'POST');
	});
};
