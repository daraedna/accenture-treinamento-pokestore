import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ContainerCard } from './styles';
import Button from '../Button';
import IconType from '../../assets/types';

import { apiPokemon } from '../../services/apiPokemon';
import { mixins } from '../../styles/mixins';
import { useCart } from '../../hooks/contexts/CartProvider';

export default function Cards({ name }) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const { addProductToCart } = useCart()

  const loadPokemon = async () => {
    setLoading(true);
    try {
      const response = await apiPokemon.get(`/pokemon/${name}/`)
      const { id, types, sprites, base_experience } = response.data;

      setPokemon({
        id,
        image: sprites.other['official-artwork'].front_default,
        name,
        price: `${base_experience},00`,
        priceNumber: `${base_experience}`,
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

  const notify = () => toast.success("Adicionado ao carrinho!");

  const handleAddProduct = (product) => {
    addProductToCart(product)
    notify()
  }

  return (
    <ContainerCard.Container>
      {!loading && Object.keys(pokemon).length !== 0 && (
        <ContainerCard.Content>
          <ContainerCard.Avatar src={pokemon.image} alt="Imagem Pokemon" />
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
            <Button
              type="primary"
              onClick={() => handleAddProduct(pokemon)}
            >
              Adicionar ao Carrinho
            </Button>
          </ContainerCard.Button>
        </ContainerCard.Content>
      )}

      {Object.keys(pokemon).length === 0 && loading && (
        <ContainerCard.Loading />
      )}
    </ContainerCard.Container>
  )
}