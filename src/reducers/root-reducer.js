import { combineReducers } from 'redux';
import { typesReducer } from './typesReducer';
// import { pokemonReducer } from './pokemonReducer';

const rootReducer = combineReducers({
  types: typesReducer
})

export default rootReducer
