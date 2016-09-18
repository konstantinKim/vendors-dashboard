import React, { Component } from 'react'

export default class Tabs extends Component {  
  onTabBtnClick(e) {                                    
      e.preventDefault()                    
      var tabId = e.currentTarget.attributes.getNamedItem('data-tab-id').value
      return this.props.statisticsActions.switchTab(tabId)
  }    

  highlightTab(tabId) {                                          
      if(tabId == this.props.currentTab){
        return '-selected'
      }
      return ''
  }    
  
  render() {                 
    const { imgHost } = this.props                                        
    return <div>                        
      <div style={{marginTop: '-2px'}} id="global-main-tabs" className="container-gh">
          <div style={{position: 'relative', top: '-2px'}} className="row">
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="overview" href="haulsub-statistics-overview.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('overview') + " border"}><img style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-1px'}} src={imgHost + "/_images/icons/nav/tab-statistics.png"} />Recycling Totals</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="carbonFootprint" href="haulsub-statistics-carbon-footprint.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('carbonFootprint') + " border"}><img style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}} src={imgHost + "/_images/icons/nav/tab-carbon.png"} />Carbon Footprint</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="materials" href="haulsub-statistics-materials-recycled.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('materials') + " border"}><img style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}} src={imgHost + "/_images/icons/nav/tab-checkoutlined.png"} />Materials Recycled</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="facilities" href="haulsub-statistics-facilities-used.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('facilities') + " border"}><img style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}} src={imgHost + "/_images/icons/nav/tab-facilities.png"} />Facilities Used</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="projectTypes" href="haulsub-statistics-project-types.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('projectTypes') + " border"}><img style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-1px'}} src={imgHost + "/_images/icons/nav/tab-project.png"} />Project Types</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="buildingTypes" href="haulsub-statistics-building-types.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('buildingTypes') + " border"}><img style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}} src={imgHost + "/_images/icons/nav/tab-building.png"} />Building Types</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="haulingTypes" href="haulsub-statistics-hauling-types.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('haulingTypes') + " border"}><img style={{padding: '0px 8px 0px 0px'}} src={imgHost + "/_images/icons/nav/tab-hauling.png"} />Hauling Types</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  }
}
