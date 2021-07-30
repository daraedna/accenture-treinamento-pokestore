import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Styled = {
  Container: styled.div`
   .modal-header {
     border-bottom: none;
   }

   .modal-title {
     text-transform: capitalize;
   }

   .content-wrapper {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 1.2rem;
     text-align: center;
     color: ${mixins.colors.text};
      padding-bottom: 0.8rem ;

     h4 {
       font-weight: 700;
     }
   }
  `
}