// componentes estilizados da página Profile
import styled from 'styled-components';
import { mixins } from "../../styles/mixins";


export const Styled = {
    Container: styled.div `
        width: 100%;
        height: 100%;
        background-color: ${mixins.colors.background};
    `,
    Card_Container: styled.div `
        width: 704px;
        height: 405px;
        background-color: ${mixins.colors.red};
        margin: 85px auto;
        `,
    Content: styled.div `
    display: flex;
    flex-direction: row;
    `
}