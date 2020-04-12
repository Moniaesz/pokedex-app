import React, { createContext, useEffect, useState } from 'react';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {

  const [ pokemonCache, setPokemonCache ] = useState({});
  const [ limitValue, setLimitValue ] = useState(10);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ currentPageResults, setCurrentPageResults ] = useState([]);
  const [ allPokemonCount, setAllPokemonCount ] = useState(0);
  const [ nameInputValue, setNameInputValue ] = useState('');



  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitValue}&offset=${limitValue * (currentPage - 1)}`)
      .then(res => res.json())
      .then(data => {
        setCurrentPageResults(data.results);
        setAllPokemonCount(data.count);
      })
      .catch((err) => console.log('fetching error', err))

  }, [currentPage, limitValue]);


  const updatePokemonResults = (direction) => {
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

  // sorting Pokemon
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

  return (
    <PokemonContext.Provider
      value={{
        pokemonCache,
        setPokemonCache,
        limitValue,
        currentPage,
        currentPageResults,
        allPokemonCount,
        updatePokemonResults,
        handleSortFilterChange,
        nameInputValue,
        setNameInputValue

      }}
    >
      {props.children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider;