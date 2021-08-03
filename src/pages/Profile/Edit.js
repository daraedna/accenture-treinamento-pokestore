import React, {useState} from 'react';
import { Styled } from './styles'
import profile_img from '../../assets/profile_img.png'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom';

export default function Edit() {

const perfil = {
  name: 'zezinho',
  email: 'Fulano_42@gmail.com',
}

const [name, setName] = useState(perfil.name)
const [email, setEmail] = useState(perfil.email)

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
                  <input id="input1" value={name} onChange={(e) => setName(e.target.value)}/>
                </Styled.Name_Container>

                <Styled.Function>
                  <label htmlFor="input2" >E-mail</label>
                  <input id="input2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Styled.Function>

                <Styled.Password_Container>
                  <label htmlFor="input3">Senha</label>
                  <input id="input3" value="**********"/>
                </Styled.Password_Container>

                <Styled.Origin>
                  <label>Origem</label>
                  <select>
                    <option>Japão</option>
                    <option>Coréia</option>
                  </select>
                </Styled.Origin>


                <Styled.Buttons>
                  <Button type="primary">Salvar</Button>
                  <Button type="secondary" onClick={() => history.push("/profile")} >Cancelar</Button>
                </Styled.Buttons>

              </Styled.Form>
            </div>
          </Styled.Content>
        </Styled.Card_Container>
      </Styled.Container>
    </>
  );
}