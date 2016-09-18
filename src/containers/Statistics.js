import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Overview from '../components/statistics/overview'
import CarbonFootprint from '../components/statistics/carbonFootprint'
import Materials from '../components/statistics/materials'
import Facilities from '../components/statistics/facilities'
import ProjectTypes from '../components/statistics/projectTypes'
import BuildingTypes from '../components/statistics/buildingTypes'
import HaulingTypes from '../components/statistics/haulingTypes'

import * as statisticsActions from '../actions/statistics/StatisticsActions'

import { IMG_HOST } from '../config/settings'

class Statistics extends Component {  
  renderTab(){
    const { statistics, statisticsActions } = this.props
    if(statistics.currentTab == 'overview'){
        return(<Overview imgHost={IMG_HOST} statistics={statistics} statisticsActions={statisticsActions}  />);                    
    }
    if(statistics.currentTab == 'carbonFootprint'){
        return(<CarbonFootprint imgHost={IMG_HOST} statistics={statistics} statisticsActions={statisticsActions}  />);                    
    }        
    if(statistics.currentTab == 'materials'){
        return(<Materials imgHost={IMG_HOST} statistics={statistics} statisticsActions={statisticsActions}  />);                    
    }        
    if(statistics.currentTab == 'facilities'){
        return(<Facilities imgHost={IMG_HOST} statistics={statistics} statisticsActions={statisticsActions}  />);                    
    }        
    if(statistics.currentTab == 'projectTypes'){
        return(<ProjectTypes imgHost={IMG_HOST} statistics={statistics} statisticsActions={statisticsActions}  />);                    
    }        
    if(statistics.currentTab == 'buildingTypes'){
        return(<BuildingTypes imgHost={IMG_HOST} statistics={statistics} statisticsActions={statisticsActions}  />);                    
    }        
    if(statistics.currentTab == 'haulingTypes'){
        return(<HaulingTypes imgHost={IMG_HOST} statistics={statistics} statisticsActions={statisticsActions}  />);                    
    }        
  }

  render() {            
    return <div>
            <Header imgHost={IMG_HOST} activeTab={this.props.statistics.currentTab} switchTab={this.props.statisticsActions.switchTab}  />                   
            {this.renderTab()}
    </div>
  }
}

function mapStateToProps(state) {
  return {    
    statistics: state.statistics,    
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    statisticsActions: bindActionCreators(statisticsActions, dispatch),    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)