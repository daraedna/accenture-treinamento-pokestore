import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/contexts/AuthProvider';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Logo from '../../assets/small-logo.png'
import { Styled } from './styles';
import { mixins } from "../../styles/mixins";
import { useCart } from '../../hooks/contexts/CartProvider';
import { Nav } from 'react-bootstrap';


export function Navbar() {
  const { auth, SignOut } = useAuth();
  const { totalProductsNumber } = useCart();
  const history = useHistory();

  const handleClick = () => {
    SignOut();
  }

  return (
    <Styled.Navbar expand="sm">
      <Styled.ContainerLogo href="/home">
        <Styled.Logo src={Logo} />
      </Styled.ContainerLogo>
      <NavbarToggle aria-controls="navbar-nav" />
      <Styled.NavArea id="navbar-nav">
        <Nav className="py-4">
          <Styled.NavButton href="/home">
            <HomeOutlined color={mixins.colors.primary}/>
            <p className="mx-3 d-flex d-sm-none">Início</p>
          </Styled.NavButton>
          <Styled.NavButton href="/cart" className="mt-3 mt-sm-0">
            <ShoppingCartOutlinedIcon color={mixins.colors.primary} />
            <p className="mx-3 d-flex d-sm-none">Carrinho</p>
            <Styled.CartLabel>
              {totalProductsNumber}
            </Styled.CartLabel>
          </Styled.NavButton>
          <Styled.NavButton href={auth ? "/profile" : "/login"} className="mt-3 mt-sm-0">
            <PersonOutlineOutlined color={mixins.colors.primary} />
            <p className="mx-3 d-flex d-sm-none">Perfil</p>
          </Styled.NavButton>
          {auth ?
            <Styled.ToggleLogin onClick={handleClick} className="mt-3 mt-sm-0">
              Sair
            </Styled.ToggleLogin>
            :
            <Styled.ToggleLogin onClick={() => history.push("/login")} className="mt-3 mt-sm-0">
              Entrar
            </Styled.ToggleLogin>
          }
        </Nav>
      </Styled.NavArea>
    </Styled.Navbar>
  )
}

export default Navbar;