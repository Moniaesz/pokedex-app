import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';

const FilterPokemonType = () => {

  const  { currentPokemonTypes, setChosenPokemonType } = useContext(PokemonContext);

  return (
    <div className='sort-pokemon'>
      <h3>FILTER BY TYPE</h3>
      <select onChange={(e) => {setChosenPokemonType(e.target.value)}} className='sort-pokemon__select'>
        <option value="" hidden>choose Pokemon type</option>
        {currentPokemonTypes.map((type, id) => (
          <option key={id} value={type}>{type}</option>
        )) }
      </select>
    </div>
  )
}

export default FilterPokemonType;