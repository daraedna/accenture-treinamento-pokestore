import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Loading from '../../components/Loading';
import { apiPokemon } from '../../services/apiPokemon';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Styled } from './styles';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const { data } = await apiPokemon.get(`/pokemon/?offset=${offset}&limit=10`);
      setPokemons(data.results);
      setCount(Math.round(data.count/10))
    } catch (error) {
      alert("Error ao buscar pokemons");
    } finally {
      setLoading(false);
    }
  }

  const firstPage = () => {
    if(page !== 0) {
      setOffset(0)
      setPage(1)
    }
  }

  const prevPage = () => {
    if(offset !== 0 ){
      setOffset(pState => pState - 10)
      setPage(pState => pState - 1)
    }
  }

  const nextPage = () => {
    if(page !== count) {
      setOffset(pState => pState + 10)
      setPage(pState => pState + 1)
    }
  }

  const lastPage = () => {
    if(page !== count) {
      setOffset(1110)
      setPage(count)
    }
  }

  useEffect(() => {
    loadPokemons()
  }, [offset])

  return (
    <>
    <Styled.Container>
      <Navbar />
      {loading && <Loading />}

      {!loading && pokemons.length !== 0 &&
      <>
        <Styled.Content>
          {pokemons.map((pokemon) => (
            <Cards name={pokemon.name} />
          ))}

        </Styled.Content>
        <Styled.ContainerArrow>
          <Styled.Arrow onClick={firstPage} disabled={offset === 0}>
            <MdKeyboardArrowLeft
              size={20}
              style={{marginRight: '-10px'}}
            />
            <MdKeyboardArrowLeft
              size={20}
            />
          </Styled.Arrow>
          <Styled.Arrow onClick={prevPage} disabled={offset === 0}>
            <MdKeyboardArrowLeft
              size={20}
            />
          </Styled.Arrow>
          {page}/{count}
          <Styled.Arrow onClick={nextPage} disabled={page === count}>
            <MdKeyboardArrowRight
              size={20}
            />
          </Styled.Arrow>
          <Styled.Arrow onClick={lastPage} disabled={page === count}>
            <MdKeyboardArrowRight
              size={20}
              style={{marginRight: '-10px'}}
            />
            <MdKeyboardArrowRight
              size={20}
            />
          </Styled.Arrow>
        </Styled.ContainerArrow>
      </>
      }
      <Footer />
    </Styled.Container>
  </>
  )
}

export default Home;