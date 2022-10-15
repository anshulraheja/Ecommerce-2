import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	addToCart,
	addToWishlist,
	deleteFromCart,
	deleteFromWishlist,
	getCart,
	getCategories,
	getProducts,
	getSingleCategory,
	getSingleProduct,
	getWishlist,
	updateQtyInCart
} from '../../services/product';
import {
	addToCartSuccess,
	addToWishlistSuccess,
	deleteFromCartSuccess,
	deleteFromWishlistSuccess,
	fetchCartSuccess,
	fetchCategoriesSuccess,
	fetchProductsSuccess,
	fetchSingleCategorySuccess,
	fetchSingleProductSuccess,
	fetchWishlistSuccess,
	updateQtyInCartSuccess
} from './actions';
import {
	ADD_TO_CART_REQUEST,
	ADD_TO_WISHLIST_REQUEST,
	DELETE_FROM_CART_REQUEST,
	DELETE_FROM_WISHLIST_REQUEST,
	FETCH_CART_REQUEST,
	FETCH_CATEGORIES_REQUEST,
	FETCH_PRODUCT_REQUEST,
	FETCH_SINGLE_CATEGORY_REQUEST,
	FETCH_SINGLE_PRODUCT_REQUEST,
	FETCH_WISHLIST_REQUEST,
	UPDATE_QTY_IN_CART_REQUEST
} from './actionTypes';
import {
	AddToCartRequest,
	AddToWishlistRequest,
	DeleteFromCartRequest,
	DeleteFromWishlistRequest,
	FetchSingleCategoryRequest,
	FetchSingleProductRequest,
	ICategory,
	IProduct,
	UpdateQtyInCartRequest
} from './types';

export interface ResponseGenerator {
	products: Array<IProduct>;
	product: IProduct;
	categories: Array<ICategory>;
	category: ICategory;
	cart: Array<IProduct>;
	wishlist: Array<IProduct>;
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

export function* fetchCartSaga() {
	try {
		const response: ResponseGenerator = yield call(getCart);
		yield put(fetchCartSuccess(response.cart));
	} catch (error) {
		console.log(error);
	}
}
export function* addToCartSaga(action: AddToCartRequest) {
	try {
		const response: ResponseGenerator = yield call(addToCart, action.payload);
		yield put(addToCartSuccess(response.cart));
	} catch (error) {
		console.log(error);
	}
}
export function* deleteFromCartSaga(action: DeleteFromCartRequest) {
	try {
		const response: ResponseGenerator = yield call(deleteFromCart, action.payload);
		yield put(deleteFromCartSuccess(response.cart));
	} catch (error) {
		console.log(error);
	}
}
export function* updateQtyInCartSaga(action: UpdateQtyInCartRequest) {
	try {
		const response: ResponseGenerator = yield call(updateQtyInCart, action.payload);
		yield put(updateQtyInCartSuccess(response.cart));
	} catch (error) {
		console.log(error);
	}
}
export function* fetchWishlistSaga() {
	try {
		const response: ResponseGenerator = yield call(getWishlist);
		yield put(fetchWishlistSuccess(response.wishlist));
	} catch (error) {
		console.log(error);
	}
}
export function* addToWishlistSaga(action: AddToWishlistRequest) {
	try {
		const response: ResponseGenerator = yield call(addToWishlist, action.payload);
		yield put(addToWishlistSuccess(response.wishlist));
	} catch (error) {
		console.log(error);
	}
}
export function* deleteFromWishlistSaga(action: DeleteFromWishlistRequest) {
	try {
		const response: ResponseGenerator = yield call(deleteFromWishlist, action.payload);
		yield put(deleteFromWishlistSuccess(response.wishlist));
	} catch (error) {
		console.log(error);
	}
}

export function* productWatcher() {
	yield all([
		takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga),
		takeLatest(FETCH_SINGLE_PRODUCT_REQUEST, fetchSingleProductSaga),
		takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga),
		takeLatest(FETCH_SINGLE_CATEGORY_REQUEST, fetchSingleCategorySaga),
		takeLatest(FETCH_CART_REQUEST, fetchCartSaga),
		takeLatest(ADD_TO_CART_REQUEST, addToCartSaga),
		takeLatest(DELETE_FROM_CART_REQUEST, deleteFromCartSaga),
		takeLatest(UPDATE_QTY_IN_CART_REQUEST, updateQtyInCartSaga),
		takeLatest(FETCH_WISHLIST_REQUEST, fetchWishlistSaga),
		takeLatest(ADD_TO_WISHLIST_REQUEST, addToWishlistSaga),
		takeLatest(DELETE_FROM_WISHLIST_REQUEST, deleteFromWishlistSaga)
	]);
}
