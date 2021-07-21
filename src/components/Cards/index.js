import React from 'react';
import {ContainerCard} from './styles'

export function Cards() {
  return (
    <ContainerCard.Container>
      <ContainerCard.Content>
        <ContainerCard.Avatar/>
        <ContainerCard.Title>
          Pikachu
        </ContainerCard.Title>
        <ContainerCard.Description>
          É um tipo x Pokékon introduzido na...
        </ContainerCard.Description>
      </ContainerCard.Content>
    </ContainerCard.Container>
  )
}

