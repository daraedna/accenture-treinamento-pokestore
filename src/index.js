import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './hooks/contexts/AuthProvider';
import { CartProvider } from './hooks/contexts/CartProvider';
import { ProfileProvider } from './hooks/contexts/ProfileProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
