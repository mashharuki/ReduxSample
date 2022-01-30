/**
 * カウンター用のコンポーネントファイル
 */

import { Action } from "redux";
import { INCREMENT, DECREMENT } from "src/constants/counter";

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
            case INCREMENT: 
                  return {
                        ...state,
                        current: state.current + 1,
                  }
            case DECREMENT: 
                  return {
                        ...state,
                        current: state.current - 1,
                  }
            default:
                  return state;
      }
}

