import React from 'react';
import {Styled} from './styles'
import profile_img from '../../assets/profile_img.png'
import Button from '../../components/Button'

export default function Profile() {
  return (
    <Styled.Container>
      <Styled.Card_Container>
        <h1>Meu perfil</h1>
      <Styled.Content>
      
      <Styled.Avatar_Container>
        <img src={profile_img}/>
      </Styled.Avatar_Container>

      <div>
        <Styled.Form onSubmit="">

          <Styled.Name_Container>
            <label>Nome Completo</label>
            <input/>
          </Styled.Name_Container>

          <Styled.Sex_Container>
            <label>Sexo</label>
            <select>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
          </Styled.Sex_Container>


      
        <Styled.Origin>
            <label>Origem</label>
            <select>
              <option>Japão</option>
              <option>Coréia</option>
            </select>
          </Styled.Origin>

          <Styled.Function>
            <label>Função</label>
            <input/>
          </Styled.Function>
      
      <Styled.Buttons>
      <Button type="primary">Salvar</Button>
      <Button type="secondary">Cancelar</Button>
      </Styled.Buttons>

        </Styled.Form>
      </div>
      </Styled.Content>
      </Styled.Card_Container>
    </Styled.Container>
  );
}