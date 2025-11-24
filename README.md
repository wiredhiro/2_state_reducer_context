# useReducer + useContext Counter App

このアプリは **React の useReducer と useContext を組み合わせた状態管理の学習用サンプル** です。  
グローバル状態を Context API で共有し、Reducer を使ってカウンターの値を更新します。

## 🚀 機能概要

- グローバルなカウンター値を管理
- `increment` / `decrement` ボタンで値を更新
- `useReducer` による状態遷移
- `useContext` によるコンポーネント間の状態共有

---

## 📁 ディレクトリ構成

```
src/
├─ CounterContext.tsx     # Context & Reducer（グローバル状態）
├─ CounterDisplay.tsx     # カウンター表示
├─ CounterControls.tsx    # ボタン操作（＋ / ー）
├─ App.tsx                # Provider 組み込み
└─ index.tsx              # エントリーポイント
```

---

## 🧠 技術ポイント

### 1. useReducer で状態管理

```
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

### 2. useContext で状態共有

```
export const CounterContext = createContext(null);
```

Provider の中で `useReducer` の結果を渡して、  
Display と Control の両方から参照できるようにします。

---

## ▶ 実行方法

```
npm install
npm start
```

- ローカル: http://localhost:3000
- ホットリロード対応

---

## 🎯 目的

React の状態管理（useReducer と useContext の組み合わせ）の基本を  
最小構成でしっかり理解するためのデモアプリです。

```

```
