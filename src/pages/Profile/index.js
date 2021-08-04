import React from 'react';
import { Styled } from './styles'
import profile_img from '../../assets/profile_img.png'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../hooks/contexts/ProfileProvider';


export default function Profile() {
  const { profile } = useProfile();

  const { name, email, city } = profile;

  const history = useHistory();

  return (
    <>
      <Styled.Container>
        <h1 className="profile_text">Meu perfil</h1>
        <Styled.Card_Container>
          <Styled.Content>

            <Styled.Avatar_Container>
              <img src={profile_img} />
            </Styled.Avatar_Container>

            <div>
              <Styled.Form onSubmit="">

                <Styled.Name_Container>
                  <label htmlFor="input1">Nome</label>
                  <p id="input1" readOnly>{name}</p>
                </Styled.Name_Container>

                <Styled.Function>
                  <label htmlFor="input2" >E-mail</label>
                  <p id="input2" readOnly>{email}</p>
                </Styled.Function>

                <Styled.Password_Container>
                  <label htmlFor="input3">Senha</label>
                  <p id="input3" readOnly >*************</p>
                </Styled.Password_Container>

                <Styled.Origin>
                  <label>Origem</label>
                  <p>{city}</p>
                </Styled.Origin>

              </Styled.Form>


              <Styled.Button>
                <Button type="primary" onClick={() => history.push("/profile/edit")} >Editar</Button>
              </Styled.Button>
            </div>
          </Styled.Content>
        </Styled.Card_Container>
      </Styled.Container>
    </>
  );
}