import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styles = {
    Footer: styled.footer`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 42px;
        background: ${mixins.colors.primary};
    `,
     TextFooter: styled.p`
        margin: 0;
        font-size: ${mixins.typograph.paragraph};
        color: ${mixins.colors.white};
    `
}
