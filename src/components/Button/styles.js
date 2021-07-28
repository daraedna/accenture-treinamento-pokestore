import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const ButtonPrimary = styled.button`
        border: none;
        background: ${mixins.colors.gradient};
        color: ${mixins.colors.white};
        border-radius: 20px;
        width: 178px;
        height: 44px;
        font-size: ${mixins.typograph.paragraph};
        font-family: ${mixins.fonts.semi_bold};
        margin: 6px;
        transition: 0.3s ease, transform 0.3s ease;

        :active, :hover {
            opacity: 0.8;
            box-shadow: 0px 1px 8px 2px rgba(62, 104, 84, 0.4);
            transform: translate(3px 3px);
        }
    `

export const Styled = {
    ButtonPrimary,
    ButtonSecondary: styled(ButtonPrimary)`
        background: none;
        border: 1px solid ${mixins.colors.primary};
        color: ${mixins.colors.text};

        :hover {
            background: ${mixins.colors.gradient};
            color: ${mixins.colors.white};
            border: none;
        }
    `,
    ButtonText: styled(ButtonPrimary)`
    background: none;
    border: none;
    color: ${mixins.colors.text};

    :hover {
        color: ${mixins.colors.primary};
        border: none;
    }
`
}