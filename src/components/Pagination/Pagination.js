import React, { useContext } from 'react';
import PageResultsCounter from '../PageResultsCounter/PageResultsCounter';
import { PokemonContext } from '../../contexts/PokemonContext';
import prevIcon from '../../assets/previous.svg';
import nextIcon from '../../assets/next.svg';
import './Pagination.css';

const Pagination = () => {

  const { updatePokemonResults, currentPage, allPokemonCount, limitValue } = useContext(PokemonContext);

  const lastPage = Math.ceil(allPokemonCount / limitValue);

  return (
    <div className='pagination'>
      <div className='pagination__pages'>
        <img
          className='pagination__btn'
          alt='go to previous page'
          src={prevIcon}
          onClick={() => updatePokemonResults('prev')}
        />
        <h5 className='pagination__heading'>page <span className='pagination__current-page'>{currentPage}</span> of {lastPage}</h5>
        <img
          className='pagination__btn'
          alt='go to next page'
          src={nextIcon}
          onClick={() => updatePokemonResults('next')}
        />
      </div>
      <PageResultsCounter />
    </div>
  );
}

export default Pagination;