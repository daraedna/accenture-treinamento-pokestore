import React from 'react';
import { Styles } from './styles';
import Poke from '../../assets/poke.png';

export default function Loading() {
    return (
        <Styles.Loading>
            <Styles.ImgLoading src={Poke} />
        </Styles.Loading>
    )
}
