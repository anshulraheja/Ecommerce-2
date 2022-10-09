import { IProduct } from '../../store/ecommerce';
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

export const getCart = () => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommercePrivateUrl}cart`, {}, resolve, reject, 'GET');
	});
};

export const addToCart = (product: IProduct) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommercePrivateUrl}cart`, { product }, resolve, reject, 'POST');
	});
};

export const deleteFromCart = (id: string) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommercePrivateUrl}cart/${id}`, {}, resolve, reject, 'DELETE');
	});
};

export const updateQtyInCart = (payload: string) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommercePrivateUrl}cart`, {}, resolve, reject, 'POST');
	});
};

export const getWishlist = () => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommercePrivateUrl}wishlist`, {}, resolve, reject, 'GET');
	});
};

export const addToWishlist = (product: IProduct) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommercePrivateUrl}wishlist`, { product }, resolve, reject, 'POST');
	});
};

export const deleteFromWishlist = (id: string) => {
	return new Promise((resolve, reject) => {
		makeRequest(`${serviceUrl.ecommercePrivateUrl}wishlist/${id}`, {}, resolve, reject, 'DELETE');
	});
};
