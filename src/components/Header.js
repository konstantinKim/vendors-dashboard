import React, { Component } from 'react'

export default class Header extends Component {
  render() {    
    const { host } = this.props
    return <div>
      <div>
        {/* top most header */}
        <div id="top-most-header-container">
          <div className="container-gh">
            <div id="top-most-header" className="row">
              <div className="col-ghgrid-2">
                <div className="language-container">
                  <div style={{float: 'left'}}>
                    <img style={{margin: 0, padding: '0px 4px 0px 0px', position: 'relative', top: '-1px'}} src={host + "/_images/global/icon-flag-usa.jpg"} />USA
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
            </div>
          </div>
        </div>
        {/* main header */}
        <div className="container-gh">
          <div id="header-container" className="row">
            <div className="col-ghgrid-2">
              <div className="logo">LOGO HERE</div>
            </div>
            <div className="col-ghgrid-6">
              <div className="user">
                <p>Welcome <span className="name">Dean R.</span></p>
              </div>              
            </div>
          </div>
        </div>
        
        <div className="container-gh">
          <div id="global-nav-container" className="row">
            <div className="col-ghgrid-1">
              <a href="haulsub-projects-active.html" className="link-regular">
                <span className="nav-selected nav-home-selected">
                  <span style={{position: 'relative', top: 44}}>HOME</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/home-white.png"} className="global-nav-home-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="haulsub-statistics-overview.html" className="link-regular">
                <span className="nav nav-statistics">
                  <span style={{position: 'relative', top: 44}}>STATISTICS</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/statistics-dark.png"} className="global-nav-statistics" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={host + "/_images/icons/nav/statistics-white.png"} className="global-nav-statistics-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="haulsub-settings-change-password.html" className="link-regular">
                <span className="nav nav-settings">
                  <span style={{position: 'relative', top: 44}}>SETTINGS</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/settings-dark.png"} className="global-nav-settings" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={host + "/_images/icons/nav/settings-white.png"} className="global-nav-settings-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="recycler-search.html" className="link-regular">
                <div className="nav nav-recycler-search">
                  <span style={{position: 'relative', top: 44}}>RECYCLER SEARCH</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/recycler-search-dark.png"} className="global-nav-recycler-search" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={host + "/_images/icons/nav/recycler-search-white.png"} className="global-nav-recycler-search-hover" />
                </div>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a data-animation="fade" data-reveal-id="reveal-suggestions" href="#" className="link-regular">
                <span className="nav nav-suggestions">
                  <span style={{position: 'relative', top: 44}}>SUGGESTIONS</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/suggestions-dark.png"} className="global-nav-suggestions" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={host + "/_images/icons/nav/suggestions-white.png"} className="global-nav-suggestions-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a data-animation="fade" data-reveal-id="reveal-reportbug" href="#" className="link-regular">
                <span className="nav nav-report-bug">
                  <span style={{position: 'relative', top: 44}}>REPORT BUG</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/report-bug-dark.png"} className="global-nav-report-bug" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={host + "/_images/icons/nav/report-bug-white.png"} className="global-nav-report-bug-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="#" className="link-regular">
                <span className="nav nav-live-help">
                  <span style={{position: 'relative', top: 44}}>LIVE HELP</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/live-help-dark.png"} className="global-nav-live-help" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={host + "/_images/icons/nav/live-help-white.png"} className="global-nav-live-help-hover" />
                </span>
              </a>
            </div>
            <div className="col-ghgrid-1">
              <a href="#" className="link-regular">
                <span className="nav nav-log-out">
                  <span style={{position: 'relative', top: 44}}>LOG OUT</span><br />
                  <img style={{margin: '2px 0px 0px 0px'}} src={host + "/_images/icons/nav/log-out-dark.png"} className="global-nav-log-out" /><br />
                  <img style={{margin: '50px 0px 0px 0px'}} src={host + "/_images/icons/nav/log-out-white.png"} className="global-nav-log-out-hover" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* sub nav */}
        <div id="global-sub-nav-container">
          <div className="container-gh">
            <div style={{textAlign: 'left'}} id="global-sub-nav" className="row">
              <div className="col-ghgrid-8">
                <a href="haulsub-projects-active.html" className="sub-nav-selected padding">ACTIVE PROJECTS</a>
                <a style={{padding: '0px 14px 0px 12px'}} href="haulsub-projects-completed.html" className="sub-nav">COMPLETED PROJECTS</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  }
}
