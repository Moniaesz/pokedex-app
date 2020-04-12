import React from 'react';
import pokemonPlaceholder from '../../assets/pokemon-placeholder.svg';
import '../Header/Header.css';
import { Link } from 'react-router-dom'


const Header = () => (
  <header className='header'>
    <h1 className='app-name'>POKEDEX APP</h1>
    <img src={pokemonPlaceholder} alt='pokedex app logo' className='app-logo'/>
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/pokemon-page'>Pokemon</Link>
      </ul>
    </nav>
  </header>
);

export default Header;