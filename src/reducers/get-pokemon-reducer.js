const getPokemon = (state=[], action) => {
  console.log(action);
  switch(action.type) {
    case 'GET_POKEMON': {
      return [...state, ...action.results]
    }
    case 'ADD_STATS': {
      const { pokemon, stats } = action
      const index = state.indexOf(pokemon)
      const newPokemon = Object.assign({ stats }, pokemon)
      const newState = [...state]
      newState[index] = newPokemon
      return newState
    }
    default:
      return state
  }
}

export default getPokemon
