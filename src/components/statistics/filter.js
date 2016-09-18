import React, { Component } from 'react'

export default class Filter extends Component {    
  
  render() {                     
    return <div>                        
      <form action method name>
        <input type="reset" defaultValue="Clear" className="filter-button" />
        <input type="submit" defaultValue="Filter" className="filter-button" />
        <span className="filter-calendar"><input type="text" id="filter-to" data-date-format="mm/dd/yy" defaultValue placeholder="select date" className="input-calendar" /></span>
        <span style={{float: 'right', paddingLeft: 9}}>To</span>
        <span className="filter-calendar"><input type="text" id="filter-from" data-date-format="mm/dd/yy" defaultValue placeholder="select date" className="input-calendar" /></span>
        <span style={{float: 'right'}}>From</span>
      </form>
    </div>
  }
}
