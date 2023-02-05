import React from 'react';
import ContextProvider from './context/ContextProvider';
import Router from './routes';
import { MuiThemeProvider } from './common/utils/theme';

function App() {
  return (
    <MuiThemeProvider>
      <ContextProvider>
        <div className="App">
          <Router />
        </div>
      </ContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
