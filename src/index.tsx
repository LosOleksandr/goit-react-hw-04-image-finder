import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
// import { AppProvider } from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Ysabeau+Infant:wght@400;600;700&display=swap');
        ${emotionReset}
        body {
          font-family: 'Ysabeau Infant', sans-serif;
          width: 100%;
          height: 100%;
          background-color: #6ba3df;
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: rgb(0, 0, 0, 0.5);
          }
          ::-webkit-scrollbar-thumb {
            background: rgb(160, 192, 222);
          }
        }
      `}
    />
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
  </React.StrictMode>
);
