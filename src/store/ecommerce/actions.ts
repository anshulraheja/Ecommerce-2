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
import {
	AddToCartRequest,
	AddToCartSuccess,
	AddToWishlistRequest,
	AddToWishlistSuccess,
	DeleteFromCartRequest,
	DeleteFromCartSuccess,
	DeleteFromWishlistRequest,
	DeleteFromWishlistSuccess,
	FetchCartRequest,
	FetchCartSuccess,
	FetchCategoriesRequest,
	FetchCategoriesSuccess,
	FetchProductsRequest,
	FetchProductsSuccess,
	FetchSingleCategoryRequest,
	FetchSingleCategorySuccess,
	FetchSingleProductRequest,
	FetchSingleProductSuccess,
	FetchWishlistRequest,
	FetchWishlistSuccess,
	ICategory,
	IProduct,
	UpdateQtyInCartRequest,
	UpdateQtyInCartSuccess
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

export const fetchCartRequest = (): FetchCartRequest => ({
	type: FETCH_CART_REQUEST
});

export const fetchCartSuccess = (payload: Array<IProduct>): FetchCartSuccess => ({
	type: FETCH_CART_SUCCESS,
	payload
});

export const addToCartRequest = (payload: IProduct): AddToCartRequest => ({
	type: ADD_TO_CART_REQUEST,
	payload
});
export const addToCartSuccess = (payload: Array<IProduct>): AddToCartSuccess => ({
	type: ADD_TO_CART_SUCCESS,
	payload
});
export const deleteFromCartRequest = (payload: string): DeleteFromCartRequest => ({
	type: DELETE_FROM_CART_REQUEST,
	payload
});
export const deleteFromCartSuccess = (payload: Array<IProduct>): DeleteFromCartSuccess => ({
	type: DELETE_FROM_CART_SUCCESS,
	payload
});
export const updateQtyInCartRequest = (payload: string): UpdateQtyInCartRequest => ({
	type: UPDATE_QTY_IN_CART_REQUEST,
	payload
});
export const updateQtyInCartSuccess = (payload: Array<IProduct>): UpdateQtyInCartSuccess => ({
	type: UPDATE_QTY_IN_CART_SUCCESS,
	payload
});
export const fetchWishlistRequest = (): FetchWishlistRequest => ({
	type: FETCH_WISHLIST_REQUEST
});

export const fetchWishlistSuccess = (payload: Array<IProduct>): FetchWishlistSuccess => ({
	type: FETCH_WISHLIST_SUCCESS,
	payload
});
export const addToWishlistRequest = (payload: IProduct): AddToWishlistRequest => ({
	type: ADD_TO_WISHLIST_REQUEST,
	payload
});
export const addToWishlistSuccess = (payload: Array<IProduct>): AddToWishlistSuccess => ({
	type: ADD_TO_WISHLIST_SUCCESS,
	payload
});
export const deleteFromWishlistRequest = (payload: string): DeleteFromWishlistRequest => ({
	type: DELETE_FROM_WISHLIST_REQUEST,
	payload
});
export const deleteFromWishlistSuccess = (payload: Array<IProduct>): DeleteFromWishlistSuccess => ({
	type: DELETE_FROM_WISHLIST_SUCCESS,
	payload
});
