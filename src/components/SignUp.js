import React, { Component } from 'react'

export default class SignUp extends Component {    
  getParam(name){
    name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)
    if(name){
      return decodeURIComponent(name[1]);
    }
    return false      
  }

  onSignUpSubmit(e) {    
    e.preventDefault()                      
    if(this.refs.password.value != this.refs.confirm_password.value){
      alert('The two passwords must match.')    
      return false;
    }

    let token = this.getParam('token')
    if(token){
      return this.props.confirmSignUp(token)
    }
    alert('Invalid Token')    
  }

  onSignUpConfirm(e) {    
    e.preventDefault()                          
    let token = this.getParam('token')
    if(token){
      return this.props.signUp(token, this.refs.password.value)    
    }
    alert('Invalid Token')    
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
                <img style={{margin: 0, padding: '8px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-settings.png"} /><p>Sign Up</p>
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
                <span>Register as a Vendor </span><br /><br />
                
              </div>
            </div>
            
            <div id="setup_password">
              <div className="row">
                <div className="header">
                  <div className="col-ghgrid-8">
                    <div style={{float: 'left'}}>
                      <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-lock.png"} /><p>Setup Password</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-container">
                  <div className="form">
                    <form onSubmit={::this.onSignUpSubmit}>                                                              
                      <div className="fields">
                        <div className="name">Password *</div>
                        <div className="field"><input id="signup_password" type="password" placeholder="Enter password" name="password" ref="password" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields">
                        <div className="name">Confirm Password *</div>
                        <div className="field"><input type="password" placeholder="Confirm password" name="confirm_password" ref="confirm_password" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields" style={{height: '70px'}}>
                        <div className="name">&nbsp;</div>
                        <div className="field"><input type="submit" defaultValue="Submit" /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>

                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className="field">&nbsp;</div>
                        <div className="spacer">&nbsp;</div>
                        <div style={{paddingLeft: '30px'}}>If you need further assistant, please call tech support at 1-888-525-1301 or click <a href="http://messenger.providesupport.com/messenger/greenhalo.html" target="_blank">Live Chat</a> </div>
                      </div>

                    </form>                    
                  </div>                  
                </div>
              </div>              
            </div>
              
            <div id="confirm_info" style={{display:'none'}}>
              <div className="row">
                <div className="header">
                  <div className="col-ghgrid-8">
                    <div style={{float: 'left'}}>
                      <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-lock.png"} /><p>Confirm Login Info</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-container">
                  <div className="form">                    
                    <form onSubmit={::this.onSignUpConfirm}>                                        
                      <input id="confirmed_password" type="hidden" name="password" required="required" />  
                      <div className="fields">
                        <div className="name">Email:</div>
                        <div className="field"><span id="confirm_email"></span></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields">
                        <div className="name">Password:</div>
                        <div className="field"><span id="pass_encode">*****</span> <span style={{display:'none'}} id="pass_decode"></span> <a href="#" id="show_pass"><small>show password</small></a></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields" style={{height: '70px'}}>
                        <div className="name">&nbsp;</div>
                        <div className="field">
                          <input type="submit" defaultValue="Confirm" style={{float:'left'}} />
                          <input id="returnToSignup" type="button" defaultValue="Cancel" style={{float:'left', marginLeft:'10px'}} />
                        </div>
                        <div className="spacer">&nbsp;</div>
                      </div>

                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className="field">&nbsp;</div>
                        <div className="spacer">&nbsp;</div>
                        <div style={{paddingLeft: '30px'}}>If you need further assistant, please call tech support at 1-888-525-1301 or click <a href="http://messenger.providesupport.com/messenger/greenhalo.html" target="_blank">Live Chat</a> </div>
                      </div>

                    </form>  
                  </div>
                </div>
              </div>
            </div>

          </div>                        
        </div>
      </div>
    </div>
  }
}
