import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Projects from '../components/Projects'

import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as projectsActions from '../actions/ProjectsActions'
import * as completedProjectsActions from '../actions/CompletedProjectsActions'

import { BACKEND_HOST } from '../config/settings'

class App extends Component {
  render() {
    const { user, page, projects, completed, projectsPage } = this.props    
    const { getPhotos } = this.props.pageActions
    const { switchTab } = this.props.projectsActions
    const { getCompletedProjects } = this.props.completedProjectsActions

    return <div>
      <Header host={BACKEND_HOST} /> 
      <Projects projects={projects} completed={completed.projects} activeTab={projectsPage.activeTab} switchTab={switchTab} getCompletedProjects={getCompletedProjects} host={BACKEND_HOST} />

      <User name={user.name} />
      <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
    projects: state.activeProjects,
    completed: state.completedProjects,
    projectsPage: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    projectsActions: bindActionCreators(projectsActions, dispatch),
    completedProjectsActions: bindActionCreators(completedProjectsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)