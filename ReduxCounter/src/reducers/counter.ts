/**
 * カウンター用のコンポーネントファイル
 */

import { Action } from "redux";

/**
 * 初期状態を表す関数
 */
export function createInitialState() {
      return {
            current: 0,
      };
} 

export type State = ReturnType<typeof createInitialState>;

/**
 * reduxのベース
 */
export default function reducer(state = createInitialState(), action: Action) {
      switch (action.type) {
            default:
                  return state;
      }
}

