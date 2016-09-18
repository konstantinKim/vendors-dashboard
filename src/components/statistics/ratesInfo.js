import React, { Component } from 'react'

export default class RatesInfo extends Component {  
  
  render() {                 
    return <div>                        
      <div id="statistics-diversion-rate-container" className="container-gh">
        <div className="row">
          <div className="col-gh-3">
            <div className="rates border-right">Overall Diversion Rate&nbsp;&nbsp;–&nbsp;&nbsp;<span>83.41%</span></div>
          </div>
          <div className="col-gh-3">
            <div className="rates border-right">Non-Inert Diversion Rate&nbsp;&nbsp;–&nbsp;&nbsp;<span>69.52%</span></div>
          </div>
          <div className="col-gh-3">
            <div style={{padding: '1px 0px 0px 0px'}} className="rates">Inert Diversion Rate&nbsp;&nbsp;–&nbsp;&nbsp;<span>95.00%</span></div>
          </div>
        </div>
      </div>
    </div>
  }
}
