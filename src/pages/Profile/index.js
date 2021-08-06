import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../hooks/contexts/ProfileProvider';
import Button from '../../components/Button';
import profile_img from '../../assets/profile_img.png';
import { Styled } from './styles';

export default function Profile() {
  const { profile } = useProfile();

  useEffect(() => {
    setUser({
      name: profile.name,
      email: profile.email,
      city: profile.city,
    })
  }, [profile])


  const [user, setUser] = useState({
    name: profile.name,
    email: profile.email,
    city: profile.city,
  })
  const { name, email, city } = user;

  const history = useHistory();

  return (
    <>
      <Styled.Container>
        <Styled.Title>Meu perfil</Styled.Title>
        <Styled.Card_Container>
          <Styled.Content>

            <Styled.Avatar_Container>
              <img src={profile_img} />
            </Styled.Avatar_Container>

            <Styled.ContentForm>
              <Styled.Form onSubmit="">
                <Styled.ItemForm>
                  <span>E-mail</span>
                  <p>{email}</p>
                </Styled.ItemForm>

                <Styled.ItemForm>
                  <span>Nome</span>
                  <p>{name}</p>
                </Styled.ItemForm>

                <Styled.ItemForm>
                  <span>Cidade</span>
                  <p>{city}</p>
                </Styled.ItemForm>

              </Styled.Form>

              <Styled.Button>
                <Button variant="primary" onClick={() => history.push("/profile/edit")} >Editar</Button>
              </Styled.Button>

            </Styled.ContentForm>
          </Styled.Content>
        </Styled.Card_Container>
      </Styled.Container>
    </>
  );
}