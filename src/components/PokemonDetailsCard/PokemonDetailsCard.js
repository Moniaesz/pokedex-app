import React , { useContext, useState } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import addTofavIcon from '../../assets/add_to_fav_icon.svg';
import favIcon from '../../assets/fav_icon.svg';
import pokemonTypes from '../../helpers/pokemon-types';
import './PokemonDetailsCard.css';

const PokemonDetailsCard = ({ pokemonName, add }) => {

  const [ isHovered, setIsHovered ] = useState(false);
  const { pokemonCache, isPokemonFavourite,toggleFavourites } = useContext(PokemonContext);

  return (
    <div className='pokemon-details__card'>
    {console.log(`pokemon ${pokemonName} already in fav: ${isPokemonFavourite}`)}
      <div className='add-to-fav__wrapper'>
        <img
          alt='add to favourites'
          src={isPokemonFavourite(pokemonName) ? favIcon : addTofavIcon}
          className='add-to-fav__img'
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onClick={() => toggleFavourites(pokemonName)}
        />
        {
          add && (
            <div className={isHovered ? 'add-to-fav-tooltip hovered' : 'add-to-fav-tooltip'}>
              <h5>add to favourites</h5>
              <img
                alt='add to favourites'
                src={favIcon}
                className='add-to-fav__tooltip-img'
              />
          </div>
          )
        }
      </div>
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
    </ul>
  </div>
  )
}

export default PokemonDetailsCard;