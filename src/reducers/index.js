import { combineReducers } from 'redux'
import projects from './projects'
import activeProjects from './activeProjects'
import completedProjects from './completedProjects'

export default combineReducers({  
  activeProjects,
  completedProjects,
  projects
})