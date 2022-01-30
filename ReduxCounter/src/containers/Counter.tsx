/**
 * ReduxとReactを繋ぐためのコンポーネント
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "src/reducers/counter";
import { increment, decrement } from "src/actions/counter";
import Counter from "../components/Counter";

/**
 * ConnectedCounterコンポーネント
 */ 
function ConnectedCounter() {
      const count = useSelector((state: State) => state.current);
      const dispatch = useDispatch();
      // アクションの定義
      const actions = React.useMemo(() => ({
            increment() {
                  dispatch(increment());
            },
            decrement() {
                  dispatch(decrement());
            },
      }), [dispatch],);

      return <Counter count={count} actions={actions} />;
}

export default ConnectedCounter;