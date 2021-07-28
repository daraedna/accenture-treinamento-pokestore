import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Loading from '../../components/Loading';
import { apiPokemon } from '../../services/apiPokemon';

import { Styled } from './styles';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const { data } = await apiPokemon.get(`/pokemon/?offset=${offset}&limit=10`);
      setPokemons(data.results);
    } catch (error) {
      alert("Error ao buscar pokemons");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return (
    <Styled.Container>
      {loading && <Loading />}

      {!loading && pokemons.length !== 0 &&
        <Styled.Content>
          {pokemons.map((pokemon) => (
            <Cards name={pokemon.name} />
          ))}
        </Styled.Content>
      }
    </Styled.Container>
  )
}

export default Home;