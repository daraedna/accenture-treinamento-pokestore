// componentes estilizados da página Profile
import styled from 'styled-components';
import { mixins } from "../../styles/mixins";


export const Styled = {
    Container: styled.div `
        width: 100%;
        height: 100%;
        background-color: ${mixins.colors.background};
    `,
    Card_Container: styled.div `
        width: 704px;
        height: 405px;
        background-color: ${mixins.colors.white};
        margin: 85px auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
    `,

    Content_Container: styled.div `
        margin: 46px 0 0 56px;
        display: grid;
        grid-template-columns: 1fr;
    `,

    Card_Title: styled.h2 `
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
        color: ${mixins.colors.text};
    `,

    Img: styled.img `
        width: 160px;
        height: 160px;
        margin: 40px 0 0 36px;
    `,
    // Content_Container2: styled.div `
    //     width: 400px;
    //     display: grid;
    //     grid-template-columns: 1fr 1fr;
    // `,
    // Name: styled.p `
    //     font-size: ${mixins.typograph.form};
    //     font-weight: ${mixins.fonts.normal};
    //     color: ${mixins.colors.text};
    // `

}