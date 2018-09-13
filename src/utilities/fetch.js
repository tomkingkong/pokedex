export const fetchCurry = (origin) => (...paths) => {
  const url = origin + paths.join('');
  return fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch(error => error);
}

const pokemon = 'http://localhost:3001/';

export const fetchTypes = () => fetchCurry(pokemon)('types');
export const fetchTypeSepcific = (id) => fetchCurry(pokemon)('types/', id);
export const fetchPokemon = () => fetchCurry(pokemon)('pokemon');
export const fetchPokemonSepcific = (id) => fetchCurry(pokemon)('pokemon/', id);