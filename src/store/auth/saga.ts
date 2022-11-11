import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { login, signup } from '../../services/auth';
import { loginSuccess, signupSuccess } from './actions';
import { LOGIN_REQUEST, SIGNUP_REQUEST } from './actionTypes';
import { LoginRequest, LoginResponseGenerator, SignupRequest, SignupResponseGenerator } from './types';

export function* signupSaga(action: SignupRequest) {
	try {
		const response: SignupResponseGenerator = yield call(signup, action.payload);
		yield put(signupSuccess(response));
		localStorage.setItem('ecommerce_user_token', response.encodedToken);
	} catch (error) {
		console.log(error);
	}
}

export function* loginSaga(action: LoginRequest) {
	try {
		const response: LoginResponseGenerator = yield call(login, action.payload);
		yield put(loginSuccess(response));
		localStorage.setItem('ecommerce_user_token', response.encodedToken);
		const pathname = `${action.payload.pathname}`;
		action.payload.navigate(pathname);
	} catch (error: any) {
		toast.error(`${error.title}`);
	}
}

export function* authWatcher() {
	yield all([takeLatest(SIGNUP_REQUEST, signupSaga), takeLatest(LOGIN_REQUEST, loginSaga)]);
}
