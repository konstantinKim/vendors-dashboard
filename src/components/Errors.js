import React, { Component } from 'react'

export default class Error extends Component {    
  render() {         
    return <div className="row" style={{lineHeight: '34px', textAlign: 'center', color: 'red'}}>{this.props.errorString}</div>    
  }
}
