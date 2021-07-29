import React from 'react';
import { useAuth } from '../../hooks/contexts/AuthProvider';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Logo from '../../assets/small-logo.png'
import { Styled } from './styles';
import { mixins } from "../../styles/mixins";
import { useCart } from '../../hooks/contexts/CartProvider';

export function Navbar() {
  const { auth, SignOut } = useAuth();
  const { cartItemsNumber } = useCart();

  const handleClick = () => {
    SignOut();
  }
  console.log(cartItemsNumber)

  return (
    <Styled.Navbar>
      <Styled.ContainerLogo to="/home">
        <Styled.Logo src={Logo} />
      </Styled.ContainerLogo>
      <Styled.NavArea>
        <Styled.NavButton to="/cart">
          <ShoppingCartOutlinedIcon color={mixins.colors.primary} />
          <Styled.CartLabel>
            {cartItemsNumber}
          </Styled.CartLabel>
        </Styled.NavButton>
        <Styled.NavButton to={auth ? "/profile" : "/login"}>
          <AccountCircleOutlinedIcon color={mixins.colors.primary} />
        </Styled.NavButton>
        <Styled.LogOut onClick={handleClick}>
          <ExitToAppOutlinedIcon color={mixins.colors.primary} />
        </Styled.LogOut>
      </Styled.NavArea>
    </Styled.Navbar>
  )
}

export default Navbar;