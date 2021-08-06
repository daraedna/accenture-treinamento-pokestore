// componentes estilizados da página Cart

import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: ${mixins.colors.background};

    h1 {
      margin: 2rem 0;
      font-family: ${mixins.fonts.bold};
      font-size: ${mixins.typograph.title};
      color: ${mixins.colors.text};
      padding: 0.5rem;
    }

    table{
      margin: 0;

      th {
        font-size: ${mixins.typograph.title};
      }

      th, td {
        padding: 1rem;
        vertical-align: middle;
        color: ${mixins.colors.text};
      }

      .foot-row{
        padding: 2rem 0 0;

        @media screen and (min-width: 320px) and (max-width: 768px) {
          padding: 1.5rem;
        }
      }
    }

    // retirando as arrows do input number
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
  `,

  Content: styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  TableWrapper: styled.div`
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 53rem;
    padding: 2rem;
    box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
    background-color: ${mixins.colors.white};

    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      max-width: 35rem;
      padding: 0;
      margin-bottom: 2rem;

      .table-head {
        display: none;
      }
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
      width: 100%;
      max-width: 50rem;
    }
  `,

  ProductRow: styled.tr`
    height: 12rem;
    font-size: ${mixins.typograph.subTitle};
    font-weight: 700;
    border-bottom: 1px solid #DDDDDD;

    span:first-child {
      text-transform: capitalize;
    }

    img {
      max-width: 8rem;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0.5rem;
      padding-top: 1.2rem;
      font-size: ${mixins.typograph.subTitle};
      font-weight: 400;
      white-space: nowrap;

      .avatar-container {
        grid-row: 1;
        grid-column: 2;
        padding: 0;
        margin: 0 auto;

        img {
          max-width: 85px;
        }
      }

      .product-price-container {
        grid-row: 2;
        grid-column: 2;
        padding: 0;
        margin: 0 auto;

        span {
          text-align: center;
        }

        span:first-child {
          font-weight: 700;
        }
      }

      .product-amount-container {
        grid-row: 3;
        grid-column: 1;
        padding: 0;
        margin: 0 auto;
      }

      .subtotal-container {
        grid-row: 3;
        grid-column: 2;
        padding: 0;
        margin: 0 auto;
      }

      .delete-button-container {
        grid-row: 3;
        grid-column: 3;
        padding: 0;
        margin: 0 auto;
      }
    }
  `,

  Input: styled.input`
    text-align: center;
    height: 36px;
    width: 44px;
    padding:0 0.4rem;
    margin: 0 0.2rem;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    color: ${mixins.colors.text};

    @media screen and (min-width: 320px) and (max-width: 768px) {
      height: 2rem;
      width: 2.4rem;
    }
  `,

  AmountButton: styled.button`
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    border-radius: 5px;

    transition: 0.2s;

    &:hover:not([disabled]){
      background-color: ${mixins.colors.greyHover};
    }

    &:active{
      filter: brightness(0.7);
    }

    &:disabled{
      cursor: not-allowed;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
      height: 1.5rem;
      width: 1.5rem;
      overflow: hidden;
    }
  `,

  DeleteButton: styled.button`
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    border-radius: 5px;

    &:active{
      background-color: ${mixins.colors.greyHover};
    }
  `,

  ProductPriceDataCell: styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    span:first-child {
      margin-bottom: 1rem;
    };
  `,

  FootRowContentWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  `,

  TotalPriceWrapper: styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    p {
      margin-bottom: 0;
      margin-right: 0.5rem;
      font-size: ${mixins.typograph.subTitle};
      font-weight: 700;
    }

    strong {
      font-size: ${mixins.typograph.title};
      font-weight: 700;
      align-self: flex-end;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
      align-items: center;
    }
  `,
}