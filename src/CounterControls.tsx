// CounterControls.tsx
import React from 'react';
import { useCounter } from './CounterContext';

const CounterControls: React.FC = () => {
  const { dispatch } = useCounter();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default CounterControls;
