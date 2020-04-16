import React from 'react';
import loadingIcon from '../../assets/loading.svg';
import './Loading.css';

const Loading = () => (
  <div className='loading'>
    <h4 className='loading__heading'>Loading Pokemon details...</h4>
    <img
      alt='loading spinner'
      src={loadingIcon}
      className='loading-spinner'
    />
  </div>
);

export default Loading;