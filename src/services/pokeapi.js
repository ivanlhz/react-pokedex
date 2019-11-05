export const getPokemon = id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  return fetch(url).then(response => response.json())
}

export const getPokemonList = (offset = 0, limit = 20) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  return fetch(url).then(response => response.json())
}

export const getPokemonTypeInfo = (type = '') => {
  const url = `https://pokeapi.co/api/v2/type/${type}`
  return fetch(url).then(response => response.json())
}

export const getPokemonSpecies = id => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`
  return fetch(url).then(response => response.json())
}
