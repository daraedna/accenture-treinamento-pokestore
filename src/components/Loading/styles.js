import styled, { keyframes } from "styled-components";
import { mixins } from "../../styles/mixins";

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Styles = {
    Loading: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
    `,
     ImgLoading: styled.img`
        width: 42px;
        height: 42px;
        animation: ${loading} 2s linear infinite;
    `
}
