export function fetchSinglePokemonDetails (pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => res.json())
    .then(singlePokemonDetails => singlePokemonDetails);
}