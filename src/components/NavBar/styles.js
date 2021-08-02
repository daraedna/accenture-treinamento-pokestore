import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Styled = {
  Navbar: styled(Navbar)`
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    min-height: 80px;
    padding: 0px 64px;
    border-bottom: 1px solid ${mixins.colors.card};
    background-color: ${mixins.colors.background};
    right: 0;
  `,

  ContainerLogo: styled(Navbar.Brand)`

  `,
  Logo: styled.img`
  `,

  NavArea: styled(Navbar.Collapse)`
    display: flex;
    gap: 4rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
      gap: 2rem;
    }
  `,

  NavButton: styled(Nav.Link)`
    position: relative;
    background: none;
    border: none;
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    margin: 0 1rem;
    svg {
      color: ${mixins.colors.primary};
      :hover {
        color: ${mixins.colors.text};
      }
    }
  `,

  CartLabel: styled.div`
    position: absolute;
    left: 19px;
    top: 0px;
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

  ToggleLogin: styled.button`
    background: none;
    border: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1rem;
    font-size: ${mixins.typograph.subTitle};
    font-family: ${mixins.fonts.semi_bold};
    color: ${mixins.colors.primary};
    :hover {
      color: ${mixins.colors.text};
    }
  `,
}
