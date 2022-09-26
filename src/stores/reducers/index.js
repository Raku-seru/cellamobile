import { combineReducers } from 'redux'
import languageReducer from './languageReducer'
import userReducer from './userReducer'
import attendanceReducer from './attendanceReducer';

const reducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  attendance: attendanceReducer
})

export default reducer
