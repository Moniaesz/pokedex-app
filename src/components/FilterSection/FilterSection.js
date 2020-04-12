import React from 'react';
import SortPokemon from '../SortPokemon/SortPokemon';
import FilterPokemonName from '../FilterPokemonName/FilterPokemonName';
import './FilterSection.css';

const FilterSection = () => (
  <section className='filter-pokemon'>
    <SortPokemon />
    <FilterPokemonName />
  </section>
);

export default FilterSection;