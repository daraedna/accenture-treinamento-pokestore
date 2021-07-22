import React from 'react';
import {ContainerCard} from './styles'
import Button from '../Button'

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
        <ContainerCard.Price>
          R$ 20.000.00
        </ContainerCard.Price>
        <ContainerCard.Button>
        <Button type="primary" className="Card_Button">
          Adicionar ao Carrinho
        </Button>
        </ContainerCard.Button>
      </ContainerCard.Content>
    </ContainerCard.Container>
  )
}

