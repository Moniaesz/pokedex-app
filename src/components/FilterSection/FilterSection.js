import React from 'react';
import SortPokemon from '../SortPokemon/SortPokemon';
import FilterPokemonName from '../FilterPokemonName/FilterPokemonName';
import './FilterSection.css';
import FilterPokemonType from '../FilterPokemonType/FilterPokemonType';

const FilterSection = () => (
  <section className='filter-pokemon'>
    <SortPokemon />
    <FilterPokemonName />
    <FilterPokemonType />
  </section>
);

export default FilterSection;