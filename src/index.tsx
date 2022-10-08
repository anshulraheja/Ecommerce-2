import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { makeServer } from './server';
import { store } from './store';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* pass the redux store into the provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
