import styled from "styled-components";
import {mixins} from "../../styles/mixins";

export const ContainerCard = {
    Container: styled.div `
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Content: styled.div `
        position: relative;
        background-color: ${mixins.colors.white};
        border-radius: 15px;
        box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4), -10px -10px 20px #FFFFFF;
        width: 250px;
        height: 340px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        text-align: center;
        cursor: pointer;
    `,
    Loading: styled.div `
        position: relative;
        background-color: ${mixins.colors.white};
        border-radius: 15px;
        box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4), -10px -10px 20px #FFFFFF;
        width: 250px;
        height: 340px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        text-align: center;
        cursor: pointer;
    `,
    Avatar: styled.img `
        width: 147px;
        height: 147px;
        margin: 10px 36px 0px 57px;
    `,
    Title: styled.h1 `
        text-transform: capitalize;
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
        color: ${mixins.colors.text};
    `,
    Price: styled.p `
        font-family: ${mixins.fonts.semi_bold};
        font-size: ${mixins.typograph.subTitle};
        color: ${mixins.colors.text};
    `,
    Button: styled.span `
        text-align: center;
        margin-bottom: 6px;
    `,
    ContainerIcon: styled.div`
        display: flex;
        justify-content: center;
        position: absolute;
        top: 5px;
        right: 10px;

    `,
    PokemonType: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px;
        background: ${props => props.color};
        border-radius: 50%;

        & + div {
            margin-left: 10px;
        }
        svg {
            width: 16px;
            height: 16px;

            path {
                fill: ${mixins.colors.white};
            }
        }

        span {
            margin-left: 8px;
            color: ${mixins.colors.white};
            font-size: ${mixins.typograph.form};
            font-weight: 500;
            text-transform: capitalize;
        }
    `
}