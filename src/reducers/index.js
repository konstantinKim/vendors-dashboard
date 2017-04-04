import { combineReducers } from 'redux'
import projects from './projects'
import activeProjects from './activeProjects'
import completedProjects from './completedProjects'
import facilityReporting from './facilityReporting'
import addTicketForm from './addTicketForm'
import addTicketSrForm from './addTicketSrForm'
import editTicketForm from './editTicketForm'
import editTicketSrForm from './editTicketSrForm'
import statistics from './statistics'
import settings from './settings'
import search from './search'

export default combineReducers({  
  activeProjects,
  completedProjects,
  facilityReporting,
  projects,
  addTicketForm,
  addTicketSrForm,
  editTicketForm,
  editTicketSrForm,
  statistics,
  settings,
  search
})