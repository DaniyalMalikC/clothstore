import React from 'react';
import ContextProvider from './context/ContextProvider';
import MainRouter from './routes';
import { MuiThemeProvider } from './common/utils/theme';

function App() {
  return (
    <MuiThemeProvider>
      <ContextProvider>
        <div className="App">
          <MainRouter />
        </div>
      </ContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
