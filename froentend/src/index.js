import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EthereumProvider } from './contexts/EthereumContext';

ReactDOM.render(
  <EthereumProvider>
    <App />
  </EthereumProvider>,
  document.getElementById('root')
);
