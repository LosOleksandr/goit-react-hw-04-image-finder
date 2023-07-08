import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
// import { AppProvider } from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
  </React.StrictMode>
);
