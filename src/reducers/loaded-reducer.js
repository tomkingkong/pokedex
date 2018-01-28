const loaded = (state=[], action) => {
  const { pokemon, type } = action
  switch (type) {
    case 'LAZY_LOAD':
      return [...state, pokemon]
    default:
      return state
  }
}

export default loaded
