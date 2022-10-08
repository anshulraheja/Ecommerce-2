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
import {
	FetchCategoriesRequest,
	FetchCategoriesSuccess,
	FetchProductsRequest,
	FetchProductsSuccess,
	FetchSingleCategoryRequest,
	FetchSingleCategorySuccess,
	FetchSingleProductRequest,
	FetchSingleProductSuccess,
	ICategory,
	IProduct
} from './types';

/**
 * Actions can update state
 * When you dispatch an action creator it passes the action object to the root reducer
 * The action object is passed through the entire state tree and any reducers that process the action type consume it
 * When dispatching an action with dispatch(action), the dispatch function will call reducer(action, state), modify redux internal currentState then call each listener()
 * @returns
 */
export const fetchProductsRequest = (): FetchProductsRequest => ({
	type: FETCH_PRODUCT_REQUEST
});

export const fetchProductsSuccess = (payload: Array<IProduct>): FetchProductsSuccess => ({
	type: FETCH_PRODUCT_SUCCESS,
	payload
});

export const fetchSingleProductRequest = (payload: string): FetchSingleProductRequest => ({
	type: FETCH_SINGLE_PRODUCT_REQUEST,
	payload
});

export const fetchSingleProductSuccess = (payload: IProduct): FetchSingleProductSuccess => ({
	type: FETCH_SINGLE_PRODUCT_SUCCESS,
	payload
});

export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
	type: FETCH_CATEGORIES_REQUEST
});

export const fetchCategoriesSuccess = (payload: Array<ICategory>): FetchCategoriesSuccess => ({
	type: FETCH_CATEGORIES_SUCCESS,
	payload
});

export const fetchSingleCategoryRequest = (payload: string): FetchSingleCategoryRequest => ({
	type: FETCH_SINGLE_CATEGORY_REQUEST,
	payload
});

export const fetchSingleCategorySuccess = (payload: ICategory): FetchSingleCategorySuccess => ({
	type: FETCH_SINGLE_CATEGORY_SUCCESS,
	payload
});
