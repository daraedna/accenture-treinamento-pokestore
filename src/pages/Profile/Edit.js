import React, { useEffect, useState } from 'react';
import { Styled } from './styles'
import profile_img from '../../assets/profile_img.png'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../hooks/contexts/ProfileProvider';

export default function Edit() {
  const { putProfile, loggedUserId, profile } = useProfile()

  const [user, setUser] = useState({
    name: profile.name,
    email: profile.email,
    city: profile.city,
    password: profile.password,
  });

  useEffect(() => {
    loadData()
  }, [profile])

  const loadData = async () => {
    setUser({
      name: profile.name,
      email: profile.email,
      city: profile.city,
      password: profile.password,
    })
  }

  const handleEditUser = (userData) => {
    console.log(userData)
    const { email, name, city, password } = userData;
    putProfile(loggedUserId, email, name, city, password)
    console.log(loggedUserId)
    history.push("/profile")
  }

  /*   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState(''); 
  */


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
              <Styled.Form onSubmit="">

                <Styled.Name_Container>
                  <label htmlFor="input1">Nome</label>
                  <input id="input1" value={user.name} onChange={(e) => setUser({ name: (e.target.value) })} />
                </Styled.Name_Container>

                <Styled.Function>
                  <label htmlFor="input2" >E-mail</label>
                  <input id="input2" value={user.email} onChange={(e) => setUser({ email: (e.target.value) })} />
                </Styled.Function>

                <Styled.Password_Container>
                  <label htmlFor="input3">Senha</label>
                  <input
                    id="input3"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ password: (e.target.value) })}
                  />
                </Styled.Password_Container>

                <Styled.Origin>
                  <label>Origem</label>
                  <input
                    id="city"
                    type="text"
                    value={user.city}
                    onChange={(e) => setUser({ city: (e.target.value) })}
                  />
                </Styled.Origin>


                <Styled.Buttons>
                  <Button
                    type="primary"
                    onClick={() => handleEditUser(user)}
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