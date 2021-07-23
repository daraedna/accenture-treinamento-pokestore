import React from 'react';
import Cards from '../../components/Cards';

import { Styled } from './styles';
const pokemons = [1, 2, 3, 4, 5, 6, 7, 8]

function Home() {
  return (
    <Styled.Container>
      <Styled.Content>
        {pokemons.map((pokemon) => (
          <Cards />
        ))}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Home;