import React from 'react';
import { Styled } from './styles';

export default function Button({children, variant, ...props}) {
    switch (variant) {
        case "primary":
            return (
                <Styled.ButtonPrimary {...props}>{children}</Styled.ButtonPrimary >
            )
         case "secondary":
            return (
                <Styled.ButtonSecondary {...props}>{children}</Styled.ButtonSecondary >
            )
        case "text":
            return (
                <Styled.ButtonText {...props}>{children}</Styled.ButtonText>
            )

        default:
            break;
    }
}
