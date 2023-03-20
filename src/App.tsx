import React from 'react';
import ContextProvider from './context/ContextProvider';
import Router from './routes';
import { MuiThemeProvider } from './common/utils/theme';
import { Header } from './components/Parts';

function App() {
  return (
    <MuiThemeProvider>
      <ContextProvider>
        <div className="App">
          {/* <Header /> */}
          <Router />
        </div>
      </ContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
