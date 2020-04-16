import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import pokemonPlaceholder from '../../assets/pokemon-placeholder.svg';
import addTofavIcon from '../../assets/add_to_fav_icon.svg';
import favIcon from '../../assets/fav_icon.svg';
import { Link } from 'react-router-dom';
import './SinglePokemonCard.css';
import pokemonTypes from  '../../helpers/pokemon-types';

const SinglePokemonCard = ({ name }) => {

  const { pokemonCache, setPokemonCache, isPokemonFavourite, toggleFavourites, setCurrentPokemonTypes, currentPageResults } = useContext(PokemonContext);

  useEffect(() => {
    if (!pokemonCache[name]) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(pokemonDescription => {
        setPokemonCache((prevDetails) => ({
          ...prevDetails,
          [name]: pokemonDescription
        }))
        pokemonDescription.types.map(({ type }) => (setCurrentPokemonTypes((prevTypes => [...new Set([...prevTypes, type.name])]))
        ))
        })
        .catch((err) => {
            console.log('fetching pokemon details error', err)
        });
    } else {
      pokemonCache[name].types.map(({ type }) => (
        setCurrentPokemonTypes((prevTypes => [...new Set([...prevTypes, type.name])]))
      ))
    }
  }, [currentPageResults]);

  return (
    <li className='pokemons-names__item'>
      <img
          alt='add to favourites'
          src={isPokemonFavourite(name) ? favIcon : addTofavIcon}
          className='add-to-fav__img--list'
          onClick={() => toggleFavourites(name)}
        />
      <h3 className='single-pokemon__name'>{name}</h3>
      <img
        alt={name}
        src={pokemonCache[name] ? pokemonCache[name].sprites.front_default : pokemonPlaceholder}
        className='single-pokemon__img'
      />
      {
        pokemonCache[name] &&
        <>
        <div>
          <h5>type</h5>
          <ul className='pokemon-detail__types'>
            {pokemonCache[name].types.map(({type}) => {
              const typeIcon = pokemonTypes.find((pokemon) => pokemon.type === type.name);
              return (
                <li key={type.name}>
                  <img
                    alt={type.name}
                    src={typeIcon.url}
                    className='type-icon'
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <Link
          to={`/pokemon-page/${name}`}
          className='btn single-pokemon__btn'
        >
          details
        </Link>
        </>
      }
    </li>
  );
}

export default SinglePokemonCard;