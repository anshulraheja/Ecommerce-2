import { Reducer } from 'redux';
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from './actionTypes';
import { ProductActions, IProductsState } from './types';

export const ecommerceInitialState: IProductsState = {
  products: []
};

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
    default:
      return { ...state };
  }
};
