import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import activeProjects from './activeProjects'
import completedProjects from './completedProjects'

export default combineReducers({
  page,
  user,
  activeProjects,
  completedProjects
})