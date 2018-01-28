export const getPokemon = results => ({
  type: 'GET_POKEMON',
  results
})

export const addStats = (pokemon, response) => ({
  type: 'ADD_STATS',
  pokemon,
  stats: response.stats
})

export const preLoad = pokemon => ({
    type: 'LAZY_LOAD',
    pokemon
})
