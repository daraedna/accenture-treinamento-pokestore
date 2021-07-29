import { Link } from "react-router-dom";
import styled from "styled-components";
import error from '../../assets/error.png';
import { mixins } from "../../styles/mixins";

export const Styled = {
    Container: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
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

    ImgError: styled.div`
        display: flex;
        width: 220px;
        height: 100%;
        margin-top: 40px;
        background: url(${error}) no-repeat;
        background-size: contain;
        flex: 1;
    `,
}