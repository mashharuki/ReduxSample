/**
 * Actionを定義するファイル
 */

import { INCREMENT, DECREMENT } from "src/constants/counter";

/**
 * カウンターを増やす関数
 */
export function increment() {
      return {
            type: INCREMENT,
      };
}

/**
 * カウンターを減らす関数
 */
export function decrement() {
      return {
            type: DECREMENT,
      };
}

export type Action = ReturnType<typeof increment> | ReturnType<typeof decrement>;