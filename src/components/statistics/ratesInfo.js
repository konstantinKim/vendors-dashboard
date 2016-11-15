import React, { Component } from 'react'

export default class RatesInfo extends Component {  
  
  render() {                 
    const { stats } = this.props                                        
    return <div>                        
      <div id="statistics-diversion-rate-container" className="container-gh">
        <div className="row">
          <div className="col-gh-3">
            <div className="rates border-right">Overall Diversion Rate&nbsp;&nbsp;–&nbsp;&nbsp;<span>{stats.diversionRate}%</span></div>
          </div>
          <div className="col-gh-3">
            <div className="rates border-right">Non-Inert Diversion Rate&nbsp;&nbsp;–&nbsp;&nbsp;<span>{stats.nonInertRate}%</span></div>
          </div>
          <div className="col-gh-3">
            <div style={{padding: '1px 0px 0px 0px'}} className="rates">Inert Diversion Rate&nbsp;&nbsp;–&nbsp;&nbsp;<span>{stats.inertRate}%</span></div>
          </div>
        </div>
      </div>
    </div>
  }
}
