/**
 * ユーザー一覧用のDuck modulesファイル
 */

import { Dispatch } from "redux";

//インターフェース
interface User {
      id: number;
      name: String;
}

/**
 * 初期状態生成用関数
 */
export function createInitialState(): User[] {
      return [];
}

// 定数の定義
const SET_USERS = 'users/set' as const;

/**
 * ユーザー情報登録用の関数
 */
export function setUsers(users: User[]) {
      return {
            type: SET_USERS,
            payload: {
                  users,
            },
      };
}

/**
 * retrieveUsers関数
 */
export async function retrieveUsers(dispatch: Dispatch) {
      // API経由でレスポンスを経由
      const response = await fetch('https://example.com/api/users');
      const users = await response.json();
      dispatch(setUsers(users));
}

type Action = ReturnType<typeof setUsers>;

/**
 * reducer関数
 */
export default function reducer(state = createInitialState(), action: Action) {
      switch(action.type) {
            case SET_USERS:
                  return action.payload.users;
            default:
                  return state;
      }
}
