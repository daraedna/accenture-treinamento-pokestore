import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styles = {
    Footer: styled.footer`
        position: relative;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 16px 0;
        background: ${mixins.colors.primary};
    `,
    TextFooter: styled.p`
        margin: 0;
        font-size: ${mixins.typograph.paragraph};
        color: ${mixins.colors.white};
    `
}
