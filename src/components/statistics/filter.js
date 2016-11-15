import React, { Component } from 'react'

export default class Filter extends Component {
  componentDidMount(){
    window.setCalendar('filterFormCalendar');
  }    

  onFilterSubmit(e) {        
    e.preventDefault()            
    const { statisticsActions, statistics } = this.props    
    statisticsActions.setDateRange(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)    
    //return statisticsActions.getRecyclingTotals(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)

    if('overview' == statistics.currentTab){
      return statisticsActions.getRecyclingTotals(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)
    }

    if('carbonFootprint' == statistics.currentTab){
      return statisticsActions.getCarbonFootprint(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)
    }

    if('materials' == statistics.currentTab){
      return statisticsActions.getMaterialsStats(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)
    }

    if('facilities' == statistics.currentTab){
      return statisticsActions.getFacilitiesStats(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)
    }

    if('projectTypes' == statistics.currentTab){
      return statisticsActions.getProjectsStats(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)
    }

    if('buildingTypes' == statistics.currentTab){
      return statisticsActions.getBuildingsStats(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)
    }

    if('haulingTypes' == statistics.currentTab){
      return statisticsActions.getHaulingStats(this.refs['filterDateFrom'].value, this.refs['filterDateTo'].value)
    }
  }  

  render() {                     
    const { statistics } = this.props
    return <div>                        
      <form action method name onSubmit={::this.onFilterSubmit}>      
        <input type="reset" defaultValue="Clear" className="filter-button" />
        <input type="submit" defaultValue="Filter" className="filter-button" />
        <span className="filter-calendar"><input type="text" id="filter-to" ref="filterDateTo" className="filterFormCalendar input-calendar" required="required" data-date-format="yyyy-mm-dd" readOnly="readonly" value={statistics.dateTo} /></span>
        <span style={{float: 'right', paddingLeft: 9}}>To</span>
        <span className="filter-calendar"><input type="text" id="filter-from" ref="filterDateFrom" className="filterFormCalendar input-calendar" required="required" data-date-format="yyyy-mm-dd" readOnly="readonly" value={statistics.dateFrom} /></span>
        <span style={{float: 'right'}}>From</span>
      </form>
    </div>
  }
}
