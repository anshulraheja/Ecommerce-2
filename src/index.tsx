import { makeServer } from './server';
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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
