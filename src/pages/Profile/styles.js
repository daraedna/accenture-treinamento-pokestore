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
        margin: 0;

        @media screen and (max-width: 1200px) {
            margin: 2rem 0;
        }
        @media screen and (max-width: 768px) {
            margin: 2rem 0 10rem;
        }
    `,

    Card_Container: styled.div `
        width: 100%;
        height: 100%;
        flex-grow: 1;
        background-color: ${mixins.colors.background};
    `,
    Content: styled.div `
        width: 70%;
        box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background-color: ${mixins.colors.white};

        @media screen and (max-width: 768px) {
            width: 90%;
            padding: 1rem;
        }

        @media screen and (min-width: 1024px) {
            display: flex;
            flex-direction: row;
            align-items: initial;
            margin: 0 auto 3rem
        }
    `,

     Title: styled.h1`
        margin: 2rem;
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
        color: ${mixins.colors.text};
    `,

    Avatar_Container: styled.div `
        display: flex;
        width: 30%;
        height: 9rem;

        @media screen and (max-width: 768px) {
           width: 100%;
           justify-content: center;
        }

        img {
            border: 1px solid black;
            border-radius: 50%;
            width: 9rem;
            height: 9rem;
        }
    `,

    ContentForm: styled.div`
        width: 50%;

        @media screen and (max-width: 768px) {
           width: 100%;
           margin-top: 12px;
        }

        @media screen and (min-width: 769px) and (max-width: 1200px) {
           width: 70%;
        }

    `,

    Form: styled.form `
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        gap: 0.7rem;
        width: 100%;
    `,

    ItemForm: styled.div `
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        color: ${mixins.colors.text};
        font-size:${mixins.typograph.subTitle};

        label, span {
            font-family: ${mixins.fonts.bold};
        }

        input, p {
            width: 100%;
            margin-bottom: 0.5rem;
        }
    `,

    Buttons: styled.div `
        display: flex;
        justify-content: space-evenly;
        margin: 1rem 0;
        flex-wrap: wrap;
    `,

    Button: styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    `
}