import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS
} from './actionTypes';

export type IProductsState = {
  products: Array<IProduct>;
  singleProduct: IProduct;
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

export type ProductActions = FetchProductsRequest | FetchProductsSuccess | FetchSingleProductRequest | FetchSingleProductSuccess;
