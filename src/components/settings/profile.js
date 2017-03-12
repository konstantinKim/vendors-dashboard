import React, { Component } from 'react'

export default class Profile extends Component {      
  componentWillMount(){
    const { settingsActions } = this.props                                                    
    settingsActions.initProfileStats()
    settingsActions.getImages()
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

  handlePermitChange(e){          
    let index = e.currentTarget.name
    this.props.settings.profile.permits[index].name = e.currentTarget.value.replace(',',';')
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  handleAssociationChange(e){          
    let index = e.currentTarget.name
    this.props.settings.profile.associations[index].name = e.currentTarget.value.replace(',',';')
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  handleRepsChange(e){          
    let index = e.currentTarget.name
    this.props.settings.profile.reps[index].email = e.currentTarget.value.replace(',',';')
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  handleImageAdd(e){
    this.props.settingsActions.addImage(e.currentTarget.files[0])    
    return window.doMessage('Image Added', 'Success')           
  }

  addPermit(e){
    e.preventDefault()              
    this.props.settings.profile.permits.push({'name':''})
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  addAssociation(e){
    e.preventDefault()              
    this.props.settings.profile.associations.push({'name':''})
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  addReps(e){
    e.preventDefault()              
    this.props.settings.profile.reps.push({'name':''})
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  deletePermit(e){
    e.preventDefault()
    let index = e.currentTarget.name
    //console.log(index)              
    this.props.settings.profile.permits.splice(index, 1)
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  deleteAssociation(e){
    e.preventDefault()
    let index = e.currentTarget.name                  
    this.props.settings.profile.associations.splice(index, 1)
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  deleteReps(e){
    e.preventDefault()
    let index = e.currentTarget.name
    //console.log(index)              
    this.props.settings.profile.reps.splice(index, 1)
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

  handleHoursChange(e){          
    let day = e.currentTarget.getAttribute('data-id')
    let name = e.currentTarget.name
    this.props.settings.profile.hours[day][name] = e.currentTarget.value    
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  }

  handleExtraChange(e){          
    let day = e.currentTarget.getAttribute('data-id')
    let name = e.currentTarget.name
    
    if(e.currentTarget.checked){
      window.disableFields(day+"_hours", true)
      this.props.settings.profile.hours[day][name] = e.currentTarget.value
    }
    else{
      window.disableFields(day+"_hours", false)
      this.props.settings.profile.hours[day][name] = ''
    }
        
    return this.props.settingsActions.updateProfileStats(this.props.settings.profile)    
  } 

  slideImg(e){
    e.preventDefault()
    let index = e.currentTarget.getAttribute('data-id')
    window.slideImg(index)
  }

  deleteImg(e){
    e.preventDefault()
    if(confirm("Delete this image?")){
      window.slideImg(0)
      let index = e.currentTarget.getAttribute('data-id')
      this.props.settingsActions.deleteImage(index)
      return window.doMessage('Image Deleted', 'Success')
    }               
  }

  onSubmitForm(e){    
    e.preventDefault()        
    return this.props.settingsActions.updateProfile(this.props.settings.profile)            
  }

  render() {    
    const { settings, imgHost } = this.props
    const { hours } = this.props.settings.profile
    let self = this

    var permitFields     
    if(settings.profile.permits.length > 0){
      permitFields = settings.profile.permits.map(function (item, index) {
        return (
          <div key={'permit_'+index}>
            <div className="fields">              
              <div className="name">{index ? '' : 'Permits/Licenses *'}</div>
              <div className="field"><input onChange={::self.handlePermitChange} value={item.name} type="text" placeholder="License information (i.e contractor license, state license, etc.)" name={index} required /></div>
              <div className="spacer">{index ? <a name={index} className="icon fa fa-remove" style={{marginLeft:'10px', color:'red'}} href="#" onClick={::self.deletePermit}></a> : <a style={{marginLeft:'10px'}} href="#" onClick={::self.addPermit}>Add Another</a>}</div>                      
            </div>
          </div>
        )
      })
    }

    var associationsFields     
    if(settings.profile.associations.length > 0){
      associationsFields = settings.profile.associations.map(function (item, index) {
        return (
          <div key={'association_'+index}>
            <div className="fields">              
              <div className="name">{index ? '' : 'Associations'}</div>
              <div className="field"><input onChange={::self.handleAssociationChange} value={item.name} type="text" placeholder="Associations" name={index}  /></div>
              <div className="spacer">{index ? <a name={index} className="icon fa fa-remove" style={{marginLeft:'10px', color:'red'}} href="#" onClick={::self.deleteAssociation}></a> : <a style={{marginLeft:'10px'}} href="#" onClick={::self.addAssociation}>Add Another</a>}</div>                      
            </div>
          </div>
        )
      })
    }

    var repsFields     
    if(settings.profile.reps.length > 0){
      repsFields = settings.profile.reps.map(function (item, index) {
        return (
          <div key={'reps_'+index}>
            <div className="fields">              
              <div className="name">Reps Email *</div>
              <div className="field"><input data-id={item.id} onChange={::self.handleRepsChange} value={item.email} type="email" placeholder="Representative Email" name={index} required /></div>
              <div className="spacer"><a name={index} className="icon fa fa-remove" style={{marginLeft:'10px', color:'red'}} href="#" onClick={::self.deleteReps}></a></div>                      
            </div>
          </div>
        )
      })
    }

    var images    
    if(settings.images.length > 0){
      images = settings.images.map(function (item, index) {
        return (
          <div key={'img_'+index} className={index? 'hiddenImg slide_img ' + "slide_"+index : 'slide_img ' + "slide_"+index} style={{width:'600px'}}>
            <div><a href="#" style={{color: 'red'}} onClick={::self.deleteImg} data-id={item.id}>Delete</a></div>
            <img src={imgHost + item.path} style={{maxWidth: '600px'}} />            
            <div>{index? <a href="#" onClick={::self.slideImg} data-id={index - 1} >&lt;</a>:''} {index+1} of {settings.images.length} {settings.images.length > index+1? <a onClick={::self.slideImg} href="#" className="slideImg" data-id={index+1}>&gt;</a>:''}</div>
          </div>          
        )
      })
    }

    let hrs = []
    for (let i = 12; i > 0; i = i-1){
       hrs.push({'h':i})
    }
    let hoursOptions
    hoursOptions = hrs.map(function (item) {
      return (        
          <option key={'hour_'+item.h} value={item.h}>{item.h}</option>        
      )
    })

    let minuts = []
    for (let i = 0; i < 60; i = i+15){
      if(i == 0){
        minuts.push({'m':'00'})
      }
      else{
        minuts.push({'m':i})
      }
       
    }
    let minutsOptions
    minutsOptions = minuts.map(function (item) {
      return (        
          <option key={'min_'+item.m} value={item.m}>{item.m}</option>        
      )
    })
        
    
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
                    <form encType='multipart/form-data' id="profileForm" onSubmit={::this.onSubmitForm}>                                                              
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
                        <div className="field"><input value={settings.profile.email} onChange={::this.handleFormChange} type="email" placeholder="Enter Email" name="email" required /></div>
                        <div className="spacer"><a style={{marginLeft:'10px'}} href="#" onClick={::self.addReps}>Add Another</a></div>
                      </div>  

                      {repsFields}                  

                      <div className="fields">
                        <div className="name">Website *</div>
                        <div className="field"><input value={settings.profile.url} onChange={::this.handleFormChange} type="text" placeholder="Enter Website" name="url" required /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>

                      {permitFields}
                      
                      {associationsFields}

                      <div className="fields">
                        <div className="name">Hours *</div>
                        <div className={hours.monday.extra ? 'field opacityFields':'field'} id="monday_hours">                          
                          <span style={{display:'block', float:'left', width:'85px'}}>Monday</span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.monday['from_hours']} onChange={::this.handleHoursChange} data-id="monday" name="from_hours" style={{width:'55px'}}>{hoursOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.monday['from_minutes']} onChange={::this.handleHoursChange} data-id="monday" name="from_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'30px'}}>am</span> 
                          <span style={{display:'block', float:'left', width:'20px'}}>to</span>
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.monday['to_hours']} onChange={::this.handleHoursChange} data-id="monday" name="to_hours" style={{width:'55px'}}>{hoursOptions}</select></span>     
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.monday['to_minutes']} onChange={::this.handleHoursChange} data-id="monday" name="to_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left'}}>pm</span> 
                        </div>
                        <div className="spacer">
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.monday.extra == 'open_24'? 'checked': ''} onChange={::this.handleExtraChange} data-id="monday" name="extra" value="open_24" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Open 24 hours</span> 
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.monday.extra == 'closed'? 'checked': ''} onChange={::this.handleExtraChange} data-id="monday" name="extra" value="closed" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Closed</span> 
                        </div>
                      </div>                      
                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className={hours.tuesday.extra ? 'field opacityFields':'field'} id="tuesday_hours">                          
                          <span style={{display:'block', float:'left', width:'85px'}}>Tuesday</span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.tuesday['from_hours']} onChange={::this.handleHoursChange} data-id="tuesday" name="from_hours" style={{width:'55px'}}>{hoursOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.tuesday['from_minutes']} onChange={::this.handleHoursChange} data-id="tuesday" name="from_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'30px'}}>am</span> 
                          <span style={{display:'block', float:'left', width:'20px'}}>to</span>
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.tuesday['to_hours']} onChange={::this.handleHoursChange} data-id="tuesday" name="to_hours" style={{width:'55px'}}>{hoursOptions}</select></span>     
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.tuesday['to_minutes']} onChange={::this.handleHoursChange} data-id="tuesday" name="to_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left'}}>pm</span> 
                        </div>
                        <div className="spacer">
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.tuesday.extra == 'open_24'? 'checked': ''} onChange={::this.handleExtraChange} data-id="tuesday" name="extra" value="open_24" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Open 24 hours</span> 
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.tuesday.extra == 'closed'? 'checked': ''} onChange={::this.handleExtraChange} data-id="tuesday" name="extra" value="closed" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Closed</span> 
                        </div>
                      </div>
                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className={hours.wednesday.extra ? 'field opacityFields':'field'} id="wednesday_hours">                          
                          <span style={{display:'block', float:'left', width:'85px'}}>Wednesday</span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.wednesday['from_hours']} onChange={::this.handleHoursChange} data-id="wednesday" name="from_hours" style={{width:'55px'}}>{hoursOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.wednesday['from_minutes']} onChange={::this.handleHoursChange} data-id="wednesday" name="from_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'30px'}}>am</span> 
                          <span style={{display:'block', float:'left', width:'20px'}}>to</span>
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.wednesday['to_hours']} onChange={::this.handleHoursChange} data-id="wednesday" name="to_hours" style={{width:'55px'}}>{hoursOptions}</select></span>     
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.wednesday['to_minutes']} onChange={::this.handleHoursChange} data-id="wednesday" name="to_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left'}}>pm</span> 
                        </div>
                        <div className="spacer">
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.wednesday.extra == 'open_24'? 'checked': ''} onChange={::this.handleExtraChange} data-id="wednesday" name="extra" value="open_24" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Open 24 hours</span> 
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.wednesday.extra == 'closed'? 'checked': ''} onChange={::this.handleExtraChange} data-id="wednesday" name="extra" value="closed" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Closed</span> 
                        </div>
                      </div>
                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className={hours.thursday.extra ? 'field opacityFields':'field'} id="thursday_hours">                          
                          <span style={{display:'block', float:'left', width:'85px'}}>Thursday</span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.thursday['from_hours']} onChange={::this.handleHoursChange} data-id="thursday" name="from_hours" style={{width:'55px'}}>{hoursOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.thursday['from_minutes']} onChange={::this.handleHoursChange} data-id="thursday" name="from_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'30px'}}>am</span> 
                          <span style={{display:'block', float:'left', width:'20px'}}>to</span>
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.thursday['to_hours']} onChange={::this.handleHoursChange} data-id="thursday" name="to_hours" style={{width:'55px'}}>{hoursOptions}</select></span>     
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.thursday['to_minutes']} onChange={::this.handleHoursChange} data-id="thursday" name="to_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left'}}>pm</span> 
                        </div>
                        <div className="spacer">
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.thursday.extra == 'open_24'? 'checked': ''} onChange={::this.handleExtraChange} data-id="thursday" name="extra" value="open_24" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Open 24 hours</span> 
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.thursday.extra == 'closed'? 'checked': ''} onChange={::this.handleExtraChange} data-id="thursday" name="extra" value="closed" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Closed</span> 
                        </div>
                      </div>
                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className={hours.friday.extra ? 'field opacityFields':'field'} id="friday_hours">                          
                          <span style={{display:'block', float:'left', width:'85px'}}>Friday</span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.friday['from_hours']} onChange={::this.handleHoursChange} data-id="friday" name="from_hours" style={{width:'55px'}}>{hoursOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.friday['from_minutes']} onChange={::this.handleHoursChange} data-id="friday" name="from_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'30px'}}>am</span> 
                          <span style={{display:'block', float:'left', width:'20px'}}>to</span>
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.friday['to_hours']} onChange={::this.handleHoursChange} data-id="friday" name="to_hours" style={{width:'55px'}}>{hoursOptions}</select></span>     
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.friday['to_minutes']} onChange={::this.handleHoursChange} data-id="friday" name="to_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left'}}>pm</span> 
                        </div>
                        <div className="spacer">
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.friday.extra == 'open_24'? 'checked': ''} onChange={::this.handleExtraChange} data-id="friday" name="extra" value="open_24" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Open 24 hours</span> 
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.friday.extra == 'closed'? 'checked': ''} onChange={::this.handleExtraChange} data-id="friday" name="extra" value="closed" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Closed</span> 
                        </div>
                      </div>
                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className={hours.saturday.extra ? 'field opacityFields':'field'} id="saturday_hours">                          
                          <span style={{display:'block', float:'left', width:'85px'}}>Saturday</span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.saturday['from_hours']} onChange={::this.handleHoursChange} data-id="saturday" name="from_hours" style={{width:'55px'}}>{hoursOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.saturday['from_minutes']} onChange={::this.handleHoursChange} data-id="saturday" name="from_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'30px'}}>am</span> 
                          <span style={{display:'block', float:'left', width:'20px'}}>to</span>
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.saturday['to_hours']} onChange={::this.handleHoursChange} data-id="saturday" name="to_hours" style={{width:'55px'}}>{hoursOptions}</select></span>     
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.saturday['to_minutes']} onChange={::this.handleHoursChange} data-id="saturday" name="to_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left'}}>pm</span> 
                        </div>
                        <div className="spacer">
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.saturday.extra == 'open_24'? 'checked': ''} onChange={::this.handleExtraChange} data-id="saturday" name="extra" value="open_24" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Open 24 hours</span> 
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.saturday.extra == 'closed'? 'checked': ''} onChange={::this.handleExtraChange} data-id="saturday" name="extra" value="closed" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Closed</span> 
                        </div>
                      </div>
                      <div className="fields">
                        <div className="name">&nbsp;</div>
                        <div className={hours.sunday.extra ? 'field opacityFields':'field'} id="sunday_hours">                          
                          <span style={{display:'block', float:'left', width:'85px'}}>Sunday</span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.sunday['from_hours']} onChange={::this.handleHoursChange} data-id="sunday" name="from_hours" style={{width:'55px'}}>{hoursOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.sunday['from_minutes']} onChange={::this.handleHoursChange} data-id="sunday" name="from_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left', width:'30px'}}>am</span> 
                          <span style={{display:'block', float:'left', width:'20px'}}>to</span>
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.sunday['to_hours']} onChange={::this.handleHoursChange} data-id="sunday" name="to_hours" style={{width:'55px'}}>{hoursOptions}</select></span>     
                          <span style={{display:'block', float:'left', width:'60px'}}><select value={hours.sunday['to_minutes']} onChange={::this.handleHoursChange} data-id="sunday" name="to_minutes" style={{width:'55px'}}>{minutsOptions}</select></span> 
                          <span style={{display:'block', float:'left'}}>pm</span> 
                        </div>
                        <div className="spacer">
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.sunday.extra == 'open_24'? 'checked': ''} onChange={::this.handleExtraChange} data-id="sunday" name="extra" value="open_24" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Open 24 hours</span> 
                          <span style={{display:'block', float:'left', width:'25px'}}><input checked={hours.sunday.extra == 'closed'? 'checked': ''} onChange={::this.handleExtraChange} data-id="sunday" name="extra" value="closed" type="checkbox" style={{width:'20px'}} /></span> 
                          <span style={{display:'block', float:'left', width:'120px'}}>Closed</span> 
                        </div>
                      </div>

                      <div className="fields">
                        <div className="name">Facility Images *</div>
                        <div className="field"><input onChange={::this.handleImageAdd} type="file" style={{lineHeight:'18px', marginTop:'9px'}} /></div>
                        <div className="spacer">&nbsp;</div>
                      </div>
                      
                      <div style={{clear: 'both', width: '600px', margin: '0 auto', textAlign: 'center'}}>
                        {images}
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
