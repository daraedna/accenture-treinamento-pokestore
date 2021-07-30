import styled from 'styled-components';
import { Form } from "react-bootstrap";
import { mixins } from "../../styles/mixins";
import bg from '../../assets/bg.gif';

// Estilizações da página do Login
export const Styled = {
    Container: styled.div`
        width: 100%;
        height: 100vh;
        background: url(${bg}) no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
    Content: styled.div`
        width: 30rem;
        height: 30rem;
        box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        background: ${mixins.colors.white};
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @media screen and (min-width: 320px) and (max-width: 768px) {
            width: 100%;
            max-width: 480px;
        }

    `,
    FormContent: styled(Form)`
        width: 80%;
    `,
    ButtonLoginContent: styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    `,
    ButtonContent: styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        button {
            margin: 0 auto;
        }

        @media screen and (min-width: 320px) and (max-width: 474px) {
            flex-direction: column;
            margin-bottom: 20px;
            
            button {
                margin: 0 auto;

                &:first-child {
                    margin-bottom: 20px;
                }
            }
        }
    `,
    Error: styled.p`
        align-self: center;
        justify-self: center;
        color: ${mixins.colors.red};
        font-family: ${mixins.fonts.semi_bold};
        font-weight: ${mixins.typograph.paragraph};
    `
};