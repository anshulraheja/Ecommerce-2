import { Reducer } from 'redux';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS
} from './actionTypes';
import { IProduct, IProductsState, ProductActions } from './types';

export const ecommerceInitialState: IProductsState = {
  products: [],
  singleProduct: {} as IProduct //or we can do this - <IProduct>{}
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
    default:
      return { ...state };
  }
};
