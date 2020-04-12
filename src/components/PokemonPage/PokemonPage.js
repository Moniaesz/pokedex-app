import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import SinglePokemonCard from '../SinglePokemonCard/SinglePokemonCard';
import noPokemonFound from '../../assets/no-pokemon-found.svg';
import './PokemonPage.css';
import Pagination from '../Pagination/Pagination';

const PokemonPage = () => {

  const { currentPageResults } = useContext(PokemonContext);

  return (
    <section className='pokemons__page'>
      <Pagination />
      <div className='pokemons-names__wrapper'>
        <ul className='pokemons-names__list'>
          {
            currentPageResults &&
            currentPageResults.length > 0
              ? (
                currentPageResults.map(({ name }) => (
                  <SinglePokemonCard
                    key={name}
                    name={name}
                  />
                ))
              )
              : (
                <div>
                  <h3>No Pokemon found. Type something different.</h3>
                  <img src={noPokemonFound} className='no-pokemon__img'/>
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
