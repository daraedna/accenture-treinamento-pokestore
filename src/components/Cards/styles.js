import styled, { keyframes } from "styled-components";
import { mixins } from "../../styles/mixins";
const loading = keyframes`
    0% {
        transform: translateX(-100%);
    }
    60% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(100%);
    }
`
export const Styled = {
    Container: styled.div`
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Content: styled.div`
        position: relative;
        background-color: ${mixins.colors.white};
        border-radius: 15px;
        box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4), -10px -10px 20px #FFFFFF;
        width: 200px;
        height: 300px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        text-align: center;
        align-content: center;
        border: none;
    `,
    Loading: styled.div`
        position: relative;
        background-color: ${mixins.colors.white};
        border-radius: 15px;
        box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4), -10px -10px 20px #FFFFFF;
        width: 200px;
        height: 340px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        text-align: center;
        cursor: pointer;
        overflow: hidden;

        ::after {
            display: block;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, #ededed, transparent);
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            transform: translateX(-100%);
            z-index: 1;
            animation: 2s ${loading} linear 0.5s infinite;
            content: '';
        }
    `,
    Avatar: styled.img`
        width: 120px;
        height: 120px;
        margin: 0 auto;
    `,
    Title: styled.h1`
        text-transform: capitalize;
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
        color: ${mixins.colors.text};
        margin-top: 10px;
    `,
    Price: styled.p`
        font-family: ${mixins.fonts.semi_bold};
        font-size: ${mixins.typograph.subTitle};
        color: ${mixins.colors.text};
        text-align: cente;

        span {
            margin: 10px 0 0;
            font-size: ${mixins.typograph.form};
            color: ${mixins.colors.primary};
            cursor: pointer;
            border: none;
            display: block;

            :hover {
                opacity: .8;
            }
        }
    `,
    Button: styled.span`
        text-align: center;
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
    `,

    //Modal Pokemon

    ModalContent: styled.div`
        display: flex;
        flex-direction: row;
        text-transform: capitalize;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem
    `,

    ModalImg: styled.div`
        display: flex;
        flex-direction: column;
    `,

    PokemonTypeModal: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px;
        width: 100px;
        background: ${props => props.color};
        border-radius: 10px;
        color: ${mixins.colors.white};
        margin-bottom: 20px;

        svg {
            width: 16px;
            height: 16px;
            margin-right: 10px;

            path {
                fill: ${mixins.colors.white};
            }
        }

    `
}