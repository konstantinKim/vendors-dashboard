import React, { Component } from 'react'
import Errors from '../components/Errors'

export default class AddTicketForm extends Component {        
  componentDidMount(){
    window.setCalendar('addTicketFormCalendar');
  }

  onAddTicketSubmit(e) {        
    e.preventDefault()    
    if(this.props.disableAddTicketForm == 'False'){
      var inputs = document.querySelectorAll("#add_new_ticket input, #add_new_ticket select");        
      return this.props.activeProjectsActions.addTicket(inputs, this.refs['ticket_file'])
    }
    alert('Processing. Please wait.')    
  }  

  getAddButtonStatus() {            
    if(this.props.disableAddTicketForm == 'False'){
      return 'Add Ticket'
    }
    return 'Processing...'
  }    

  showErrors() {            
    if(this.props.addTicketError != ''){
      return (<Errors errorString={this.props.addTicketError} />)
    }
    return ''
  }    

  onChangeMaterial(e) {            
    var materialId = e.currentTarget.value
    var cityId = this.props.addTicketForm.cityId
    var projectId = this.props.addTicketForm.projectId
    return this.props.projectsActions.getFacilities(cityId, materialId, projectId)
  }    

  render() {    
    const { imgHost, projectsPage } = this.props     
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

    var selectedFacilitiesList
    selectedFacilitiesList = projectsPage.selectedFacilities.map(function (item) {
      return (        
          <option key={'sel_fac_'+item.FACILITY_ID} value={item.FACILITY_ID}>{item.name}</option>        
      )
    })    

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
      <div id="add_new_ticket" className="reveal-add-users">        
        <div>
          <form encType='multipart/form-data' id="add_ticket_form" onSubmit={::this.onAddTicketSubmit}>
            <input id="add_ticket_project_id" ref="add_ticket_project_id" type="hidden" defaultValue={this.props.addTicketForm.projectId} name="PROJECT_ID" required="required" />
            <input id="add_ticket_city_id" ref="add_ticket_city_id" type="hidden" defaultValue={this.props.addTicketForm.cityId} name="CITY_ID" required="required" />
            <div style={{marginTop: 19}} className="titles">
              <img style={{margin: '-1px 0px 0px 0px', padding: '0px 12px 0px 12px'}} src={imgHost + "/_images/icons/content/add.png"} />Add Ticket
            </div>
            {::this.showErrors()}
            <div className="forms">                                              
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket # *</div>
                <div className="column-35 no-border"><input type="text" placeholder="enter ticket number" required="required" name="ticket" /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Material *</div>
                <div className="column-40 no-border">
                      <select onChange={::this.onChangeMaterial} name="MATERIAL_ID" required="required">
                        <option value=''>-- Select Material --</option>
                        {materialsList}                                                                                              
                      </select>
                </div>
              </div>                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket Date *</div>
                <div className="column-35 no-border"><input type="text" placeholder="enter ticket date" required="required" name="thedate" className="addTicketFormCalendar" ref="calendar" data-date-format="yyyy-mm-dd" /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Facility *</div>
                <div className="column-40 no-border">
                      <select name="FACILITY_ID" required>
                        <option value=''>-- Select Facility --</option>
                        {facilitiesList}                                                                                              
                        <optgroup label="Project Selected Facilities">
                          {selectedFacilitiesList}
                        </optgroup> 
                      </select>
                </div>
              </div>               
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Weight *</div>
                <div className="column-35 no-border">
                  <input style={{width: '120px'}} type="text" placeholder="enter ticket weight" required="required" name="weight" />
                  <select name="units" required="required" style={{width: '90px', margin: '0 10px'}}>
                    <option value='tons'>Tons</option>
                    <option value='yards'>C. Y.</option>
                    <option value='pounds'>Pounds</option>
                  </select>
                  <select name="percentage" required="required" style={{width: '80px'}}>
                    {percentageOptions}
                  </select>
                </div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border"></div>
                <div className="column-40 no-border">
                      
                </div>
              </div>                 
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Submitted By *</div>
                <div className="column-35 no-border"><input type="text" placeholder="" required="required" name="submitted_by" /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Image *</div>
                <div className="column-40 no-border">
                      <input ref="ticket_file" type="file" name="image" required="required" />
                </div>
              </div>                
              <div className="row">
                <div className="content no-border">
                  <div style={{margin: '-6px 0px 0px 0px', padding: 0}} className="column-50 no-border">&nbsp;</div>
                  <div style={{margin: '-6px 0px 0px 0px', padding: '0px 20px 0px 0px', textAlign: 'right'}} className="column-50 no-border"><input type="submit" defaultValue={::this.getAddButtonStatus()} name /></div>
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
