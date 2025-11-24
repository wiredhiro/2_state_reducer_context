// CounterDisplay.tsx
import React from 'react';
import { useCounter } from './CounterContext';

const CounterDisplay: React.FC = () => {
  const { state } = useCounter();
  return <h1>Count: {state.count}</h1>;
};

export default CounterDisplay;
