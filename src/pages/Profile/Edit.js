import React, { useEffect, useState } from 'react';
import { useProfile } from '../../hooks/contexts/ProfileProvider';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button'

import profile_img from '../../assets/profile_img.png'
import { Styled } from './styles';

export default function Edit() {
  const { patchProfile, getProfile, loggedUserId, profile } = useProfile();

  const [name, setName] = useState();
  const [city, setCity] = useState();

  useEffect(() => {

    setName(profile.name);
    setCity(profile.city);

    return () => {
      getProfile(loggedUserId)
    }

  }, [profile])

  const handleEditUser = async (event) => {
    event.preventDefault();
    if (name === '' || city === '') {
      notify();
      return;
    } else {
      await patchProfile(loggedUserId, name, city);
      history.push("/profile")
    }
  }

  const notify = () => toast.error("Digite nome e cidade corretamente!", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });

  const history = useHistory();

  return (
    <>
      <Styled.Container>
        <Styled.Card_Container>
          <h1 className="profile_text">Editar Perfil</h1>
          <Styled.Content>

            <Styled.Avatar_Container>
              <img src={profile_img} />
            </Styled.Avatar_Container>

            <div>
              <Styled.Form onSubmit={handleEditUser}>
                <Styled.Function>
                  <label htmlFor="email">E-mail</label>
                  <p id="email">{profile.email}</p>
                </Styled.Function>

                <Styled.Name_Container>
                  <label htmlFor="input1">Nome</label>
                  <input
                    id="input1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Styled.Name_Container>

                <Styled.Origin>
                  <label>Origem</label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Styled.Origin>


                <Styled.Buttons>
                  <Button
                    type="primary"
                  //onClick={() => handleEditUser(user)}
                  >
                    Salvar
                  </Button>
                  <Button
                    type="secondary"
                    onClick={() => history.push("/profile")}
                  >Cancelar</Button>
                </Styled.Buttons>

              </Styled.Form>
            </div>
          </Styled.Content>
        </Styled.Card_Container>
      </Styled.Container>
    </>
  );
}