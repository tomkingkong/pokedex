import { addImage } from '../helper'

export const fetchPokemon = async function(action, url){
  const initialFetch = await fetch(url)
  const response = await initialFetch.json()
  const pokemon = addImage(response.results, this.position)
  action(pokemon)
}
