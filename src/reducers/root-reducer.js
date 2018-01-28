import { combineReducers } from 'redux'
import getPokemon from './get-pokemon-reducer'
import loaded from './loaded-reducer'

const rootReducer = combineReducers({
  getPokemon,
  loaded
})

export default rootReducer
