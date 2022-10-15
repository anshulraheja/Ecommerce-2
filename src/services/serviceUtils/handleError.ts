import { COMMON_ERROR, DANGER } from './serviceConstant';

export const cleanUpAndSignOut = () => {
	localStorage.clear();
	window.location.href = '/login';
};

export default (error: any) => {
	const { response } = error;
	if (response) {
		let obj = {};
		switch (response?.status) {
			case 500:
				obj = {
					color: DANGER,
					title: response?.data?.errors[0] || 'There was error in processing request.Please try again later',
					flag: true
				};
				break;
			case 400:
				obj = {
					color: DANGER,
					title: response?.data?.errors[0] || 'Bad Request',
					flag: true
				};
				break;
			case 404:
				obj = {
					title: response?.data?.errors[0] || 'Resource You are trying to access is not available',
					color: DANGER,
					flag: true
				};
				break;
			case 409:
				obj = {
					title: response?.data?.errors[0] || 'The request could not be processed because of conflict in the request',
					color: DANGER,
					flag: true
				};
				break;
			case 401:
				obj = {
					color: DANGER,
					title: response?.data?.errors[0] || 'You are unauthorized to access this data',
					flag: true
				};
				// cleanUpAndSignOut();
				break;
			default:
				obj = {
					color: DANGER,
					title: COMMON_ERROR,
					flag: true
				};
		}
		return obj;
	}
	return null;
};
