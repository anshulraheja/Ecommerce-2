import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getProducts, getSingleProduct } from '../../services/product';
import { fetchProductsSuccess, fetchSingleProductSuccess } from './actions';
import { FETCH_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_REQUEST } from './actionTypes';
import { FetchSingleProductRequest, IProduct } from './types';

export interface ResponseGenerator {
  products: Array<IProduct>;
  product: IProduct;
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

export function* fetchSingleProductSaga(action: FetchSingleProductRequest) {
  try {
    const response: ResponseGenerator = yield call(getSingleProduct, action.payload);
    yield put(fetchSingleProductSuccess(response.product));
  } catch (error) {
    console.log(error);
  }
}

export function* productWatcher() {
  yield all([
    takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga),
    takeLatest(FETCH_SINGLE_PRODUCT_REQUEST, fetchSingleProductSaga)
  ]);
}
