import { combineReducers } from "redux"
import homeReducer from 'views/home/reducer'

export default combineReducers({
  tasks: homeReducer
})