import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import './PageResultsCounter.css';

const PageResultsCounter = () => {

  const { limitValue, setLimitValue } = useContext(PokemonContext);

  const pageResultsLimits = [ 10, 20, 40, 60 ];

  const changeLimit = (newLimit) => {
    setLimitValue(newLimit);
  }

  return (
    <div className='page-results'>
      <h6>Results per page:
        {pageResultsLimits.map(limit => (
          <span
            key={limit}
            onClick={() => changeLimit(limit)}
            className='page-results__count'
            style={limit === limitValue ? {fontWeight: 'bold'} : null}
          >
            {limit}
          </span>
        ))}
      </h6>
    </div>
  )
}

export default PageResultsCounter;