import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from '../../../services/api/';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem('@Pokestore_login');

    if (token) {
      return token;
    }
    return '';
  });

  const [error, setError] = useState('');

  const SignIn = useCallback(
    async ({ login, password }) => {
      setError('');

      try {
        if (!login || !password) {
          setError('Login e senha inválidos');
          return;
        }
        const { data } = await api.post(`/login`, { email: login, password })

        sessionStorage.setItem('@Pokestore_userId', data.user.id);
        sessionStorage.setItem('@Pokestore_login', data.accessToken);
        setAuth(data.accessToken);
        api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

      } catch (err) {
        setError(err.response.data);
      }
    }, []);

  const SignOut = useCallback(
    () => {
      sessionStorage.removeItem('@Pokestore_userId');

      sessionStorage.removeItem('@Pokestore_login');
      setAuth('');
    }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        error,
        SignIn,
        SignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };