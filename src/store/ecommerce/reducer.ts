import { Reducer } from 'redux';
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
import { ICategory, IProduct, IProductsState, ProductActions } from './types';

export const ecommerceInitialState: IProductsState = {
	products: [],
	singleProduct: {} as IProduct, //or we can do this - <IProduct>{}
	categories: [],
	singleCategory: <ICategory>{}
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
		default:
			return { ...state };
	}
};
