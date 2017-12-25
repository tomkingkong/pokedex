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
    console.log(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${value}`, done);
    var { value, done } = generator.next()
  }

  console.log(`https://pokeapi.co/api/v2/pokemon/?limit=11&offset=${value}`, done);
  return `https://pokeapi.co/api/v2/pokemon/?limit=11&offset=${value}`
}
