import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCategories, getProducts, getSingleCategory, getSingleProduct } from '../../services/product';
import { fetchCategoriesSuccess, fetchProductsSuccess, fetchSingleCategorySuccess, fetchSingleProductSuccess } from './actions';
import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_PRODUCT_REQUEST,
	FETCH_SINGLE_CATEGORY_REQUEST,
	FETCH_SINGLE_PRODUCT_REQUEST
} from './actionTypes';
import { FetchSingleCategoryRequest, FetchSingleProductRequest, ICategory, IProduct } from './types';

export interface ResponseGenerator {
	products: Array<IProduct>;
	product: IProduct;
	categories: Array<ICategory>;
	category: ICategory;
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

export function* fetchCategoriesSaga() {
	try {
		const response: ResponseGenerator = yield call(getCategories);
		yield put(fetchCategoriesSuccess(response.categories));
	} catch (error) {
		console.log(error);
	}
}

export function* fetchSingleCategorySaga(action: FetchSingleCategoryRequest) {
	try {
		const response: ResponseGenerator = yield call(getSingleCategory, action.payload);
		yield put(fetchSingleCategorySuccess(response.category));
	} catch (error) {
		console.log(error);
	}
}

export function* productWatcher() {
	yield all([
		takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga),
		takeLatest(FETCH_SINGLE_PRODUCT_REQUEST, fetchSingleProductSaga),
		takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga),
		takeLatest(FETCH_SINGLE_CATEGORY_REQUEST, fetchSingleCategorySaga)
	]);
}
