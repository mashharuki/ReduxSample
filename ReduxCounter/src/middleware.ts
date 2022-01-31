/**
 * Redux middleware用のファイル
 */

import { Middleware } from "redux";

export const functionExecutor: Middleware = store => next => action => {
      if (typeof action === 'function') {
            // dispatchとgetStateの関数を渡して実行する。
            return action(store.dispatch, store.getState);
      }
      return next(action);
}