import React, { useEffect, useState } from 'react';
import { Styled } from './styles';
import { toast } from 'react-toastify';
import Button from '../Button';
import IconType from '../../assets/types';

import { apiPokemon } from '../../services/apiPokemon';
import { mixins } from '../../styles/mixins';
import { useCart } from '../../hooks/contexts/CartProvider';
import ModalPokemon from '../ModalPokemon';
import ImgPoke from '../../assets/pokemon.png';

export default function Cards({ name }) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { addProductToCart } = useCart()

  const loadPokemon = async () => {
    setLoading(true);
    try {
      const response = await apiPokemon.get(`/pokemon/${name}/`)
      const {
        id,
        types,
        sprites,
        base_experience,
        weight,
        height
      } = response.data;

      setPokemon({
        id,
        image: sprites.other['official-artwork'].front_default,
        name,
        weight,
        height,
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
    <Styled.Container>
      {!loading && Object.keys(pokemon).length !== 0 && (
        <Styled.Content>
          <Styled.Avatar src={pokemon.image ? pokemon.image : ImgPoke} alt="Imagem Pokemon" />
          <Styled.Title>
            {name && name}
          </Styled.Title>
          <Styled.ContainerIcon>
            {pokemon.type && pokemon.type.map(pokemonType => (
              <Styled.PokemonType color={pokemonType.color} key={pokemonType.name}>
                {pokemonType.icon}
              </Styled.PokemonType>
            ))}
          </Styled.ContainerIcon>
          <Styled.Price>
            R$ {pokemon.price}
            <span onClick={() => setShowModal(true)}>Detalhes +</span>
          </Styled.Price>
          <Styled.Button>
            <Button
              type="primary"
              onClick={() => handleAddProduct(pokemon)}
            >
              Adicionar ao Carrinho
            </Button>
          </Styled.Button>
        </Styled.Content>
      )}

      {Object.keys(pokemon).length === 0 && loading && (
        <Styled.Loading />
      )}

      <ModalPokemon
        show={showModal}
        onHide={() => setShowModal(false)}
        title={name}
      >

        <Styled.ModalContent>
          <Styled.ModalImg>
            <Styled.Avatar src={pokemon.image ? pokemon.image : ImgPoke} alt="Imagem Pokemon" />
          </Styled.ModalImg>
          <div>
            <Styled.ModalContent>
              {pokemon.type && pokemon.type.map(pokemonType => (
                    <Styled.PokemonTypeModal color={pokemonType.color} key={pokemonType.name}>
                      {pokemonType.icon}{pokemonType.name}
                    </Styled.PokemonTypeModal>
                  ))}
            </Styled.ModalContent>

            <p>Peso: {pokemon.weight/10} Kg</p>
            <p>Altura: {pokemon.height/10} M</p>
            <Styled.Price>
            R$ {pokemon.price}
            </Styled.Price>


          </div>
        </Styled.ModalContent>
            <Button
              type="primary"
              onClick={() => handleAddProduct(pokemon)}
            >
              Adicionar ao carrinho
            </Button>
      </ModalPokemon>
    </Styled.Container>
  )
}