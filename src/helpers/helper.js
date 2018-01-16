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

export const addImage = (arrayOfPokemon, position) => {
  return arrayOfPokemon.map(pokemon => ({
  ...pokemon,
  image: Pokemon.getSprite(pokemon.name),
  position: position.next().value
  })
 )
}

export function* addPosition(count=1) {
  while(count <= 151) {
    yield count
    count+=1
  }
}
