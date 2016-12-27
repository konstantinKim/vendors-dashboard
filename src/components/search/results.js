import React, { Component } from 'react'

export default class Results extends Component {    

  componentDidUpdate(){   
    if(this.props.search.searchResults.length > 0){
        window.initializeGMap(this.props.search.searchResults)
    }     
  }       

  render() {  
    var QRCode = require('qrcode.react');  
    const { search } = this.props

    var facilitiesList
    if(search.searchResults.length > 0){
      facilitiesList = search.searchResults.map(function (item, index) {
        return (
          <div className="row" key={'facility_' + index}>
            <div className="recycler-list-container">
              <div className="column-3">{index+1}.</div>
              <div className="column-47" style={{paddingLeft: 20}}>
                <a className="link-blue"><span>{item.name}</span></a><br />
                {item.street}, {item.city}, {item.state} {item.zipcode}<br />
                <span className="address">{item.phone}<br />
                  <a className="link-blue" href={item.url} target="_blank">{item.url}</a></span><br /><br />                
              </div>
              <div className="column-30">{item.distance} miles away</div>
              <div className="column-20"><QRCode value={`BEGIN:VCARD
VERSION:2.1
N:${item.name} 
FN:
LN:
ORG:${item.name}
TITLE:
ADR;WORK:;;${item.street};${item.city};${item.state};${item.zipcode};
TEL;WORK;VOICE:${item.phone}
URL:http://${item.url}
END:VCARD`} /></div>
            </div>
          </div>          
        )
      })
    }

    return <div>
              {/* map */}
              <div className="row">
                <div style={{padding: 0, width: '100%', height: 460}} id="map_canvas" />
              </div>
              {/* header bar */} 
              <div className="row">
                <div className="header-bar">
                  <div className="column-50">Facility Search Results {this.props.search.searchResults.length}</div>
                  <div className="column-30">Distance from Project</div>
                  <div className="column-20">Scan to Mobile Device</div>
                </div>
              </div>
              {/* list */}
              {facilitiesList}
              {/* list */}  
            </div>
  }
}
