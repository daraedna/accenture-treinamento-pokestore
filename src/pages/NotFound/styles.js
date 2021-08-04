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

    ImgError: styled.div`
        display: flex;
        width: 240px;
        height: 240px;
        background: url(${error}) no-repeat;
        background-size: contain;
    `,
}