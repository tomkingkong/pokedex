export const pokemonReducer = (state=[], action) => {
  switch (action.type) {
  case 'POPULATE_POKEMON':
    return action.pokemon;
  default:
    return state;
  }
};
