import React, { useContext } from 'react';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { PokemonContext } from '../../contexts/PokemonContext';
import PokemonDetailsCard from '../PokemonDetailsCard/PokemonDetailsCard';
import FetchingError from '../FetchingError/FetchingError';
import './Favourites.css';

const Favourites = () => {

  const { favourites } = useContext(PokemonContext);
  const { fetchingError } = useContext(ErrorsContext);

  return (
    <>
      { fetchingError
        ? <FetchingError />
        : <section className='favourites'>
            <h3>Your favourites Pokemon</h3>
            {/* {
              favourites && ( */}
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
              {/* )
            } */}
          </section>
      }
    </>
  )
}

export default Favourites;