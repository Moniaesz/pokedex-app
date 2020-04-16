import React, { useContext } from 'react';
import PokemonDetailsCard from '../PokemonDetailsCard/PokemonDetailsCard';
import './Favourites.css';
import { PokemonContext } from '../../contexts/PokemonContext';

const Favourites = () => {

  const { favourites } = useContext(PokemonContext);

  return (
    <section className='favourites'>
      <h3>Your favourites Pokemon</h3>
      <ul className='favourites__list'>
        {
          favourites.length > 0
            &&
            favourites.map(fav => (
            <PokemonDetailsCard
              pokemonName={fav}
              key={fav}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default Favourites;