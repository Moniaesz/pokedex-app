import React from 'react';
import './Home.css';
import heroImg from '../../assets/hero-img.jpg';
import pokemonAvatar from '../../assets/pokemon-avatar.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className='homepage'
      style={{backgroundImage: `url(${heroImg})`}}
    >
      <div className='homepage__content'>
        <h2>Welcome to POKEDEX</h2>
        <img
          src={pokemonAvatar}
          alt='pokemon avatar'
          className='pokemon-avatar'
        />
        <p className='homepage__content__description'>Browse through all Pokemon, find out details about each one and save your favourite ones!</p>
        <Link
          to='/pokemon-page'
          className='find-pokemon__btn'
        >
          Find Pokemon
        </Link>
      </div>
    </section>
  )
}

export default Home;