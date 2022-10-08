import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_SINGLE_CATEGORY_REQUEST,
	FETCH_SINGLE_CATEGORY_SUCCESS,
	FETCH_SINGLE_PRODUCT_REQUEST,
	FETCH_SINGLE_PRODUCT_SUCCESS
} from './actionTypes';

export type IProductsState = {
	products: Array<IProduct>;
	singleProduct: IProduct;
	categories: Array<ICategory>;
	singleCategory: ICategory;
};

export type FetchProductsRequest = {
	type: typeof FETCH_PRODUCT_REQUEST;
};

export type FetchProductsSuccess = {
	type: typeof FETCH_PRODUCT_SUCCESS;
	payload: Array<IProduct>;
};

export type IProduct = {
	_id: string;
	title: string;
	author: string;
	price: string;
	categoryName: string;
	id: string;
};

export type FetchSingleProductRequest = {
	type: typeof FETCH_SINGLE_PRODUCT_REQUEST;
	payload: string;
};

export type FetchSingleProductSuccess = {
	type: typeof FETCH_SINGLE_PRODUCT_SUCCESS;
	payload: IProduct;
};

export type FetchCategoriesRequest = {
	type: typeof FETCH_CATEGORIES_REQUEST;
};

export type FetchCategoriesSuccess = {
	type: typeof FETCH_CATEGORIES_SUCCESS;
	payload: Array<ICategory>;
};

export type ICategory = {
	_id: string;
	categoryName: string;
	description: string;
};
export type FetchSingleCategoryRequest = {
	type: typeof FETCH_SINGLE_CATEGORY_REQUEST;
	payload: string;
};

export type FetchSingleCategorySuccess = {
	type: typeof FETCH_SINGLE_CATEGORY_SUCCESS;
	payload: ICategory;
};

export type ProductActions =
	| FetchProductsRequest
	| FetchProductsSuccess
	| FetchSingleProductRequest
	| FetchSingleProductSuccess
	| FetchCategoriesRequest
	| FetchCategoriesSuccess
	| FetchSingleCategoryRequest
	| FetchSingleCategorySuccess;
