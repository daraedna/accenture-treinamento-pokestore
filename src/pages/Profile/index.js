import React from 'react';
import {Styled} from './styles'
import profile_img from '../../assets/profile_img.png'
import Button from '../../components/Button'
import {Navbar} from '../../components/NavBar'
// import Footer from '../../components/Footer'

export default function Profile() {
  return (
    <>
      <Navbar/>
    <Styled.Container>
      <Styled.Card_Container>
        <h1 className="profile_text">Meu perfil</h1>
      <Styled.Content>
      
      <Styled.Avatar_Container>
        <img src={profile_img}/>
      </Styled.Avatar_Container>

      <div>
        <Styled.Form onSubmit="">

          <Styled.Name_Container>
            <label htmlFor="input1">Nome</label>
            <input id="input1"/>
          </Styled.Name_Container>

          <Styled.Function>
            <label htmlFor="input2">E-mail</label>
            <input id="input2"/>
          </Styled.Function>

          <Styled.Password_Container>
            <label htmlFor="input3">Senha</label>
            <input  id="input3"/>
          </Styled.Password_Container>

          {/* <Styled.Sex_Container>
            <label>Sexo</label>
            <select>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
          </Styled.Sex_Container> */}

        <Styled.Origin>
            <label>Origem</label>
            <select>
              <option>Japão</option>
              <option>Coréia</option>
            </select>
          </Styled.Origin>

      
      <Styled.Buttons>
      <Button type="primary">Editar</Button>
      </Styled.Buttons>

        </Styled.Form>
      </div>
      </Styled.Content>
      </Styled.Card_Container>
      {/* <Footer/> */}
    </Styled.Container>
    </>
  );
}