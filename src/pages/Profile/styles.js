// componentes estilizados da página Profile
import styled from 'styled-components';
import { mixins } from "../../styles/mixins";


export const Styled = {
    Container: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        background-color: ${mixins.colors.background};
        margin: 1.5rem 0 0 0;
    `,
    Card_Container: styled.div`
        width: 100%;
        height:100%;
        background-color: ${mixins.colors.background};
        h1 {
            color: black;
            font-weight: ${mixins.fonts.normal};
            font-size: ${mixins.typograph.title};
            text-align: center;
            margin: 10px 0 0 0;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) {
            background-color: ${mixins.colors.background};
            h1 {
                font-size: 28px;
            }
        }
        
        @media screen and (min-width: 1024px) and (max-width: 1199px) {
            background-color: ${mixins.colors.background};
            h1 {
                font-size: 32px;
            }
        }
        
        @media screen and (min-width: 1200px) and (max-width: 1600px) {
            background-color: ${mixins.colors.background};
            h1 {
                font-size: 36px;
            }
        }
    `,
    Content: styled.div`
    width: 80%;
    box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: ${mixins.colors.white};

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        margin: 3rem auto
    }
    `,
    Avatar_Container: styled.div`
        margin: 3rem 0 3rem 0;
        img {
        border: 1px solid black;
        border-radius: 100%;
        width: 5rem;

        @media screen and (min-width: 768px) {
            width: 6rem;
        }

        @media screen and (min-width: 1024px) {
            width: 8rem;
            margin: 2rem auto;
            position: relative;
            top: -90px;
            left: -30px;
        }
    }
    `,

    Form: styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        input {
            
            width: 22rem;
        }
        select {
            width: 22rem;
        }
    }
    `,

    Name_Container: styled.div`
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

    Origin: styled.div`
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
    Function: styled.div`
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

    Password_Container: styled.div`
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

    Buttons: styled.div`
        /* width: 100%; */
        display: flex;
        justify-content: space-evenly;
        gap: 0.5rem;

    @media screen and (min-width: 1200px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        button {
            position: relative;
            left: 150px;
            top: 35px;
        }
    }
    `,
    /* Estilo específico página Edit */

    Button: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
    `
}