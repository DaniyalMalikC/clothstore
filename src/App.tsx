import React from 'react';
import ContextProvider from './context/ContextProvider';
import Router from './routes';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router />
      </div>
    </ContextProvider>
  );
}

export default App;
