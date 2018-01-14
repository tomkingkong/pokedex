import Pokemon from 'pokemon-images'

export function* generateOffset(limit = 140, offset = 0) {
  while(!(offset === limit)) {
    yield offset
    offset += 20
  }
  return 140
}

export function* generateUrl() {
  const generator = generateOffset()
  var { value, done } = generator.next()
  while(!done) {
    yield `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${value}`
    var { value, done } = generator.next()
  }
  return `https://pokeapi.co/api/v2/pokemon/?limit=11&offset=${value}`
}

export const padNumber = number => number < 10 ? `00${number}` : `0${number}`

export const addImage = arrayOfPokemon => arrayOfPokemon.map(pokemon => ({
  ...pokemon,
  image: Pokemon.getSprite(pokemon.name)
}))
