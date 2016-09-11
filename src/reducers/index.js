import { combineReducers } from 'redux'
import projects from './projects'
import activeProjects from './activeProjects'
import completedProjects from './completedProjects'
import addTicketForm from './addTicketForm'
import editTicketForm from './editTicketForm'

export default combineReducers({  
  activeProjects,
  completedProjects,
  projects,
  addTicketForm,
  editTicketForm
})