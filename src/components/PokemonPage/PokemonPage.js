import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import SinglePokemonCard from '../SinglePokemonCard/SinglePokemonCard';
import noPokemonFound from '../../assets/no-pokemon-found.svg';
import './PokemonPage.css';

const PokemonPage = () => {

  const { currentPageResults } = useContext(PokemonContext);

  return (
    // pagination
    // filter
    <>
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
    </>

  );
}

export default PokemonPage;
