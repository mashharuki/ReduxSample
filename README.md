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

## thunk
   関数に別の関数を注入をすること。

## Firebaseとは
   Google社が提供しているmBaaS(mobile Backend as a Service)のこと。  
   モバイルアプリに必要なバックエンド側の機能をあらかじめ実装しておくことで、モバイルアプリ側の開発負荷を下げることができる。

## E2Eテストとは
   End to Endの略で、ユーザーがアプリを実際に操作して確認する内容をシステムによって自動的に確認するためのテストのこと。  

## Detox
   E2Eテストのフレームワーク

### 参考サイト
   1. <a href="https://open8tech.hatenablog.com/entry/2019/12/26/111353">Ducks解説サイト</a>