import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Projects from '../components/Projects'

import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

import { BACKEND_HOST } from '../config/settings'

class App extends Component {
  render() {
    const { user, page, projects, completed } = this.props    
    const { getPhotos } = this.props.pageActions

    return <div>
      <Header host={BACKEND_HOST} /> 
      <Projects projects={projects} completed={completed.projects} host={BACKEND_HOST} />

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
    completed: state.completedProjects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)