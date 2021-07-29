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
        height:100%;
        overflow-y: scroll;
        background-color: ${mixins.colors.background};
        h1 {
            color: black;
            font-weight: ${mixins.fonts.normal};
            font-size: ${mixins.typograph.title};
            text-align: center;
        }

        @media screen and (min-width: 768px) {
            background-color: ${mixins.colors.background};
            h1 {
                font-size: 28px;
            }
        }
        
        @media screen and (min-width: 1024px) {
            background-color: ${mixins.colors.background};
            h1 {
                font-size: 32px;
            }
        }

        @media screen and (min-width: 1200px) {
            background-color: ${mixins.colors.background};
            h1 {
                font-size: 36px;
            }
        }
    `,
    Content: styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    `,
    Avatar_Container: styled.div `
        margin: 0 0 1.5rem 0;
    img {
        width: 4rem;

        @media screen and (min-width: 768px) {
            width: 6rem;
        }

        @media screen and (min-width: 1024px) {
            width: 8rem;
        }
    }
    `,

    Form: styled.form `
        display: grid;
        grid-template-columns: 1fr;
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
    @media screen and (min-width: 768px) {
        input {
            width: 18rem;
        }

        select {
            width: 18rem;
        }

    }

    @media screen and (min-width: 1024px) {
        input {
            width: 20rem;
        }
        select {
            width: 20rem;
        }
    }

    @media screen and (min-width: 1200px) {
        input {
            width: 22rem;
        }
        select {
            width: 22rem;
        }
    }
    `,

    Name_Container: styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${mixins.colors.text};
    font-size:${mixins.typograph.form};

    @media screen and (min-width: 768px) {
        label {
            font-size: 16px;
        }
    }

    @media screen and (min-width: 1024px) {
        label {
            font-size:19px;
        }
    }

    @media screen and (min-width: 1200px) {
        label {
            font-size:22px;
        }
    }

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

        @media screen and (min-width: 768px) {
        label {
            font-size:16px;
        }
    }

    @media screen and (min-width: 1024px) {
        label {
            font-size: 19px;
        }
    }

    @media screen and (min-width: 1200px) {
        label {
            font-size: 22px;
        }
    }
    
    `,
    Origin: styled.div `
       width: 100%;
       display:flex;
       flex-direction: column;
       color: ${mixins.colors.text};
       font-size:${mixins.typograph.form};
        gap: 0.5rem;

        @media screen and (min-width: 768px) {
        label {
            font-size:16px;
        }
    }

    @media screen and (min-width: 1024px) {
        label {
            font-size: 19px;
        }
    }

    @media screen and (min-width: 1200px) {
        label {
            font-size: 22px;
        }
    }
    `,
    Function: styled.div `
        width: 100%;
       display:flex;
       flex-direction: column;
       color: ${mixins.colors.text};
       font-size:${mixins.typograph.form};
        gap: 0.5rem;
        margin: 0 0 0.2rem 0;

        @media screen and (min-width: 768px) {
        label {
            font-size:16px;
        }
    }

    @media screen and (min-width: 1024px) {
        label {
            font-size: 19px;
        }
    }

    @media screen and (min-width: 1200px) {
        label {
            font-size: 22px;
        }
    }
    `,

    Buttons: styled.div `
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;

        @media screen and (min-width: 768px) {
        button {
            font-size: 16px;
            width: 17rem;
        }
    }

    @media screen and (min-width: 1024px) {
        button {
            font-size: 19px;
            width: 19rem;
        }
    }

    @media screen and (min-width: 1200px) {
        button {
            font-size: 22px;
            width: 21rem;
        }
    }

    `
}