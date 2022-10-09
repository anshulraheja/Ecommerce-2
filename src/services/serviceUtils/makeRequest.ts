import * as utils from './serviceUtils';

export const makeRequest = (url: string, payload: any, resolve: any, reject: any, method: string) => {
	switch (method) {
		case 'GET':
			return utils
				.get(url)
				.then((response: any) => {
					resolve(response);
				})
				.catch((error: any) => {
					reject(error);
				});
		case 'PUT':
			return utils
				.put(url, payload)
				.then((response: any) => {
					resolve(response);
				})
				.catch((error: any) => {
					reject(error);
				});
		case 'DELETE':
			return utils
				.deleteData(url)
				.then((response: any) => {
					resolve(response);
				})
				.catch((error: any) => {
					reject(error);
				});
		case 'POST':
			return utils
				.post(url, payload)
				.then((response: any) => {
					resolve(response);
				})
				.catch((error: any) => {
					reject(error);
				});
		default:
			return utils
				.get(url)
				.then((response: any) => {
					resolve(response);
				})
				.catch((error: any) => {
					reject(error);
				});
	}
};
