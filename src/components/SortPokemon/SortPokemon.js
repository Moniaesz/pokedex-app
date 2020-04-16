import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext'
import './SortPokemon.css';

const SortPokemon = () => {

  const { handleSortFilterChange } = useContext(PokemonContext);

  return (
    <div className='sort-pokemon'>
      <label
          htmlFor='sort'
          className='sort-title'
        >
          SORT
      </label>
      <select
        id='sort'
        name='sort'
        onChange={(e) => handleSortFilterChange(e.target.value)}
        className='sort-pokemon__select'
      >
        <option value="" hidden>choose filter</option>
        <option value='a-z'>by name [A-Z]</option>
        <option value='z-a'>by name [Z-A]</option>
      </select>
    </div>
  )
}

export default SortPokemon;