import styled from 'styled-components';

export const Styled = {
    Container: styled.div`
        width: 100%;
        height: 100%;
        margin: 20px 0;
        display: flex;
        justify-content: center;
    `,

    Content: styled.div`
        width: 90%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1rem;
        justify-content: center;
    `,

};