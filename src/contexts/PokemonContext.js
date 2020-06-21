import React, { createContext, useContext, useEffect, useState } from 'react';
import { ErrorsContext } from './ErrorsContext';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {

  const [ pokemonCache, setPokemonCache ] = useState({});
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ currentPageResults, setCurrentPageResults ] = useState([]);
  const [ allPokemonCount, setAllPokemonCount ] = useState(0);
  const [ limitValue, setLimitValue ] = useState(10);
  const [ nameInputValue, setNameInputValue ] = useState('');
  const [ currentPokemonTypes, setCurrentPokemonTypes ] = useState([]);
  const [ chosenPokemonType, setChosenPokemonType ] = useState('');
  const favouritesFromLocalStorage = JSON.parse(localStorage.getItem('favourites'));
  const [ favourites, setFavourites ] = useState(favouritesFromLocalStorage === null ? [] : favouritesFromLocalStorage);

  const { setFetchingError } = useContext(ErrorsContext);

  useEffect(() => {
    setCurrentPokemonTypes([]);

    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitValue}&offset=${limitValue * (currentPage - 1)}`)
      .then(res => res.json())
      .then(data => {
        setCurrentPageResults(data.results);
        setAllPokemonCount(data.count);
      })
      .catch(() => setFetchingError(true));

  }, [currentPage, limitValue]);

  // update current Pokemon list on page change
  const updatePokemonResults = (direction) => {
    setChosenPokemonType('all');
    setNameInputValue('');
    setCurrentPage((c) => {
      if (direction === 'prev') {
        const firstPage = 1;
        if (c - 1 <= firstPage) {
          return firstPage;
        }
        return c - 1;
      }
      if (direction === 'next') {
        const lastPage = Math.ceil(allPokemonCount / limitValue);
        if (c + 1 >= lastPage) {
          return lastPage;
        }
        return c + 1;
      }
    });
  }

  // add favourite Pokemon names to localStorage
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  // sort Pokemon
  const sortAZ= () => {
    const sortedAZ = currentPageResults.sort((a, b) => a.name > b.name ? 1 : -1);
    setCurrentPageResults([...sortedAZ]);
  }

  const sortZA= () => {
    const sortedZA = currentPageResults.sort((a, b) => a.name > b.name ? -1 : 1);
    setCurrentPageResults([...sortedZA]);
  }

  const handleSortFilterChange = (chosenFilter) => {
    if (chosenFilter === 'a-z') {
      sortAZ()
    }
    if (chosenFilter === 'z-a') {
      sortZA()
    }
  }

  // check if Pokemon is already favourite
  const isPokemonFavourite = (pokemonName) => {
    const pokemonInFavourites = favourites.find(favourite => favourite === pokemonName)
    if (pokemonInFavourites) {
      return true;
    }
    if(!pokemonInFavourites) {
      return false;
    }
  }

  // add Pokemon to/remove from favourites
  const toggleFavourites = (pokemonName) => {
    if (isPokemonFavourite(pokemonName)) {
      const updatedFavourites = favourites.filter((favourite => favourite !== pokemonName));
      setFavourites([...updatedFavourites])
    }
    if (!isPokemonFavourite(pokemonName)) {
      const updatedFavourites = favourites.concat([pokemonName])
      setFavourites([...updatedFavourites])
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonCache,
        setPokemonCache,
        currentPage,
        currentPageResults,
        allPokemonCount,
        updatePokemonResults,
        handleSortFilterChange,
        nameInputValue,
        setNameInputValue,
        favourites,
        isPokemonFavourite,
        toggleFavourites,
        currentPokemonTypes,
        setCurrentPokemonTypes,
        chosenPokemonType,
        setChosenPokemonType,
        limitValue,
        setLimitValue
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider;