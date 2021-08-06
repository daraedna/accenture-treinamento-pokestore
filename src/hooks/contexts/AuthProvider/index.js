import React, { createContext, useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [loading, setLoading] = useState(false);

  const SignIn = useCallback(
    async ({ login, password }) => {
      setError('');
      setLoading(true);

      try {
        const { data } = await api.post(`/login`, { email: login, password })
        SetToken(data);

      } catch (err) {
        if (err.response) {
          setError(err.response.data);
        }
      } finally {
        setLoading(false);
      }
    }, []);

  const SignOut = useCallback(
    () => {
      sessionStorage.removeItem('@Pokestore_userId');

      sessionStorage.removeItem('@Pokestore_login');
      setAuth('');
    }, []);

  const SetToken = useCallback(
    (data) => {
      sessionStorage.setItem('@Pokestore_userId', data.user.id);
      sessionStorage.setItem('@Pokestore_login', data.accessToken);
      setAuth(data.accessToken);
      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
    }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        error,
        loading,
        SignIn,
        SignOut,
        SetToken
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