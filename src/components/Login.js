import React, { Component } from 'react'

export default class Login extends Component {
  componentWillMount(){    
    var query = window.getQueryParams(document.location.search);
    if(undefined != query.token){
      window.doMessage('Please wait a few seconds. You will be redirected automatically', 'Authorization Processing')            
      this.props.loginByToken(query.token)      
      //window.location = '/'
    }
  }

  onLoginSubmit(e) {    
    e.preventDefault()                      
    return this.props.login(this.refs.email.value, this.refs.password.value)    
  }

  render() {    
    const { imgHost } = this.props  
    return <div>      
      <div className="container-gh">
        <a href="/"><img style={{margin: 0, padding: '8px 0px 0px 12px'}} src={imgHost + "/_images/global/gh_logo.png"} alt="Green Halo Systems" /></a>
      </div>
      <div>
        <div id="global-main-top-bar" className="container-gh">
          <div className="row">
            <div className="col-ghgrid-8">
              <div style={{float: 'left'}}>
                <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-lock.png"} /><p>Log In</p>
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
                <span>&nbsp; </span><br /><br />                
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