/**
 * 状態を格納するstoreファイル
 */

import { createStore } from "redux";
import counterReducer, { createInitialState } from './modules/counter';

const store = createStore(counterReducer, createInitialState());

export default store;