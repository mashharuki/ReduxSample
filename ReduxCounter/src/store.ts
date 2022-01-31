/**
 * 状態を格納するstoreファイル
 */

import { createStore, applyMiddleware } from "redux";
import counterReducer, { createInitialState } from './modules/counter';

const store = createStore(counterReducer, createInitialState());

export default store;