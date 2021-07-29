import React from 'react';
import Footer from '../../components/Footer';
import Logo from '../../assets/small-logo.png'

import { Styled } from './styles';

function NotFound() {
  return (
    <Styled.Container>
      <Styled.Navbar>
        <Styled.ContainerLogo to="/home">
          <Styled.Logo src={Logo} />
        </Styled.ContainerLogo>
      </Styled.Navbar>
      <Styled.ImgError/>
      <Footer />
    </Styled.Container>
  )
}

export default NotFound;