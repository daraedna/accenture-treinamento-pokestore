import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { api } from '../../../services/api';
import { useAuth } from "../AuthProvider";

const UserContext = createContext({});

function ProfileProvider({ children }) {
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    id: 0,
    login: "",
    name: "",
    last_name: "",
    city: "",
    password: "",
  });
  const [error, setError] = useState('');


  const getProfileFromAuth = () => {
    const { id, login, name, last_name, city, password } = user;
    setProfile({
      id,
      login,
      name,
      last_name,
      city,
      password
    })
  }

  useEffect(() => {
    user && getProfileFromAuth()
  }, [user]);


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
        error,
        putProfile,
        postProfile,
        deleteProfile
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