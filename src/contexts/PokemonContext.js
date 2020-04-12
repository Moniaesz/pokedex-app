import React, { createContext, useEffect, useState } from 'react';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {

  const [ pokemonCache, setPokemonCache ] = useState({});
  const [ limitValue, setLimitValue ] = useState(10);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ currentPageResults, setCurrentPageResults ] = useState([]);

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitValue}&offset=${limitValue * (currentPage - 1)}`)
      .then(res => res.json())
      .then(data => {
        setCurrentPageResults(data.results);
      })
      .catch((err) => console.log('fetching error', err))

  }, [currentPage, limitValue]);


  return (
    <PokemonContext.Provider
      value={{
        pokemonCache,
        setPokemonCache,
        limitValue,
        currentPage,
        currentPageResults

      }}
    >
      {props.children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider;