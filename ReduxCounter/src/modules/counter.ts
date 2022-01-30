/**
 * カウンター用のコンポーネントファイル
 */

/**
 * 初期状態を表す関数
 */
export function createInitialState() {
      return {
            current: 0,
      };
} 

export type State = ReturnType<typeof createInitialState>;
// 定数の定義
export const INCREMENT = 'myapp/counter/increment' as const;
export const DECREMENT = 'myapp/counter/decrement' as const;

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

// Actionの定義
type Action = ReturnType<typeof increment> | ReturnType<typeof decrement>;

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

