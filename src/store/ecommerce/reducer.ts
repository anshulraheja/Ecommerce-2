import { Reducer } from 'redux';
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
import { ICategory, IProduct, IProductsState, ProductActions } from './types';

export const ecommerceInitialState: IProductsState = {
	products: [],
	singleProduct: {} as IProduct, //or we can do this - <IProduct>{}
	categories: [],
	singleCategory: <ICategory>{},
	cart: [],
	wishlist: []
};

/**
 * Reducers are pure functions. The reducers form a state tree, starting with the root reducer passed to the redux store.
 * @param state current state
 * @param action action dispatched by user
 * @returns updated state after performing action
 */
export const EcommerceReducer: Reducer<IProductsState, ProductActions> = (
	state = ecommerceInitialState,
	action: ProductActions
) => {
	switch (action.type) {
		case FETCH_PRODUCT_REQUEST:
			return {
				...state
			};
		case FETCH_PRODUCT_SUCCESS:
			return {
				...state,
				products: action.payload
			};
		case FETCH_SINGLE_PRODUCT_REQUEST:
			return {
				...state
			};
		case FETCH_SINGLE_PRODUCT_SUCCESS:
			return {
				...state,
				singleProduct: action.payload
			};
		case FETCH_CATEGORIES_REQUEST:
			return {
				...state
			};
		case FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: action.payload
			};
		case FETCH_SINGLE_CATEGORY_REQUEST:
			return {
				...state
			};
		case FETCH_SINGLE_CATEGORY_SUCCESS:
			return {
				...state,
				singleCategory: action.payload
			};
		case FETCH_CART_REQUEST:
			return {
				...state
			};
		case FETCH_CART_SUCCESS:
			return {
				...state,
				cart: action.payload
			};
		case ADD_TO_CART_REQUEST:
			return {
				...state
			};
		case ADD_TO_CART_SUCCESS:
			return {
				...state,
				cart: action.payload
			};
		case DELETE_FROM_CART_REQUEST:
			return {
				...state
			};
		case DELETE_FROM_CART_SUCCESS:
			return {
				...state,
				cart: action.payload
			};
		case UPDATE_QTY_IN_CART_REQUEST:
			return {
				...state
			};
		case UPDATE_QTY_IN_CART_SUCCESS:
			return {
				...state,
				cart: action.payload
			};
		case FETCH_WISHLIST_REQUEST:
			return {
				...state
			};
		case FETCH_WISHLIST_SUCCESS:
			return {
				...state,
				wishlist: action.payload
			};
		case ADD_TO_WISHLIST_REQUEST:
			return {
				...state
			};
		case ADD_TO_WISHLIST_SUCCESS:
			return {
				...state,
				wishlist: action.payload
			};
		case DELETE_FROM_WISHLIST_REQUEST:
			return {
				...state
			};
		case DELETE_FROM_WISHLIST_SUCCESS:
			return {
				...state,
				wishlist: action.payload
			};

		default:
			return { ...state };
	}
};
