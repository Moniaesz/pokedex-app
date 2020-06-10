export async function fetchSinglePokemonDetails(pokemonName) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  let singlePokemonData = await response.json()
  return singlePokemonData;
}
