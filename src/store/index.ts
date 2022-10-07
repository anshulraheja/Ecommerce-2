import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import reduxSaga from 'redux-saga';
import { ecommerceInitialState, EcommerceReducer } from './ecommerce/reducer';
import { rootSaga } from './sagas';

/**
 * The term applyMiddleware(sagaMiddleware) returns a store enhancer.
 * Using the utility function applyMiddleware we can combine multiple middleware and return a single store enhancer.
 * The createStore accepts only a single store enhancer, thus the need for applyMiddleware.
 * We would use an array of middleware for multiple middleware.
 */
export const initialState = {
    product: ecommerceInitialState
  },
  sagaMiddleware = reduxSaga(),
  //combineReducers to combine all the reducers of the app - for now we have one
  rootReducer = combineReducers({ EcommerceReducer }),
  // redux sagas is a middleware that we apply to the store
  store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

/**
 * run() accepts a generator and kicks of the process that runs in the background
 * Also, note that this must run after applying the saga middleware.
 */
sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
