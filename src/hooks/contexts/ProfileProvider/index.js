import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { api } from '../../../services/api';
import { useAuth } from '../AuthProvider';

const UserContext = createContext({});

function ProfileProvider({ children }) {
  const { SetToken } = useAuth();

  const [profile, setProfile] = useState({
    id: 0,
    email: "",
    name: "",
    city: "",
    password: "",
  });

  const [loggedUserId, setLoggedUserId] = useState(0);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      try {
        const { data } = await api.post('/users', {
          name,
          email,
          password,
          city,
        });
        SetToken(data);
      } catch (err) {
        if(err.response) {
          setError(err.response.data);
        }
      } finally {
        setLoading(false);
      }
    }, []);

  const patchProfile = useCallback(
    async (id, name, city) => {
      try {
        await api.patch(`/users/${id}`, {
          name,
          city,
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
        patchProfile,
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