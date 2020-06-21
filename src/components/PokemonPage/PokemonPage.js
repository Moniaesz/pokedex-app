import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import SinglePokemonCard from '../SinglePokemonCard/SinglePokemonCard';
import noPokemonFound from '../../assets/no-pokemon-found.svg';
import Pagination from '../Pagination/Pagination';
import './PokemonPage.css';
import FilterSection from '../FilterSection/FilterSection';
import FetchingError from '../FetchingError/FetchingError';

const PokemonPage = () => {

  const { currentPageResults, nameInputValue, chosenPokemonType, pokemonCache, setChosenPokemonType, setNameInputValue } = useContext(PokemonContext);
  const { fetchingError } = useContext(ErrorsContext);

  useEffect(() => {
    setChosenPokemonType('all');
    setNameInputValue('');
  }, []);

  const filterByType = (currentPageResults, chosenPokemonType) => {
    if (chosenPokemonType === '' || chosenPokemonType === 'all') {
      return currentPageResults;
    }
    let filteredCurrentPageResult = [];
    for (let i = 0; i < currentPageResults.length; i++) {
      let pokemonName = currentPageResults[i].name;

      let pokemon = pokemonCache[pokemonName];
      if (pokemonCache[pokemonName]) {
        let pokemonType = pokemon.types.map(({type}) => type.name);
        if (pokemonType.includes(chosenPokemonType)) {
          filteredCurrentPageResult.push(currentPageResults[i])
        }
      }
    }
    return filteredCurrentPageResult;
  }

  let filteredByName = [];

    filteredByName = currentPageResults.filter(pokemon => pokemon.name.toLowerCase().includes(nameInputValue.toLowerCase()));

    const filteredByType = filterByType(filteredByName, chosenPokemonType);

  return (
    <section className='pokemons__page'>

      {
        fetchingError === true
          ? <FetchingError />
          : <>
              <FilterSection />
              <Pagination />
              <div className='pokemons-names__wrapper'>
                <ul className='pokemons-names__list'>
                  {
                    filteredByType &&
                    filteredByType.length > 0
                      ? (
                        filteredByType.map(({ name }) => (
                          <SinglePokemonCard
                            key={name}
                            name={name}
                          />
                        ))
                      )
                      : (
                        <div>
                          <h3>No Pokemon found. Type something different.</h3>
                          <img
                            src={noPokemonFound}
                            className='no-pokemon__img'
                            alt='no Pokemon found'
                          />
                        </div>
                      )
                    }
                </ul>
              </div>
              <Pagination />
            </>

      }

    </section>
  );
}

export default PokemonPage;
