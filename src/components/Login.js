import React, { Component } from 'react'

export default class Login extends Component {    
  onLoginSubmit(e) {    
    e.preventDefault()                      
    return this.props.login(this.refs.email.value, this.refs.password.value)    
  }

  render() {    
    const { imgHost } = this.props  
    return <div>      
      <div>
        <div id="global-main-top-bar" className="container-gh">
          <div className="row">
            <div className="col-ghgrid-8">
              <div style={{float: 'left'}}>
                <img style={{margin: 0, padding: '8px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-settings.png"} /><p>Sign In</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop: '-2px'}} id="global-main-tabs" className="container-gh">
          <div style={{position: 'relative', top: '-2px'}} className="row">
            
          </div>
        </div>
        <div id="global-main-content" className="container-gh">            
          <div id="settings-container">
            {/* intro */}
            <div className="row">
              <div className="intro">
                <span>Text Here </span><br /><br />
                Text Here
              </div>
            </div>
            <div className="row">
              <div className="header">
                <div className="col-ghgrid-8">
                  <div style={{float: 'left'}}>
                    <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-lock.png"} /><p>Log In</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-container">
                <div className="form">
                  <form onSubmit={::this.onLoginSubmit}>
                    <div className="fields">
                      <div className="name">Email *</div>
                      <div className="field"><input type="email" placeholder="Enter email" name="email" ref="email" /></div>
                      <div className="spacer">&nbsp;</div>
                    </div>
                    <div className="fields">
                      <div className="name">Password *</div>
                      <div className="field"><input type="password" placeholder="Enter password" name="password" ref="password" /></div>
                      <div className="spacer">&nbsp;</div>
                    </div>                    
                    <div className="fields">
                      <div className="name">&nbsp;</div>
                      <div className="field"><input type="submit" defaultValue="Login" /></div>
                      <div className="spacer">&nbsp;</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>                        
        </div>
      </div>

    </div>
  }
}
