import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from './actionTypes';
import { FetchProductsRequest, FetchProductsSuccess, IProduct } from './types';

export const fetchProductsRequest = (): FetchProductsRequest => ({
  type: FETCH_PRODUCT_REQUEST
});

export const fetchProductsSuccess = (payload: Array<IProduct>): FetchProductsSuccess => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload
});
