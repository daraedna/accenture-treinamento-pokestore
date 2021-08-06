import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { api } from '../../../services/api';

const UserContext = createContext({});

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    id: 0,
    email: "",
    name: "",
    city: "",
    password: "",
  });

  const [loggedUserId, setLoggedUserId] = useState(0);

  const [error, setError] = useState('');

  useEffect(() => {
    getLoggedUserId();
  }, [])

  useEffect(() => {
    getProfile(loggedUserId);
  }, [loggedUserId])

  const getLoggedUserId = () => {
    const storagedUserId = sessionStorage.getItem('@Pokestore_userId');

    const userId = JSON.parse(storagedUserId);

    userId ? setLoggedUserId(userId) : setLoggedUserId(0);
  }

  const getProfile = useCallback(
    async (id) => {
      try {
        if (id > 0) {
          const { data } = await api.get(`/users/${id}`);
          setProfile({
            id: data.id,
            email: data.email,
            name: data.name,
            city: data.city,
            password: data.password,
          })
        }
      } catch (err) {
        setError("Erro ao adqirir as informações do usuário.")
      }
    }, []);

  const postProfile = useCallback(
    async ({ name, email, password, city }) => {
      try {
        await api.post('/users', {
          name,
          email,
          password,
          city,
        })
      } catch (err) {
        setError("Erro ao cadastrar usuário usuário.")
      }
    }, []);

  const putProfile = useCallback(
    async (id, email, name, city, password) => {
      try {
        await api.put(`/users/${id}`, {
          email,
          name,
          city,
          password,
        })
      } catch (err) {
        setError("Erro ao editar usuário.")
      }
    }, []);

  const deleteProfile = useCallback(
    async ({ id }) => {
      try {
        await api.delete(`/users/${id}`)
      } catch (err) {
        setError("Erro ao deletar usuário.")
      }
    }, []);

  return (
    <UserContext.Provider
      value={{
        profile,
        loggedUserId,
        getProfile,
        putProfile,
        postProfile,
        deleteProfile,
        error
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useProfile() {
  return useContext(UserContext);
}

export { ProfileProvider, useProfile };