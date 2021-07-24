// componentes estilizados da página Cart

import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  Container: styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${mixins.colors.background};

    table{
      margin: 0;
      width: 828px;

      th {
        font-size: ${mixins.typograph.title};
      }

      th, td {
        padding: 1rem;
        vertical-align: middle;
        color: ${mixins.colors.text};
      }

      .FootRow{
        padding: 2rem 0 0;
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

  TableWrapper: styled.div`
    border-radius: 5px;
    margin: 0 auto;
    padding: 2rem;
    box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
    background-color: ${mixins.colors.white}
  `,

  ProductRow: styled.tr`
    height: 12rem;
    font-size: ${mixins.typograph.subTitle};
    font-weight: 700;
    border-bottom: 1px solid #DDDDDD;
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
  `,

  AmountButton: styled.button`
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    border-radius: 5px;

    transition: 0.2s;

    &:hover{
      background-color: ${mixins.colors.greyHover};
    }

    &:active{
      filter: brightness(0.7);
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
  `,
}