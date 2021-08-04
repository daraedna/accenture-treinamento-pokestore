import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from '../../../services/api';

const UserContext = createContext({});

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    id: 0,
    login: "",
    name: "",
    last_name: "",
    city: "",
    password: "",
  });
  const [error, setError] = useState('');

  const getProfile = useCallback(
    async (id) => {
      try {
        if (id > 0) {
          const { data } = await api.get(`/users/${id}`);
          setProfile({
            id: data.id,
            login: data.login,
            name: data.name,
            last_name: data.last_name,
            city: data.city,
            password: data.password,
          })
        }
      } catch (err) {
        setError("Erro ao adqirir as informações do usuário.")
      }
    }, []);

  const postProfile = useCallback(
    async ({ login, name, last_name, city, password }) => {
      try {
        await api.post('/users', {
          login,
          name,
          last_name,
          city,
          password
        })
      } catch (err) {
        setError("Erro ao cadastrar usuário usuário.")
      }
    }, []);

  const putProfile = useCallback(
    async ({ id, login, name, last_name, city, password }) => {
      try {
        await api.put(`/users/${id}`, {
          login,
          name,
          last_name,
          city,
          password
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