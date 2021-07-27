import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Styled = {
  Navbar: styled.nav`  
    display: flex;
    align-items: left;
    justify-content: start;
    flex-direction: row;
    width: 100px;
    height: 100%;
    padding: 0px 10px;
    background-color: ${mixins.colors.primary};
  `,
  NavArea: styled.div`
    height: 85%;
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content: space-around;
  `,

  NavButton: styled.button`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: '#3AD280';
  `,
  Logo: styled.img`
  margin: 40px 0;
  width: 47px;
  height: 52px;
  `,
     TextNavBar: styled.p`
        margin: 0;
        font-size: ${mixins.typograph.paragraph};
        color: ${mixins.colors.white};
    `
}