import { useState } from 'react';
import './App.css';
import Parent from './components/Parent';
import CounterContext from './CounterContext';

function App() {
  let counterState = useState(0);
  return (
    <CounterContext.Provider value={counterState}>
      <div className="App">
        <Parent name='Rao HAssan' />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
