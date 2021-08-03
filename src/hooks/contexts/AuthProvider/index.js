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
        const { data } = await api.get(`/users?login=${login}`)

        if (data.leght === 0) {
          setError('Login e senha inválidos');
          return;
        }

        if (data[0].password !== password) {
          setError('Login e senha inválidos');
          return;
        }

        sessionStorage.setItem('@Pokestore_login', data[0].access_token);
        setAuth(data[0].access_token);
        api.defaults.headers.Authorization = `Bearer ${data[0].access_token}`;

        setUser({
          id: data[0].id,
          login: data[0].login,
          name: data[0].name,
          last_name: data[0].last_name,
          city: data[0].city,
          password: data[0].password,
        })

      } catch (err) {
        setError('Login e/ou senha inválidos');
      }
    }, []);

  const SignOut = useCallback(
    () => {
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