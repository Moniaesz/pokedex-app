import React from 'react';
import pokemonPlaceholder from '../../assets/pokemon-placeholder.svg';
import navFavIcon from '../../assets/heart.svg';
import './Header.css';
import { Link } from 'react-router-dom'


const Header = () => (
  <header className='header'>
    <div className='app-name'>
      <h1 className='app-name__heading'>POKEDEX APP</h1>
      <Link to='/'>
        <img
          src={pokemonPlaceholder}
          alt='pokedex app logo'
          className='app-logo'
        />
      </Link>
    </div>
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link to='/' className='nav__link'>Home</Link>
        </li>
        <li className='nav__item'>
          <Link to='/pokemon-page' className='nav__link'>Pokemon</Link>
                  </li>
        <li className='nav__item nav__item--fav'>
          <Link to='/favourites' className='nav__link'>
            <h5 className='nav-link__heading'>Favourites</h5>
            <img
              src={navFavIcon}
              className='nav-link__img'
              alt='favourites Pokemon'
            />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;