import React from 'react';
import pokemonPlaceholder from '../../assets/pokemon-placeholder.svg';
import './Header.css';
import { Link } from 'react-router-dom'


const Header = () => (
  <header className='header'>
    <div className='app-name'>
      <h1 className='app-name__heading'>POKEDEX APP</h1>
      <img src={pokemonPlaceholder} alt='pokedex app logo' className='app-logo'/>
    </div>
    <nav className='nav'>
      <ul className='nav__list'>
        <Link to='/' className='nav__link'>Home</Link>
        <Link to='/pokemon-page' className='nav__link'>Pokemon</Link>
      </ul>
    </nav>
  </header>
);

export default Header;