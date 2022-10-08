import { serviceUrl } from '../serviceUrl';
import { makeRequest } from '../serviceUtils/makeRequest';

export const getProducts = () => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommerceUrl}products`, {}, resolve, reject, 'GET');
	});
};

export const getSingleProduct = (id: string) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommerceUrl}products/${id}`, {}, resolve, reject, 'GET');
	});
};

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommerceUrl}categories`, {}, resolve, reject, 'GET');
	});
};
export const getSingleCategory = (id: string) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommerceUrl}categories/${id}`, {}, resolve, reject, 'GET');
	});
};
