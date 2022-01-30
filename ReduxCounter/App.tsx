/**
 * Appコンポーネントファイル
 */

import React from 'react';
import { Provider } from 'react-redux';
import ConnectedCounter from 'src/containers/Counter';
import store from 'src/store';

/**
 * Appコンポーネント
 */
function App() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}

export default App;
