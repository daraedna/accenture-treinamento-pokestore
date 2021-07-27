import React from 'react';
import Logo from '../../assets/logo.png'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
 import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
 AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Styled } from './styles';

export function Navbar() {
  <Styled.Navbar>
    <Styled.Logo src={Logo}/>
    <Styles.TextNavBar>PokeStore</Styles.TextNavBar>
    <Styled.NavArea>
         <Styled.NavButton>
          <AddShoppingCartOutlinedIcon color="#3AD280" />
        </Styled.NavButton>
         <Styled.NavButton>
          <AccountCircleOutlinedIcon color="#3AD280" />
        </Styled.NavButton>
        <Styled.NavButton>
          <ExitToAppOutlinedIcon color="#3AD280" />
        </Styled.NavButton>
    </Styled.NavArea>
  </Styled.Navbar>
}

export default Navbar;