// App.tsx
import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';

const App: React.FC = () => {
  return (
    <CounterProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
};

export default App;
