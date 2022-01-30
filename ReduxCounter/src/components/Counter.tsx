/**
 * Counterコンポーネントファイル
 */

import React from "react";
import { Button, Text, View } from "react-native";
import styles  from './common/StyleSheet';

//引数用のインターフェースを定義する。
interface Props {
      // カウンター
      count: number;
      // アクション
      actions: {
            increment: () => void;
            decrement: () => void;
      };
}

/**
 * Counterコンポーネント
 */
export default function Counter(props: Props) {
      return (
            <View style={styles.container}>
                  <Text style={styles.counter}>{props.count}</Text>
                  <Button onPress={props.actions.increment} title="increment" />
                  <Button onPress={props.actions.decrement} title="decrement" />
            </View>
      );
}