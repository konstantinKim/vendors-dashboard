import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Projects from '../components/Projects'

import * as projectsActions from '../actions/ProjectsActions'
import * as activeProjectsActions from '../actions/ActiveProjectsActions'
import * as completedProjectsActions from '../actions/CompletedProjectsActions'

import { IMG_HOST } from '../config/settings'

class App extends Component {
  render() {
    const { projects, completed, projectsPage } = this.props        
    const { switchTab } = this.props.projectsActions
    const { getCompletedProjects } = this.props.completedProjectsActions
    const { getActiveProjects } = this.props.activeProjectsActions    

    return <div>
      <Header imgHost={IMG_HOST} />       
      <Projects projects={projects} completed={completed.projects} activeTab={projectsPage.activeTab} switchTab={switchTab} getCompletedProjects={getCompletedProjects} getActiveProjects={getActiveProjects} imgHost={IMG_HOST} />      
    </div>
  }
}

function mapStateToProps(state) {
  return {    
    projects: state.activeProjects,
    completed: state.completedProjects,
    projectsPage: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    projectsActions: bindActionCreators(projectsActions, dispatch),
    activeProjectsActions: bindActionCreators(activeProjectsActions, dispatch),
    completedProjectsActions: bindActionCreators(completedProjectsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)