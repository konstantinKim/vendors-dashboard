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
    //const { imgHost } = this.props                                        
    return <div>                        
      <div style={{marginTop: '-2px'}} id="global-main-tabs" className="container-gh">
          <div style={{position: 'relative', top: '-2px'}} className="row">
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="overview" href="haulsub-statistics-overview.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('overview') + " border"}><span className="icon fa fa-bar-chart-o" style={{margin: '0px 0px 0px 0px'}}></span>Recycling Totals</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="carbonFootprint" href="haulsub-statistics-carbon-footprint.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('carbonFootprint') + " border"}><span className="icon glyphicon glyphicon-tree-deciduous" style={{margin: '0px 0px 0px 0px'}}></span>Carbon Footprint</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="materials" href="haulsub-statistics-materials-recycled.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('materials') + " border"}><span className="icon fa fa-check-square-o" style={{margin: '0px 0px 0px 0px'}}></span>Materials Recycled</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="facilities" href="haulsub-statistics-facilities-used.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('facilities') + " border"}><span className="icon fa fa-recycle" style={{margin: '0px 0px 0px 0px'}}></span>Facilities Used</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="projectTypes" href="haulsub-statistics-project-types.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('projectTypes') + " border"}><span className="icon fa fa-tasks" style={{margin: '0px 0px 0px 0px'}}></span>Project Types</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="buildingTypes" href="haulsub-statistics-building-types.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('buildingTypes') + " border"}><span className="icon fa fa-building-o" style={{margin: '0px 0px 0px 0px'}}></span>Building Types</span>
              </a>
            </div>
            <div className="col-gh-7">
              <a onClick={::this.onTabBtnClick} data-tab-id="haulingTypes" href="haulsub-statistics-hauling-types.html" className="link-regular">
                <span className={"tabs-statistics" + this.highlightTab('haulingTypes') + " border"}><span className="icon fa fa-truck" style={{margin: '0px 0px 0px 0px'}}></span>Hauling Types</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  }
}
