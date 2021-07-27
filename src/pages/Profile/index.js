import React from 'react';
import {Styled} from './styles'
import Footer from '../../components/Footer';
import profile_img from '../../assets/profile_img.png'



export default function Profile() {
  return (
    <Styled.Container>
      <Styled.Card_Container>
        <h1>Meu perfil</h1>
      <Styled.Content>
      <div>
        <img src={profile_img}/>
      </div>
      <div>
        <form onSubmit="">
          <div>
            <div>
            <label>Nome Completo</label>
            <input/>
            </div>

          <div>
            <label>Sexo</label>
            <select>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
          </div>

          </div>

      
        <div>
          <div>
            <label>Origem</label>
            <select>
              <option>Japão</option>
              <option>Coréia</option>
            </select>
          </div>

          <div>
            <label>Função</label>
            <input/>
          </div>
        </div>
      
      <div>
        <button>Salvar</button>
        <button>Cancelar</button>
      </div>

        </form>
      </div>
      </Styled.Content>
      </Styled.Card_Container>
    </Styled.Container>
  );
}

      // <Styled.Content_Container2>
      //   <Styled.Name>
      //     <p>Nome completo</p>  
      //   </Styled.Name>
      //   <select>
      //     <option>Masculino</option>
      //     <option>Feminino</option>
      //   </select>
      // </Styled.Content_Container2>