import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Styled = {
  Navbar: styled.nav`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 80px;
    padding: 0px 64px;
    border-bottom: 1px solid ${mixins.colors.card};

    @media screen and (max-width: 768px) {
      padding: 0px 20px;
    }

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
    position: relative;
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

  CartLabel: styled.div`
    position: absolute;
    right: -8px;
    top: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${mixins.colors.secondary};
    color: ${mixins.colors.white};
    border-radius: 50%;
    font-size: ${mixins.typograph.paragraph};
    width: 16px;
    height: 16px;
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
