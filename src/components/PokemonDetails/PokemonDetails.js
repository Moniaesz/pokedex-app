import React, { useContext, useEffect } from 'react';
import './PokemonDetails.css';
import { Link } from 'react-router-dom';
import loadingIcon from '../../assets/loading.svg';
import { PokemonContext } from '../../contexts/PokemonContext';
import PokemonDetailsCard from '../PokemonDetailsCard/PokemonDetailsCard';

const PokemonDetails = ({ match }) => {

  const { pokemonCache, setPokemonCache } = useContext(PokemonContext);
  const pokemonName = match.params.pokemonName;

  useEffect(() => {
    if (!pokemonCache[pokemonName]) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(pokemonDescription => {
        setPokemonCache((prevDetails) => ({
            ...prevDetails,
            [pokemonName]: pokemonDescription
          }))
        })
        .catch((err) => {
            console.log('fetching pokemon details error', err)
        });
    }
  }, []);

  return (
    <section className='pokemon-details'>
      <Link to='/pokemon-page' className='go-back-pokemon-page'>Go back to POKEMON page</Link>
      {pokemonCache[pokemonName]
       ?
        <PokemonDetailsCard pokemonName={pokemonName} add={true} />
        :
          <div className='loading'>
            <h4 className='loading__heading'>Loading Pokemons details...</h4>
            <img alt='loading spinner' src={loadingIcon} className='loading-spinner'/>
          </div>
      }
    </section>
  )
}

export default PokemonDetails;