import { all } from 'redux-saga/effects';
import { productWatcher } from './ecommerce';
/**
 * Sagas are just generator functions. Unlike normal functions, which run to completion, generators can pause their executions for async statements using the yield keyword.
 */
export function* rootSaga(): Generator {
  yield all([productWatcher()]);
}
