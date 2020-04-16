import React from 'react';
import notFoundIcon from '../../assets/not-found.svg';
import './Page404.css';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <section className='not-found'>
      <h5>Page not found</h5>
      <img
        className='not-found__img'
        alt='page not found'
        src={notFoundIcon}
      />
      <Link
        to='/pokemon-page'
        className='go-back-pokemon-page'
      >
        Go back to POKEMON page
      </Link>
    </section>
  )
}

export default Page404;