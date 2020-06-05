import React from 'react';
import notFoundIcon from '../../assets/not-found.svg';
import '../FetchingError/FetchingError.css';

const FetchingError = () => {
  return (
    <div className='fetching-error'>
      <h2>Fetching error. Try again.</h2>
      <img
        className='not-found__img'
        alt='fetching error'
        src={notFoundIcon}
      />
    </div>
  );
}

export default FetchingError;