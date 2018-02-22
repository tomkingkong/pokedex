import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'

const rootReducer = combineReducers({
  fake: fakeReducer
})

export default rootReducer
