import React, { Component } from 'react'

export default class ChangePassword extends Component {      

  onSubmitForm(e){    
    e.preventDefault()        
    window.doMessage('In development', 'Warning!')
  }   

  render() {    
    const { imgHost } = this.props      
    return <div>      

      <div>
        <div id="global-main-top-bar" className="container-gh">
          <div className="row">
            <div className="col-ghgrid-8">
              <div style={{float: 'left'}}>
                <img style={{margin: 0, padding: '8px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-settings.png"} /><p>Settings</p>
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
                <span>Change Password</span><br /><br />
                Change your password by entering your new password twice to verify. 
              </div>
            </div>
            
            <div id="setup_password">
              <div className="row">
                <div className="header">
                  <div className="col-ghgrid-8">
                    <div style={{float: 'left'}}>
                      <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-lock.png"} /><p>Setup New Password</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-container">
                  <div className="form">
                    <form onSubmit={::this.onSubmitForm}>                                                              
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
                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className="field"><input type="submit" defaultValue="Submit" /></div>
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
    </div>
  }
}
