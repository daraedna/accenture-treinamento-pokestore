import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Styled = {
  Navbar: styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 80px;
    padding: 0px 64px;
    border-bottom: 1px solid ${mixins.colors.card};
  `,

  ContainerLogo: styled(Link)`

  `,
  Logo: styled.img`
  `,

  NavArea: styled.div`
    display: flex;
    gap: 4rem;
    flex-direction: row;
    align-items: right;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
      gap: 2rem;
    }
  `,

  NavButton: styled(Link)`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: ${mixins.colors.primary};
    :hover {
      color: ${mixins.colors.text};
    }
  `,

  LogOut: styled.button`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: ${mixins.colors.primary};
    :hover {
      color: ${mixins.colors.text};
    }
  `,
}
