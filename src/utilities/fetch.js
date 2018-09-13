export const fetchCurry = (origin) => (...paths) => {
  const url = origin + paths.join('');
  return fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch(error => error);
}

const pokemon = 'http://localhost:3001/';

//array
export const fetchTypes = () => fetchCurry(pokemon)('types');
/*
[
  {
    "id": "1",
    "name": "normal",
    "pokemon": [
      "16",
      "17",
      "18",
      "19",
      "20"
    ]
  },
] */

//object
export const fetchTypeSepcific = (id) => fetchCurry(pokemon)('types/', id);

//array
export const fetchPokemon = () => fetchCurry(pokemon)('pokemon');

//object
export const fetchPokemonSepcific = (id) => fetchCurry(pokemon)('pokemon/', id);