import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../../hooks/contexts/AuthProvider';
import { BsExclamationCircle } from "react-icons/bs";
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { toast } from 'react-toastify';
import Logo from '../../assets/small-logo.png'
import { Styled } from './styles';
import { mixins } from "../../styles/mixins";
import { useCart } from '../../hooks/contexts/CartProvider';
import { Nav } from 'react-bootstrap';
import ModalComponent from '../Modal';
import Button from '../Button';


export function Navbar() {
  const { auth, SignOut } = useAuth();
  const { totalProductsNumber } = useCart();
  const history = useHistory();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const isloginPage = useRouteMatch("/login");
  const isRegisterPage = useRouteMatch("/register");

  const handleClick = () => {
    setShowLogoutModal(true);
  }

  const handleLogout = () => {
    SignOut();
    setShowLogoutModal(false);
    notify();
    history.push("/home");
  }

  const notify = () => toast.success("Já estamos com saudades!", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });

  return (
    <Styled.Navbar expand="sm">
      <Styled.ContainerLogo href="/home">
        <Styled.Logo src={Logo} />
      </Styled.ContainerLogo>
      <NavbarToggle aria-controls="navbar-nav" />
      <Styled.NavArea id="navbar-nav" className="justify-content-center justify-content-sm-end">
        <Nav className="py-4">
          <Styled.NavButton href="/home">
            <HomeOutlined color={mixins.colors.primary} />
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
            (isRegisterPage || isloginPage) ?
            ''
            :
            <Styled.ToggleLogin onClick={() => history.push("/login")} className="mt-3 mt-sm-0">
              Entrar
            </Styled.ToggleLogin>
          }
        </Nav>
        <ModalComponent
          show={showLogoutModal}
          onHide={() => setShowLogoutModal(false)}
        >
          <BsExclamationCircle size="30px" color="#EA4335"
          />
          <h4>Tem certeza que deseja sair?</h4>
          <Button
            variant="secondary"
            onClick={() => handleLogout()}
          >
            Sim, tenho certeza
          </Button>
        </ModalComponent>
      </Styled.NavArea>
    </Styled.Navbar>
  )
}

export default Navbar;