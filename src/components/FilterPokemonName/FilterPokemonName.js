import React, { useContext, useState , useEffect } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import searchIcon from '../../assets/search-color.svg';
import './FilterPokemonName.css';


const FilterPokemonName = () => {

 const { nameInputValue, setNameInputValue } = useContext(PokemonContext);

  return (
    <div className='filter-pokemon-name'>
      <form className='search-pokemon__form'>
      <h3>BROWSE BY NAME</h3>
        <div>
          <img alt='search Pokemon by name' src={searchIcon} className='search-icon'/>
        </div>
        <label htmlFor='pokemon-name'>
          <input
            type='search'
            placeholder='type Pokemon name'
            value={nameInputValue}
            onChange={(e) => setNameInputValue(e.target.value)}
            className='search-pokemon__input'
            id='pokemon-name'
          />
        </label>
      </form>
    </div>
  )
}

export default FilterPokemonName;