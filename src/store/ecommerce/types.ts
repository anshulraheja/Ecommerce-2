import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from './actionTypes';

export type IProductsState = {
  products: Array<IProduct>;
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

export type ProductActions = FetchProductsRequest | FetchProductsSuccess;
