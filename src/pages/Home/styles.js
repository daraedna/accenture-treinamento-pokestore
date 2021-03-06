import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Styled = {
    Container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    Content: styled.div`
        width: 90%;
        max-width: 1350px;
        display: grid;
        margin-top: 40px;
        flex: 1;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        justify-content: center;
    `,

    ContainerArrow: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: 200px;
    `,

    Arrow: styled.button`
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${mixins.colors.card};
        width: 60px;
        height: 60px;
    `,

    ContentLoading: styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-top: 40px;
        align-items: center;
    `
};
