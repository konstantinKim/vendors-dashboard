import React, { Component } from 'react'
import Errors from '../components/Errors'

export default class EditTicketForm extends Component {  
  componentDidMount(){
    window.setCalendar('editTicketFormCalendar');
  }

  onUpdateTicketSubmit(e) {
    e.preventDefault()    
    if(this.props.isDisableEditTicketForm == 'False'){      
      var inputs = document.querySelectorAll("#edit_ticket_form input, #edit_ticket_form select");              
      return this.props.activeProjectsActions.updateTicket(inputs, this.refs['ticket_file'], this.props.editTicketForm)      
    }
    alert('Loading... Please wait.')    
  }  

  getFormStatus() {
    if(this.props.isDisableEditTicketForm == 'False'){
      return 'Update'
    }
    return 'Processing...'
  }    

  isSelected(a, b){
    if(a == b){
      return 'selected'
    }
    return ''
  }      

  showErrors() {            
    if(this.props.editTicketError != ''){
      return (<Errors errorString={this.props.editTicketError} />)
    }
    return ''
  }        

  onChangeMaterial(e) {            
    var materialId = e.currentTarget.value
    var cityId = this.props.editTicketForm.CITY_ID
    var projectId = this.props.editTicketForm.PROJECT_ID
    this.handleFormChange(e)
    return this.props.projectsActions.getFacilities(cityId, materialId, projectId)    
  }    

  handleFormChange(e){    
    this.props.editTicketForm[e.currentTarget.name] = e.currentTarget.value    
    return this.props.editTicketFormActions.setUpdateTicketData(this.props.editTicketForm, this.props.editTicketForm.CITY_ID, this.props.editTicketForm.indexes)
  }    

  render() {     
    const { imgHost, editTicketForm, projectsPage } = this.props  
    
    var materialsList
    materialsList = projectsPage.materials.map(function (item) {      
      return (          
          <option key={'mat_'+item.MATERIAL_ID} value={item.MATERIAL_ID}>{item.name}</option>        
      )
    })     

    var facilitiesList
    facilitiesList = projectsPage.facilities.map(function (item) {
      return (        
          <option key={'fac_'+item.FACILITY_ID} value={item.FACILITY_ID}>{item.name}</option>        
      )
    })

    // var selectedFacilitiesList
    // selectedFacilitiesList = projectsPage.selectedFacilities.map(function (item) {
    //   return (        
    //       <option key={'sel_fac_'+item.FACILITY_ID} value={item.FACILITY_ID}>{item.name}</option>        
    //   )
    // })    

    let percentage = []
    for (var i = 100; i > 0; i = i-5){
       percentage.push({'percentage':i})
    }
    
    let percentageOptions
    percentageOptions = percentage.map(function (item) {
      return (        
          <option key={'perc_'+item.percentage} value={item.percentage}>{item.percentage}%</option>        
      )
    })            

    return <div>                  
      <div id="edit_ticket" className="reveal-add-users">        
        <div>
          <form encType='multipart/form-data' id="edit_ticket_form" onSubmit={::this.onUpdateTicketSubmit}>
            <input id="update_ticket_id" ref="update_ticket_id" type="hidden" defaultValue={editTicketForm.TICKET_ID} name="TICKET_RD_ID" required="required" />            
            <div style={{marginTop: 19}} className="titles">
              <img style={{margin: '-1px 0px 0px 0px', padding: '0px 12px 0px 12px'}} src={imgHost + "/_images/icons/content/add.png"} />Edit Ticket
            </div>
            {::this.showErrors()}
            <div className="forms">                                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket # *</div>
                <div className="column-35 no-border"><input type="text" placeholder={editTicketForm.ticket} name="ticket" value={editTicketForm.ticket} onChange={::this.handleFormChange} /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Material *</div>
                <div className="column-40 no-border">
                      <select onChange={::this.onChangeMaterial} name="MATERIAL_ID" required="required" value={editTicketForm.MATERIAL_ID}>
                        <option value=''>-- Select Material --</option>
                        {materialsList}                        
                      </select>
                </div>
              </div>                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket Date *</div>
                <div className="column-35 no-border"><input type="text" name="thedate" className="editTicketFormCalendar" ref="update_calendar" data-date-format="yyyy-mm-dd" value={editTicketForm.thedate} onChange={::this.handleFormChange} readOnly="readonly" /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Facility *</div>
                <div className="column-40 no-border">
                      <select name="FACILITY_ID" required value={editTicketForm.FACILITY_ID} onChange={::this.handleFormChange}>
                        <option value=''>-- Select Facility --</option>                        
                        {facilitiesList}
                         
                      </select>
                </div>
              </div>               
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Weight *</div>
                <div className="column-35 no-border">
                  <input style={{width: '120px'}} type="text" placeholder={editTicketForm.weight} value={editTicketForm.weight} name="weight" onChange={::this.handleFormChange} />
                  <select name="units" required="required" style={{width: '90px', margin: '0 10px'}} value={editTicketForm.units} onChange={::this.handleFormChange}>
                    <option value='tons'>Tons</option>
                    <option value='yards'>C. Y.</option>
                    <option value='pounds'>Pounds</option>
                  </select>
                  <select name="percentage" required="required" style={{width: '80px'}} value={editTicketForm.percentage} onChange={::this.handleFormChange}>
                    {percentageOptions}
                  </select>
                </div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border"></div>
                <div className="column-40 no-border">
                      
                </div>
              </div>                 
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Submitted By *</div>
                <div className="column-35 no-border"><input type="text" name="submitted_by" value={editTicketForm.submitted_by} placeholder={editTicketForm.submitted_by} onChange={::this.handleFormChange} /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Image *</div>
                <div className="column-40 no-border">
                      <input ref="ticket_file" type="file" name="image" />
                </div>
              </div>                
              <div className="row">
                <div className="content no-border">
                  <div style={{margin: '-6px 0px 0px 0px', padding: 0}} className="column-50 no-border">&nbsp;</div>
                  <div style={{margin: '-6px 0px 0px 0px', padding: '0px 20px 0px 0px', textAlign: 'right'}} className="column-50 no-border"><input type="submit" value={::this.getFormStatus()} /></div>
                </div>
              </div>
            </div>
          </form>
          <a className="close-reveal-modal">&#215;</a>
        </div>
      </div>
    </div>
  }
}
