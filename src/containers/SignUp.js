import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import * as authActions from '../actions/AuthActions'

import { IMG_HOST } from '../config/settings'

class SignUpContainer extends Component {
  render() {        
    const { signUp, confirmSignUp } = this.props.loginActions    
    return <div>
        <SignUp imgHost={IMG_HOST} signUp={signUp} confirmSignUp={confirmSignUp} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)