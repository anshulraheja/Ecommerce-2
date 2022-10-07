import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getProducts } from '../../services/product';
import { fetchProductsSuccess } from './actions';
import { FETCH_PRODUCT_REQUEST } from './actionTypes';
import { IProduct } from './types';

export interface ResponseGenerator {
  products: Array<IProduct>;
}

export function* fetchProductSaga() {
  try {
    //call the api
    const response: ResponseGenerator = yield call(getProducts);
    // call the success action with data
    yield put(fetchProductsSuccess(response.products));
  } catch (error) {
    // call the error action with data
    console.log(error);
  }
}

export function* productWatcher() {
  yield all([takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga)]);
}
