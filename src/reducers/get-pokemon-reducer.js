const getPokemon = (state=[], action) => {
  switch(action.type) {
    case 'GET_POKEMON': {
      return [...state, ...action.results]
    }
    default:
      return state
  }
}

export default getPokemon
