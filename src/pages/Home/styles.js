import styled from 'styled-components';
import { Form } from "react-bootstrap";
import { mixins } from "../../styles/mixins";
import bg from '../../assets/bg.gif';

// Estilizações da página do Login
export const Styled = {
    Container: styled.div`
        width: 100%;
        height: 100%;
        margin: 20px 50px;
        display: flex;
        justify-content: center;
    `,

    Content: styled.div`
        width: 80%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        overflow-y: scroll;

    `,

};