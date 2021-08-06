import React, { useEffect, useState } from 'react';
import { Form, Spinner } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProfile } from '../../hooks/contexts/ProfileProvider';
import Button from '../../components/Button'

import profile_img from '../../assets/profile_img.png'
import { Styled } from './styles';

export default function Edit() {
  const { patchProfile, getProfile, loggedUserId, profile, loading } = useProfile();

  const [name, setName] = useState();
  const [city, setCity] = useState();

  useEffect(() => {

    setName(profile.name);
    setCity(profile.city);

    return () => {
      getProfile(loggedUserId)
    }

  }, [profile])

  const handleEditUser = async () => {
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
        <Styled.Title>Editar Perfil</Styled.Title>
        <Styled.Card_Container>
          <Styled.Content>

            <Styled.Avatar_Container>
              <img src={profile_img} />
            </Styled.Avatar_Container>

            <Styled.ContentForm>
              <Styled.Form onSubmit={handleEditUser}>
                <Styled.ItemForm>
                  <span>E-mail</span>
                  <p>{profile.email}</p>
                </Styled.ItemForm>

                <Styled.ItemForm>
                  <label htmlFor="name">Nome</label>
                  <Form.Control
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Styled.ItemForm>

                <Styled.ItemForm>
                  <label htmlFor="city">Cidade</label>
                  <Form.Control
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Styled.ItemForm>
              </Styled.Form>

                <Styled.Buttons>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={() => handleEditUser()}
                  >
                    {loading ?
                      <Spinner animation="border" size="sm" />
                      :
                      'Salvar'
                    }
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => history.push("/profile")}
                  >Cancelar</Button>
                </Styled.Buttons>
            </Styled.ContentForm>
          </Styled.Content>
        </Styled.Card_Container>
      </Styled.Container>
    </>
  );
}