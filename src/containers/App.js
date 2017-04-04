import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Projects from '../components/Projects'

import * as projectsActions from '../actions/ProjectsActions'
import * as activeProjectsActions from '../actions/ActiveProjectsActions'
import * as completedProjectsActions from '../actions/CompletedProjectsActions'
import * as addTicketFormActions from '../actions/AddTicketFormActions'
import * as addTicketSrFormActions from '../actions/AddTicketSrFormActions'
import * as editTicketFormActions from '../actions/EditTicketFormActions'
import * as editTicketSrFormActions from '../actions/EditTicketSrFormActions'

import { IMG_HOST } from '../config/settings'

class App extends Component {  
  render() {    
    const { projects, completed, facilities, projectsPage, sync, projectsActions, activeProjectsActions, addTicketForm, addTicketFormActions, editTicketForm, editTicketFormActions, addTicketSrForm, addTicketSrFormActions, editTicketSrForm, editTicketSrFormActions } = this.props                    
    const { switchTab } = this.props.projectsActions
    const { getCompletedProjects } = this.props.completedProjectsActions
    const { getActiveProjects } = this.props.activeProjectsActions        
    return <div>
      <Header imgHost={IMG_HOST} switchTab={switchTab} activeTab={projectsPage.activeTab} />       
      <Projects projects={projects} projectsActions={projectsActions} completed={completed.projects} facilities={facilities} activeTab={projectsPage.activeTab} projectsPage={projectsPage} switchTab={switchTab} getCompletedProjects={getCompletedProjects} getActiveProjects={getActiveProjects} imgHost={IMG_HOST} sync={sync} activeProjectsActions={activeProjectsActions} addTicketForm={addTicketForm} addTicketFormActions={addTicketFormActions} editTicketForm={editTicketForm} editTicketFormActions={editTicketFormActions} addTicketSrForm={addTicketSrForm} addTicketSrFormActions={addTicketSrFormActions} editTicketSrForm={editTicketSrForm} editTicketSrFormActions={editTicketSrFormActions} />                     
    </div>
  }
}

function mapStateToProps(state) {
  return {    
    projects: state.activeProjects,
    completed: state.completedProjects,    
    facilities: state.facilityReporting,    
    projectsPage: state.projects,
    addTicketForm: state.addTicketForm,
    addTicketSrForm: state.addTicketSrForm,
    editTicketForm: state.editTicketForm,
    editTicketSrForm: state.editTicketSrForm
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    projectsActions: bindActionCreators(projectsActions, dispatch),
    activeProjectsActions: bindActionCreators(activeProjectsActions, dispatch),
    completedProjectsActions: bindActionCreators(completedProjectsActions, dispatch),
    addTicketFormActions: bindActionCreators(addTicketFormActions, dispatch),
    addTicketSrFormActions: bindActionCreators(addTicketSrFormActions, dispatch),
    editTicketFormActions: bindActionCreators(editTicketFormActions, dispatch),
    editTicketSrFormActions: bindActionCreators(editTicketSrFormActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)