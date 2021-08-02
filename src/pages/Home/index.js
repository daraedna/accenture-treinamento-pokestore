import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Loading from '../../components/Loading';
import { apiPokemon } from '../../services/apiPokemon';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';

import { Styled } from './styles';

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
      setCount(Math.round(data.count / 10))
    } catch (error) {
      alert("Error ao buscar pokemons");
    } finally {
      setLoading(false);
    }
  }

  const firstPage = () => {
    if (page !== 0) {
      setOffset(0)
      setPage(1)
    }
  }

  const prevPage = () => {
    if (offset !== 0) {
      setOffset(pState => pState - 10)
      setPage(pState => pState - 1)
    }
  }

  const nextPage = () => {
    if (page !== count) {
      setOffset(pState => pState + 10)
      setPage(pState => pState + 1)
    }
  }

  const lastPage = () => {
    if (page !== count) {
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

        <Carousel indicators={false} className="w-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
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
                  style={{ marginRight: '-10px' }}
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
                  style={{ marginRight: '-10px' }}
                />
                <MdKeyboardArrowRight
                  size={20}
                />
              </Styled.Arrow>
            </Styled.ContainerArrow>
          </>
        }
      </Styled.Container>
    </>
  )
}

export default Home;