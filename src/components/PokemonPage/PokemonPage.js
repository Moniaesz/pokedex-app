import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import SinglePokemonCard from '../SinglePokemonCard/SinglePokemonCard';
import noPokemonFound from '../../assets/no-pokemon-found.svg';
import Pagination from '../Pagination/Pagination';
import './PokemonPage.css';
import FilterSection from '../FilterSection/FilterSection';

const PokemonPage = () => {

  const { currentPageResults, nameInputValue } = useContext(PokemonContext);

  let filteredPokemon = [];

  if (nameInputValue === '') {
    filteredPokemon = currentPageResults;
  }
  if (nameInputValue) {
    filteredPokemon = currentPageResults.filter(pokemon => pokemon.name.toLowerCase().includes(nameInputValue.toLowerCase()))
  }

  return (
    <section className='pokemons__page'>
      <FilterSection />
      <Pagination />
      <div className='pokemons-names__wrapper'>
        <ul className='pokemons-names__list'>
          {
            filteredPokemon &&
            filteredPokemon.length > 0
              ? (
                filteredPokemon.map(({ name }) => (
                  <SinglePokemonCard
                    key={name}
                    name={name}
                  />
                ))
              )
              : (
                <div>
                  <h3>No Pokemon found. Type something different.</h3>
                  <img src={noPokemonFound} className='no-pokemon__img' alt='no Pokemon found'/>
                </div>
              )
            }
        </ul>
      </div>
      <Pagination />
    </section>
  );
}

export default PokemonPage;
