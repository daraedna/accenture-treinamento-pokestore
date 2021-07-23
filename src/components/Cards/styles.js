import styled from "styled-components";
import {mixins} from "../../styles/mixins";

export const ContainerCard = {
    Container: styled.div `
    height: 450px;
    `,
    Content: styled.div `
        background-color: ${mixins.colors.white};
        border-radius: 20px;
        box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4), -10px -10px 20px #FFFFFF;
        width: 250px;
        height: 415px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    `,
    Avatar: styled.img `
    width: 147px;
    height: 147px;
    margin: 37px 36px 0px 57px;
    `,
    Title: styled.h1 `
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
        margin: 23px 0 0 36px;
        color: ${mixins.colors.text};
    `,
    Description: styled.p `
    font-family: ${mixins.fonts.normal};
    font-size: ${mixins.typograph.paragraph};
    color: ${mixins.colors.text};
    margin: 10px 0 0 36px;
    `,

    Price: styled.p `
    font-family: ${mixins.fonts.bold};
    font-size: ${mixins.typograph.subTitle};
    color: ${mixins.colors.text};
    margin: 20px 0 0 36px;
    `,
    Button: styled.span `
    text-align: center;
`
}