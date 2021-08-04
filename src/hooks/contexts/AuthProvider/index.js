import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from '../../../services/api/';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 0,
    login: "",
    name: "",
    last_name: "",
    city: "",
    password: "",
  });

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

        sessionStorage.setItem('@Pokestore_login', data.accessToken);
        setAuth(data.accessToken);
        api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

        setUser({
          id: data[0].id,
          login: data[0].login,
          name: data[0].name,
          last_name: data[0].last_name,
          city: data[0].city,
          password: data[0].password,
        })

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
        user
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