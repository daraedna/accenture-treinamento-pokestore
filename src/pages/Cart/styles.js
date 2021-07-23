// componentes estilizados da página Cart

import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  Container: styled.div`
    background-color: ${mixins.colors.white};
    max-width: 934px;
    display: flex;
    margin: auto;
    padding: 2rem;
  `,
  CartWrapper: styled.div`
    margin: 0 auto;
  `,
  CartTable: styled.table`
    empty-cells: show;
  `
}