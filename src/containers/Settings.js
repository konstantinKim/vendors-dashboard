import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Profile from '../components/settings/profile'
import ChangePassword from '../components/settings/changePassword'

import * as settingsActions from '../actions/settings/SettingsActions'

import { IMG_HOST } from '../config/settings'

class Settings extends Component {  
  renderTab(){
    const { settings, settingsActions } = this.props
    if(settings.currentTab == 'settingsProfile'){
        return(<Profile imgHost={IMG_HOST} settings={settings} settingsActions={settingsActions}  />);                    
    }    
    if(settings.currentTab == 'settingsChangePassword'){
        return(<ChangePassword imgHost={IMG_HOST} settings={settings} settingsActions={settingsActions}  />);                    
    }    
  }

  render() {        
    return <div>
            <Header imgHost={IMG_HOST} activeTab={this.props.settings.currentTab} switchTab={this.props.settingsActions.switchTab}   />                   
            {this.renderTab()}
    </div>
  }
}

function mapStateToProps(state) {
  return {    
    settings: state.settings,    
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    settingsActions: bindActionCreators(settingsActions, dispatch),    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)