import styled from 'styled-components';
import { Form } from "react-bootstrap";
import { mixins } from "../../styles/mixins";
import bg from '../../assets/bg.gif';

export const Styled = {
    Container: styled.div`
        width: 100%;
        height: 100%;
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
        margin-top: 5rem;
        box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        background: ${mixins.colors.white};
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @media screen and (min-width: 320px) and (max-width: 768px) {
            width: 95%;
            max-width: 450px;
            margin-bottom: 1rem;

        }
    `,
    Title: styled.h1`
        font-size: ${mixins.typograph.title};
        color: ${mixins.colors.primary};
        margin: 1rem;
    `,
    Subtitle: styled.h2`
        display: inline;
        font-size: ${mixins.typograph.form};
        color: ${mixins.colors.text}
    `,
    FormContent: styled(Form)`
        width: 80%;
        flex: 1;
        margin-top: 2rem;
    `,
    ButtonContent: styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        button {
            margin: 10px auto 0;
        }

        @media screen and (min-width: 320px) and (max-width: 474px) {
            flex-direction: column;
            margin-bottom: 5px;

            button {
                margin: 10px auto 5px;
            }
        }
    `,
    Error: styled.p`
        align-self: center;
        justify-self: center;
        margin: 0;
        color: ${mixins.colors.red};
        font-family: ${mixins.fonts.semi_bold};
        font-weight: ${mixins.typograph.paragraph};
    `
};