import React, { useEffect, useState } from 'react';
import {ContainerCard} from './styles';
import Button from '../Button';
import IconType from '../../assets/types';

import { apiPokemon } from '../../services/apiPokemon';
import { mixins } from '../../styles/mixins';

export default function Cards({ name }) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  const loadPokemon = async() => {
    setLoading(true);
    try {
      const response = await apiPokemon.get(`/pokemon/${name}/`)
      const { id, types, sprites, base_experience } = response.data;

      setPokemon({
        id,
        image: sprites.other['official-artwork'].front_default,
        price: `${base_experience},00`,
        type: types.map((pokemonType) => {
          const typeName = pokemonType.type.name;

          return {
            name: typeName,
            color: mixins.colors.type[typeName],
            icon: IconType[typeName],
          };
        })
      })
    } catch (error) {
      alert("Não foi possivel carregar pokemon")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPokemon()
  }, []);

  return (
    <ContainerCard.Container>
      {!loading && pokemon && (
        <ContainerCard.Content>
          <ContainerCard.Avatar src={pokemon.image} alt="Imagem Pokemon"/>
          <ContainerCard.Title>
            {name && name}
          </ContainerCard.Title>
          <ContainerCard.ContainerIcon>
            {pokemon.type && pokemon.type.map(pokemonType => (
              <ContainerCard.PokemonType color={pokemonType.color} key={pokemonType.name}>
                {pokemonType.icon}
              </ContainerCard.PokemonType>
            ))}
          </ContainerCard.ContainerIcon>
          <ContainerCard.Price>
            R$ {pokemon.price}
          </ContainerCard.Price>
          <ContainerCard.Button>
            <Button type="primary">
              Adicionar ao Carrinho
            </Button>
          </ContainerCard.Button>
        </ContainerCard.Content>
      )}

      {loading && Object.keys(pokemon).length === 0 && (
       <ContainerCard.Loading />
      )}
    </ContainerCard.Container>
  )
}