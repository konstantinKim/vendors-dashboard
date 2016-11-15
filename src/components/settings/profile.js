import React, { Component } from 'react'

export default class Profile extends Component {      
  componentWillMount(){
    const { settingsActions } = this.props                                                    
    settingsActions.initProfileStats()
  }

  componentDidMount(){
    if("true" == localStorage.getItem('isFirstLogin')){
      window.doMessage('Please confirm your profile information', 'Confirm profile information')
    }
  }

  handleFormChange(e){      
    this.props.settings.profile[e.currentTarget.name] = e.currentTarget.value    
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)
  }    

  handleCheckboxChange(e){      
    var el = document.getElementsByName(e.currentTarget.name)    
    if(el[0].checked){      
      this.props.settings.profile[e.currentTarget.name] = "true"
    }
    else{
      this.props.settings.profile[e.currentTarget.name] = "false" 
    }    
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)
  } 

  onSubmitForm(e){    
    e.preventDefault()        
    return this.props.settingsActions.updateProfile(this.props.settings.profile)            
  }   

  render() {    
    const { settings, imgHost } = this.props      
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
                <span>Vendor Profile</span><br /><br />
                If you need further assistant, please call tech support at 1-888-525-1301
              </div>
            </div>
            
            <div id="setup_password">
              <div className="row">
                <div className="header">
                  <div className="col-ghgrid-8">
                    <div style={{float: 'left'}}>
                      <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-lock.png"} /><p>Edit Information</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-container">
                  <div className="form">
                    <form onSubmit={::this.onSubmitForm}>                                                              
                      <div className="fields">
                        <div className="name">Company Name *</div>
                        <div className="field"><input value={settings.profile.name} onChange={::this.handleFormChange} type="text" placeholder="Enter Company Name" name="name" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields">
                        <div className="name">Contact Name *</div>
                        <div className="field"><input value={settings.profile.contact} onChange={::this.handleFormChange} type="text" placeholder="Enter Your Name" name="contact" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields">
                        <div className="name">Street *</div>
                        <div className="field"><input value={settings.profile.street} onChange={::this.handleFormChange} type="text" placeholder="Enter Street" name="street" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields">
                        <div className="name">Zipcode *</div>
                        <div className="field"><input value={settings.profile.zipcode} onChange={::this.handleFormChange} style={{width:'120px'}} type="text" placeholder="Enter Street" name="street" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields" style={{height:'75px'}}>
                        <div className="name">&nbsp;</div>
                        <div className="field" style={{width:'60%', height:'75px'}}>
                          <input onChange={::this.handleCheckboxChange} type="checkbox" style={{width:'25px'}} name="debrisbox" checked={settings.profile.debrisbox == "true"?"checked":""} /> <b>Debris Box Service</b> 
                          <span style={{lineHeight:'16px'}}>Select this option for any vendor that provides debris box/roll off/dumpster services. This vendor will be displayed under the debris box hauler category</span>
                        </div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields" style={{height:'75px'}}>
                        <div className="name">&nbsp;</div>
                        <div className="field" style={{width:'60%', height:'75px'}}>
                          <input onChange={::this.handleCheckboxChange} type="checkbox" style={{width:'25px'}} name="hauling" checked={settings.profile.hauling == "true"?"checked":""} /> <b>Hauling/Trucking/Demolition Service</b> 
                          <span style={{lineHeight:'16px'}}>Select this option for any vendor that provides hauling, trucking and demolition services. This vendor will be displayed under the hauling services category</span>
                        </div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      <div className="fields" style={{height:'75px'}}>
                        <div className="name">&nbsp;</div>
                        <div className="field" style={{width:'60%', height:'75px'}}>
                          <input onChange={::this.handleCheckboxChange} type="checkbox" style={{width:'25px'}} name="selfhaul" checked={settings.profile.selfhaul == "true"?"checked":""} /> <b>Drop-Off/Self Haul Options/Landfill/Recovery Facility</b> 
                          <span style={{lineHeight:'16px'}}>Select this option for any vendor that provides drop off services for self haul <br /> &nbsp;</span>
                        </div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    
                      
                      <div className="fields">
                        <div className="name">Phone *</div>
                        <div className="field">
                          <span style={{display: 'inline-block', width: '15%'}}><input value={settings.profile.phone_1} onChange={::this.handleFormChange} name="phone_1" required="required" maxLength={3} className="phone phone_1" data-id="1" placeholder="(xxx)" style={{textAlign: 'center'}} type="text" /></span>
                          <span style={{display: 'inline-block', width: '1%'}} className="phoneSep">-</span>
                          <span style={{display: 'inline-block', width: '15%'}}><input value={settings.profile.phone_2} onChange={::this.handleFormChange} name="phone_2" required="required" maxLength={3} className="phone phone_2" data-id="2" placeholder={555} style={{textAlign: 'center'}} type="text" /></span>
                          <span style={{display: 'inline-block', width: '1%'}} className="phoneSep">-</span>
                          <span style={{display: 'inline-block', width: '15%'}}><input value={settings.profile.phone_3} onChange={::this.handleFormChange} name="phone_3" required="required" maxLength={4} className="phone phone_3" data-id="3" placeholder={5555} style={{textAlign: 'center'}} type="text" /></span>
                          <span style={{display: 'inline-block', width: '5%', textAlign: 'center'}} className="phoneSep">ext.</span>
                          <span style={{display: 'inline-block', width: '15%'}}><input value={settings.profile.phone_4} onChange={::this.handleFormChange} name="phone_4" placeholder={1234} style={{textAlign: 'center'}} className="phone_4" type="text" /></span>
                        </div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    

                      <div className="fields">
                        <div className="name">Email *</div>
                        <div className="field"><input value={settings.profile.email} onChange={::this.handleFormChange} type="text" placeholder="Enter Email" name="email" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>                    

                      <div className="fields">
                        <div className="name">Website</div>
                        <div className="field"><input value={settings.profile.url} onChange={::this.handleFormChange} type="text" placeholder="Enter Website" name="url" /></div>
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
