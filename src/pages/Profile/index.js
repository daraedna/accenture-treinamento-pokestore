import React from 'react';
import {Styled} from './styles'
import Footer from '../../components/Footer';
import profile_img from '../../assets/profile_img.png'



export default function Profile() {
  return (
    <Styled.Container>
      <Styled.Card_Container>
      <Styled.Content_Container>
      <Styled.Card_Title>
        <h2>Meu perfil</h2>
      </Styled.Card_Title>
      <Styled.Img src={profile_img}/>
      </Styled.Content_Container>
      </Styled.Card_Container>
      <Footer/>
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