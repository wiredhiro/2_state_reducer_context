// CounterContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// StateとActionの型定義
type State = { count: number };
type Action = { type: 'increment' | 'decrement' | 'reset' };

// 初期状態
const initialState: State = { count: 0 };

// Reducer関数
// コンポーネントの状態管理に使われる関数
// 役割は、「状態（state）」と「アクション（action）」を受け取って、新しい状態を返すこと
function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

// Contextの型定義
type CounterContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

// Contextを作成
// コンポーネントツリー全体に渡したいデータを共有できる仕組み
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Contextプロバイダー
// ReactのContext APIの一部で、あるデータをコンポーネントツリー全体に渡す役割をするコンポーネント
// Context.Providerを使って、ツリー内の全ての子孫コンポーネントにデータを共有できるようにする
export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Contextを使用するカスタムフック
export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error('useCounter must be used within a CounterProvider');
  return context;
};
