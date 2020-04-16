import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';

const FilterPokemonType = () => {

  const  { currentPokemonTypes, setChosenPokemonType } = useContext(PokemonContext);

  return (
    <div className='sort-pokemon'>
      <label
          htmlFor='sort'
          className='sort-title'
        >
          FILTER BY TYPE
      </label>
      <select
        id='sort'
        name='sort'
        onChange={(e) => setChosenPokemonType(e.target.value)}
        className='sort-pokemon__select'
      >
        <option value="" hidden>choose type</option>
        <option value="all" >all</option>
        {currentPokemonTypes.map((type, id) => (
          <option
            key={id}
            value={type}
          >
            {type}
          </option>
        )) }
      </select>
    </div>
  )
}

export default FilterPokemonType;