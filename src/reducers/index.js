import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import projects from './projects'
import activeProjects from './activeProjects'
import completedProjects from './completedProjects'

export default combineReducers({
  page,
  user,
  activeProjects,
  completedProjects,
  projects
})