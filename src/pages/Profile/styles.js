// componentes estilizados da página Profile
import styled from 'styled-components';
import { mixins } from "../../styles/mixins";


export const Styled = {
    Container: styled.div `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        background-color: ${mixins.colors.background};
    `,
    Card_Container: styled.div `
        width: 100%;
        background-color: ${mixins.colors.white};
        margin: 85px auto;
        margin: 0 0 -10px 0;
    `,
    Content: styled.div `
    overflow:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    `,
    Avatar_Container: styled.div `
        margin: 0 0 1rem 0;
    img {
        width: 9.5rem;
    }
    `,

    Form: styled.form `
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        input {
        height: 2rem;
        padding: 0 0.4rem;
        border: 1px solid black;
        border-radius: 7px;
    }
    select {
        border:1px solid ${mixins.colors.text};
        border-radius: 7px;
        background-color: ${mixins.colors.white};
        height: 2rem;
    }
    `,

    Name_Container: styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${mixins.colors.text};
    font-size:${mixins.typograph.form};

    input {
        width: 100%;
    }
    `,
    Sex_Container: styled.div `
       width: 100%;
       display:flex;
       flex-direction: column;
       color: ${mixins.colors.text};
       font-size:${mixins.typograph.form};
        gap: 0.5rem;
    `,
    Origin: styled.div `
       width: 100%;
       display:flex;
       flex-direction: column;
       color: ${mixins.colors.text};
       font-size:${mixins.typograph.form};
        gap: 0.5rem;
    `,
    Function: styled.div `
        width: 100%;
       display:flex;
       flex-direction: column;
       color: ${mixins.colors.text};
       font-size:${mixins.typograph.form};
        gap: 0.5rem;
        margin: 0 0 1.5rem 0;
    `,

    Buttons: styled.div `
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

    button:first-child {
        margin:0 0 0.5rem 0 ;
    }
    button {

    }
    `
}