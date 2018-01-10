import { combineReducers } from 'redux'
import getPokemon from './get-pokemon-reducer'

const rootReducer = combineReducers({
  getPokemon
})

export default rootReducer
