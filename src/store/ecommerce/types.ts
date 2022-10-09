import {
	ADD_TO_CART_REQUEST,
	ADD_TO_CART_SUCCESS,
	ADD_TO_WISHLIST_REQUEST,
	ADD_TO_WISHLIST_SUCCESS,
	DELETE_FROM_CART_REQUEST,
	DELETE_FROM_CART_SUCCESS,
	DELETE_FROM_WISHLIST_REQUEST,
	DELETE_FROM_WISHLIST_SUCCESS,
	FETCH_CART_REQUEST,
	FETCH_CART_SUCCESS,
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_SINGLE_CATEGORY_REQUEST,
	FETCH_SINGLE_CATEGORY_SUCCESS,
	FETCH_SINGLE_PRODUCT_REQUEST,
	FETCH_SINGLE_PRODUCT_SUCCESS,
	FETCH_WISHLIST_REQUEST,
	FETCH_WISHLIST_SUCCESS,
	UPDATE_QTY_IN_CART_REQUEST,
	UPDATE_QTY_IN_CART_SUCCESS
} from './actionTypes';

export type IProductsState = {
	products: Array<IProduct>;
	singleProduct: IProduct;
	categories: Array<ICategory>;
	singleCategory: ICategory;
	cart: Array<IProduct>;
	wishlist: Array<IProduct>;
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

export type FetchCartRequest = {
	type: typeof FETCH_CART_REQUEST;
};

export type FetchCartSuccess = {
	type: typeof FETCH_CART_SUCCESS;
	payload: Array<IProduct>;
};

export type AddToCartRequest = {
	type: typeof ADD_TO_CART_REQUEST;
	payload: IProduct;
};
export type AddToCartSuccess = {
	type: typeof ADD_TO_CART_SUCCESS;
	payload: Array<IProduct>;
};
export type DeleteFromCartRequest = {
	type: typeof DELETE_FROM_CART_REQUEST;
	payload: string;
};
export type DeleteFromCartSuccess = {
	type: typeof DELETE_FROM_CART_SUCCESS;
	payload: Array<IProduct>;
};
export type UpdateQtyInCartRequest = {
	type: typeof UPDATE_QTY_IN_CART_REQUEST;
	payload: string;
};
export type UpdateQtyInCartSuccess = {
	type: typeof UPDATE_QTY_IN_CART_SUCCESS;
	payload: Array<IProduct>;
};
export type FetchWishlistRequest = {
	type: typeof FETCH_WISHLIST_REQUEST;
};

export type FetchWishlistSuccess = {
	type: typeof FETCH_WISHLIST_SUCCESS;
	payload: Array<IProduct>;
};
export type AddToWishlistRequest = {
	type: typeof ADD_TO_WISHLIST_REQUEST;
	payload: IProduct;
};
export type AddToWishlistSuccess = {
	type: typeof ADD_TO_WISHLIST_SUCCESS;
	payload: Array<IProduct>;
};
export type DeleteFromWishlistRequest = {
	type: typeof DELETE_FROM_WISHLIST_REQUEST;
	payload: string;
};
export type DeleteFromWishlistSuccess = {
	type: typeof DELETE_FROM_WISHLIST_SUCCESS;
	payload: Array<IProduct>;
};
export type ProductActions =
	| FetchProductsRequest
	| FetchProductsSuccess
	| FetchSingleProductRequest
	| FetchSingleProductSuccess
	| FetchCategoriesRequest
	| FetchCategoriesSuccess
	| FetchSingleCategoryRequest
	| FetchSingleCategorySuccess
	| FetchCartRequest
	| FetchCartSuccess
	| AddToCartRequest
	| AddToCartSuccess
	| DeleteFromCartRequest
	| DeleteFromCartSuccess
	| UpdateQtyInCartRequest
	| UpdateQtyInCartSuccess
	| FetchWishlistRequest
	| FetchWishlistSuccess
	| AddToWishlistRequest
	| AddToWishlistSuccess
	| DeleteFromWishlistRequest
	| DeleteFromWishlistSuccess;
