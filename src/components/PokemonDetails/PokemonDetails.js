import React, { useContext } from 'react';
import './PokemonDetails.css';
import { Link } from 'react-router-dom';
import PokemonDetailsCard from '../PokemonDetailsCard/PokemonDetailsCard';

const PokemonDetails = ({ match }) => {

  const pokemonName = match.params.pokemonName;

  return (
    <section className='pokemon-details'>
      <Link to='/pokemon-page' className='go-back-pokemon-page'>Go back to POKEMON page</Link>
      <PokemonDetailsCard pokemonName={pokemonName} add={true} />
    </section>
  )
}

export default PokemonDetails;