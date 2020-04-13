import React , { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import pokemonTypes from '../../helpers/pokemon-types';
import './PokemonDetailsCard.css';

const PokemonDetailsCard = ({ pokemonName }) => {
  const { pokemonCache } = useContext(PokemonContext);

  return (
    <div className='pokemon-details__card'>
      {pokemonName}
      <img
        alt={pokemonCache[pokemonName].name}
        src={pokemonCache[pokemonName].sprites.front_default} className='pokemon-details__img'
      />
      <h3 className='pokemon-details__name'>{pokemonCache[pokemonName].name}</h3>
      <p>weight: {pokemonCache[pokemonName].weight}</p>
      <p>height: {pokemonCache[pokemonName].height}</p>
      <p>base experience: {pokemonCache[pokemonName].base_experience}</p>
      <h5>type/s:</h5>
      <ul className='pokemon-detail__types'>
        {pokemonCache[pokemonName].types.map(({type}) => {
          const typeIcon = pokemonTypes.find((pokemon) => pokemon.type === type.name);
          return (
            <li key={type.name}>
              <h6>{type.name}</h6>
              <img alt={type.name} src={typeIcon.url} className='type-icon'/>
            </li>
          )
        })}
    {/* {pokemonTypes.map(pokemon => (
      <img src={pokemon.url} className='type-icon'/>
    ))} */}
    </ul>
  </div>
  )
}

export default PokemonDetailsCard;