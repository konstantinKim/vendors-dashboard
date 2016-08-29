import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import * as authActions from '../actions/AuthActions'

import { IMG_HOST } from '../config/settings'

class LoginContainer extends Component {
  render() {    
    const { login } = this.props.loginActions    
    return <div>
        <Login imgHost={IMG_HOST} login={login} />
    </div>
  }
}

function mapStateToProps(state) {
  return {    
    errors: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    loginActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)