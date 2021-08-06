// componentes  estilizados da pagina routes
import styled from "styled-components";

export const Styled = {
  AppLayout: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `,

  PageLayout: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: ${props => !props.loginPage && !props.registerPage ? "70px" : "0"};
    overflow: auto;
`,
}