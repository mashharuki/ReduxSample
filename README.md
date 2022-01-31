# ReduxSample
Reduxを学習するためのサンプルリポジトリです。

## Reduxとは
   Reduxとは、アプリケーションの状態を管理するためのライブラリーです。  
   モバイルアプリなどユーザーごとに状態を管理することが必要なアプリケーションには非常に有効なライブラリである。

## Recucerとは
   状態を更新(関する)関数のこと。stateを操作する。

## Ducksとは
   ActionType、Actions、Reducerは密結合してるもの同士なので、1つのファイルで構成し、Moduleとして定義するデザインパターンのこと。  
   action、reducer、typeを一つのファイルに格納することで全体を見通しやすくする。

## Redux middleware
   Reduxでは、middlewareによって実現する。

## dispatchメソッド
   状態を更新するためのインターフェース

### 参考サイト
   1. <a href="https://open8tech.hatenablog.com/entry/2019/12/26/111353">Ducks解説サイト</a>