import React, { Component } from 'react'

export default class Header extends Component {
  onTabBtnClick(e) {                                    
        e.preventDefault()                                  
        return this.props.switchTab(e.currentTarget.id)
  }

  highlightTab(tabId){
      if(this.props.activeTab == tabId){
          return('sub-nav-selected');        
      }
      return('sub-nav');                
  }

  highlightMenu(menuId, location){      
      if(location == menuId){
          return('-selected');        
      }
      return('');                
  }

  onLogOutClick(e) {                                    
        e.preventDefault()                                  
        localStorage.clear()
        window.location = '/login'
  } 

  render() {        
    const { imgHost } = this.props
    var location = window.location.pathname
    var subNav
    if(this.highlightMenu('/', location) != ''){
      subNav = <div className="col-ghgrid-8">
                <a id='activeList' onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('activeList') + " padding"}>ACTIVE PROJECTS</a>
                <a id='completedList' onClick={::this.onTabBtnClick} style={{padding: '0px 14px 0px 12px'}} className={this.highlightTab('completedList')} href="#">COMPLETED PROJECTS</a>
              </div>
    }
    if(this.highlightMenu('/statistics', location) != ''){
      subNav = <div className="col-ghgrid-8">
        <a id="overview" onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('overview') + " padding"}>RECYCLING TOTALS</a>
        <a id="carbonFootprint" onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('carbonFootprint') + " padding"}>CARBON FOOTPRINT</a>
        <a id="materials" onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('materials') + " padding"}>MATERIALS RECYCLED</a>
        <a id="facilities" onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('facilities') + " padding"}>FACILITIES USED</a>
        <a id="projectTypes" onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('projectTypes') + " padding"}>PROJECT TYPES</a>
        <a id="buildingTypes" onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('buildingTypes') + " padding"}>BUILDING TYPES</a>
        <a id="haulingTypes" onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('haulingTypes')} style={{padding: '0px 14px 0px 12px'}}>HAULING TYPES</a>        
      </div>
    }
    if(this.highlightMenu('/settings', location) != ''){
      subNav = <div className="col-ghgrid-8">
                <a id='settingsProfile' onClick={::this.onTabBtnClick} href="#" className={this.highlightTab('settingsProfile') + " padding"}>VENDOR PROFILE</a>
                <a id='settingsChangePassword' onClick={::this.onTabBtnClick} style={{padding: '0px 14px 0px 12px'}} className={this.highlightTab('settingsChangePassword')} href="#">CHANGE PASSWORD</a>
              </div>
    }
    
    return <div>
      <div>
        {/* top most header */}
        <div id="top-most-header-container">
          <div className="container-gh">
            <div id="top-most-header" className="row">
              <div className="col-ghgrid-2">
                <div className="language-container">
                  <div style={{float: 'left'}}>
                    <img style={{margin: 0, padding: '0px 4px 0px 0px', position: 'relative', top: '-1px'}} src={imgHost + "/_images/global/icon-flag-usa.jpg"} />USA
                  </div>
                  {/* drop down for language will go here */}
                  <div style={{float: 'left'}}>
                  </div>
                </div>
              </div>
              <div className="col-ghgrid-3">
                <div className="cs-container">
                  FOR CUSTOMER SERVICE CALL <span>1-888-525-1301</span>
                </div>
              </div>              
              <div className="col-ghgrid-3">                
                  <div style={{float:'right'}}>
                    <div id="ciDVan" style={{zIndex: 100, position: 'absolute'}} /><div id="scDVan" style={{display: 'inline'}} /><div id="sdDVan" style={{display: 'none'}} />
                  </div>                
              </div>              
            </div>
          </div>
        </div>
        {/* main header */}
        <div className="container-gh">
          <div id="header-container" className="row">
            <div className="col-ghgrid-3">
              <div className="logo">
                <img src={imgHost + "/_images/global/gh_logo.png"} alt="Green Halo Systems" />
              </div>
            </div>
            <div className="col-ghgrid-5">
              <div className="user">
                <p>Welcome <span className="name">{localStorage.getItem('name')}</span></p>
              </div>              
            </div>
          </div>
        </div>
        
        <div className="container-gh">
          <div id="global-nav-container" className="row">
            <div className="col-ghgrid-1">
              <a href="/" className="link-regular">
                <span className={"nav" + this.highlightMenu('/', location) + " nav-home"}>
                  <span style={{position: 'relative', top: 44}}>HOME</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/home-dark.png"} className="global-nav-home" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/home-white.png"} className="global-nav-home-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="/statistics" className="link-regular">
                <span className={"nav" + this.highlightMenu('/statistics', location) + " nav-statistics"}>
                  <span style={{position: 'relative', top: 44}}>STATISTICS</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/statistics-dark.png"} className="global-nav-statistics" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/statistics-white.png"} className="global-nav-statistics-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="/settings" className="link-regular">
                <span className={"nav" + this.highlightMenu('/settings', location) + " nav-settings"}>
                  <span style={{position: 'relative', top: 44}}>SETTINGS</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/settings-dark.png"} className="global-nav-settings" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/settings-white.png"} className="global-nav-settings-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="/recycler-search" className="link-regular">
                <div className="nav nav-recycler-search">
                  <span style={{position: 'relative', top: 44}}>RECYCLER SEARCH</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/recycler-search-dark.png"} className="global-nav-recycler-search" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/recycler-search-white.png"} className="global-nav-recycler-search-hover" />
                </div>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a data-animation="fade" data-reveal-id="reveal-suggestions" href="#" className="link-regular">
                <span className="nav nav-suggestions">
                  <span style={{position: 'relative', top: 44}}>SUGGESTIONS</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/suggestions-dark.png"} className="global-nav-suggestions" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/suggestions-white.png"} className="global-nav-suggestions-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a data-animation="fade" data-reveal-id="reveal-reportbug" href="#" className="link-regular">
                <span className="nav nav-report-bug">
                  <span style={{position: 'relative', top: 44}}>REPORT BUG</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/report-bug-dark.png"} className="global-nav-report-bug" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/report-bug-white.png"} className="global-nav-report-bug-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="http://messenger.providesupport.com/messenger/greenhalo.html" target="_blank" className="link-regular">
                <span className="nav nav-live-help">
                  <span style={{position: 'relative', top: 44}}>LIVE HELP</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/live-help-dark.png"} className="global-nav-live-help" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/live-help-white.png"} className="global-nav-live-help-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a  href="#" onClick={::this.onLogOutClick} className="link-regular">
                <span className="nav nav-log-out">
                  <span style={{position: 'relative', top: 44}}>LOG OUT</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/log-out-dark.png"} className="global-nav-log-out" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={imgHost + "/_images/icons/nav/log-out-white.png"} className="global-nav-log-out-hover" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* sub nav */}
                
        <div id="global-sub-nav-container">
          <div className="container-gh">
            <div style={{textAlign: 'left'}} id="global-sub-nav" className="row">
              {subNav}
            </div>
          </div>
        </div>

      </div>

    </div>
  }
}
