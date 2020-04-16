import React from 'react';
import PokemonDetailsCard from '../PokemonDetailsCard/PokemonDetailsCard';
import './PokemonDetails.css';
import { Link } from 'react-router-dom';
import { routes } from '../../helpers/routes';

const PokemonDetails = ({ match }) => {

  const pokemonName = match.params.pokemonName;

  return (
    <section className='pokemon-details'>
      <Link
        to={routes.pokemon}
        className='go-back-pokemon-page'
      >
        Go back to POKEMON page
      </Link>
      <PokemonDetailsCard pokemonName={pokemonName} add={true} />
    </section>
  )
}

export default PokemonDetails;