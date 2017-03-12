import React, { Component } from 'react'
import Errors from '../components/Errors'

export default class EditTicketSrForm extends Component {        
  componentDidMount(){
    window.setCalendar('editTicketSrFormCalendar');
    //window.setSelectedRadionButton('ct_id_btn', this.props.addTicketSrForm.constructionTypeId);
  }
  componentDidUpdate(){
    window.setCalendar('editTicketSrFormCalendar');        
  }

  onEditTicketSrSubmit(e){    
    e.preventDefault()    
    if(this.props.isDisableEditTicketSrForm == 'False'){
      this.props.editTicketSrForm.ticket['thedate_ticket'] = this.refs['ticket_date'].value
      return this.props.activeProjectsActions.updateTicketSr(this.props.editTicketSrForm, this.refs['ticket_file'], this.refs['material_image_1'], this.refs['material_image_2'], this.refs['material_image_3'], this.refs['material_image_4'])    
    }
    else{
      alert('Loading... Please wait.')    
    }
    
  }

  getAddButtonStatus() {            
    if(this.props.isDisableEditTicketSrForm == 'False'){
      return 'Update'
    }
    return 'Processing...'
  }    

  showErrors() {            
    if(this.props.editTicketSrError != ''){
      return (<Errors errorString={this.props.editTicketSrError} />)
    }
    return ''
  }        

  handleFormChange(e){        
    console.log(e.currentTarget.name)
    if(e.currentTarget.name == 'salvage[]'){
      let inventory = []
      let salvage = document.getElementsByName('salvage[]')
      let i = -1
      let count = salvage.length
      while(++i < count) {        
        if(salvage[i].checked){
          inventory.push(salvage[i].value);
        }        
      }
      inventory = inventory.join()                  
      this.props.editTicketSrForm.ticket['inventory'] = inventory
    }
    else{
      this.props.editTicketSrForm.ticket[e.currentTarget.name] = e.currentTarget.value    
    }
    this.props.editTicketSrForm.ticket['thedate_ticket'] = this.refs['ticket_date'].value    
    return this.props.editTicketSrFormActions.setUpdateTicketSrData(this.props.editTicketSrForm.ticket, this.props.editTicketSrForm.indexes, this.props.editTicketSrForm.CITY_ID)
  }      

  render() {      
    const { imgHost, projectsPage, editTicketSrForm } = this.props     
    
    let materialsList
    let inventory = editTicketSrForm.ticket.inventory.split(',')        
    let self = this
    materialsList = projectsPage.salvageMaterials.map(function (item) {      
      return (                                      
          <li key={'salvage_mat_'+item.MATERIAL_SALVAGE_ID} style={{width:'28%', float:'left'}}>                          
              <input type="checkbox" value={item.MATERIAL_SALVAGE_ID} name="salvage[]" checked={inventory.includes(item.MATERIAL_SALVAGE_ID.toString())?"checked":""} onChange={::self.handleFormChange} /> {item.name}            
          </li>
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

    var facilitiesList
    facilitiesList = projectsPage.salvageFacilities.map(function (item) {
      return (        
          <option key={'fac_'+item.FACILITY_ID} value={item.FACILITY_ID}>{item.name}</option>        
      )
    })    

    // var selectedFacilitiesList
    // selectedFacilitiesList = projectsPage.selectedSalvageFacilities.map(function (item) {
    //   return (        
    //       <option key={'sel_fac_'+item.FACILITY_ID} value={item.FACILITY_ID}>{item.name}</option>        
    //   )
    // })

    var donatedFields
    if(editTicketSrForm.ticket.CONSTRUCTION_TYPE_ID == 18){
        donatedFields = <div>
            <div className="row" style={{paddingTop: '10px'}}>
              <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Facility *</div>
              <div className="column-35 no-border">
                    <select name="FACILITY_ID" value={editTicketSrForm.ticket.FACILITY_ID} onChange={::this.handleFormChange} required>
                      <option value=''>-- Select Facility --</option>
                      {facilitiesList}                                                                                              
                       
                    </select>
              </div>                           
            </div>

            <div className="row">
              <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket # *</div>
              <div className="column-35 no-border">
                    <input type="text" placeholder="enter ticket number" required="required" name="ticket" value={editTicketSrForm.ticket.ticket} onChange={::this.handleFormChange} />
              </div>                           
            </div>

            <div className="row" style={{paddingTop: '10px'}}>
              <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket Image </div>
              <div className="column-35 no-border">
                    <input ref="ticket_file" type="file" name="image" />
              </div>                           
            </div>

            <div className="row" style={{paddingTop: '10px'}}>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket Date * </div>
                <div className="column-35 no-border">
                      <input ref="ticket_date" type="text" placeholder="enter ticket date" required="required" name="thedate_ticket" className="editTicketSrFormCalendar" data-date-format="yyyy-mm-dd" value={editTicketSrForm.ticket.thedate_ticket} onChange={::this.handleFormChange} readOnly="readonly" />
                </div>                           
            </div>
      </div>
    }        
        
    return <div>                  
      <div id="edit_ticket_sr" className="reveal-add-users">        
        <div>
          <form encType='multipart/form-data' id="edit_ticket_sr_form" onSubmit={::this.onEditTicketSrSubmit}>
            <input id="edit_ticket_sr_project_id" ref="edit_ticket_sr_project_id" type="hidden" name="PROJECT_ID" value={this.props.editTicketSrForm.ticket.PROJECT_ID} required="required" />            
            <div style={{marginTop: 19}} className="titles">
              <img style={{margin: '-1px 0px 0px 0px', padding: '0px 12px 0px 12px'}} src={imgHost + "/_images/icons/content/add.png"} />Edit Salvage and Reuse Ticket
            </div>
            
            <div className="forms">                                              
              {::this.showErrors()}              

              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Choose *</div>
                <div className="column-30 no-border" style={{width: '85%', padding: '5px 0'}}>
                <ul style={{listStyleType:'none'}}>
                  {materialsList}
                </ul>
                </div>                                
              </div>                              
              
              {donatedFields}                            
              
              <div className="row" style={{paddingTop: '10px'}}>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Weight *</div>
                <div className="column-35 no-border">
                  <input style={{width: '120px'}} type="text" placeholder="enter ticket weight" required="required" name="weight" value={editTicketSrForm.ticket.weight} onChange={::this.handleFormChange} />
                  <select name="units" required="required" style={{width: '90px', margin: '0 10px'}} value={editTicketSrForm.ticket.units} onChange={::this.handleFormChange}>
                    <option value='tons'>Tons</option>
                    <option value='yards'>C. Y.</option>
                    <option value='pounds'>Pounds</option>
                  </select>
                  <select name="percentage" required="required" style={{width: '80px', display:editTicketSrForm.ticket.CONSTRUCTION_TYPE_ID==18?'inline-block':'none'}} value={editTicketSrForm.ticket.percentage} onChange={::this.handleFormChange}>
                    {percentageOptions}
                  </select>
                </div>
              </div>                

              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Description</div>
                <div className="column-30 no-border" style={{width: '85%', paddingTop: '10px', paddingBottom: '10px'}}>
                  <textarea name="description" rows="2" style={{width: '90%'}} value={editTicketSrForm.ticket.description} onChange={::this.handleFormChange}></textarea>
                </div>                                
              </div>                

              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Materials</div>
                <div className="column-30 no-border" style={{width: '85%', lineHeight: '34px'}}>
                  <div><input ref="material_image_1" type="file" name="material_image_1" /></div>
                  <div><input ref="material_image_2" type="file" name="material_image_2" /></div>
                  <div><input ref="material_image_3" type="file" name="material_image_3" /></div>
                  <div><input ref="material_image_4" type="file" name="material_image_4" /></div>
                </div>                                
              </div>                

              <div className="row" style={{paddingTop: '10px'}}>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Submitted By *</div>
                <div className="column-35 no-border"><input type="text" placeholder="" required="required" name="submitted_by" value={editTicketSrForm.ticket.submitted_by} onChange={::this.handleFormChange} /></div>                
              </div>              
              
              <div className="row">
                <div className="content no-border">
                  <div style={{margin: '-6px 0px 0px 0px', padding: 0}} className="column-50 no-border">&nbsp;</div>
                  <div style={{margin: '-6px 0px 0px 0px', padding: '0px 20px 0px 0px', textAlign: 'right'}} className="column-50 no-border"><input type="submit" value={::this.getAddButtonStatus()} /></div>
                </div>
              </div>
            </div>
          </form>
          <a className="close-reveal-modal">&#215;</a>
        </div>
      </div>
      <a id="reveal_add_new_ticket_sr" style={{display: 'none'}} data-reveal-id="add_new_ticket_sr" data-animation="fade">&nbsp;</a>
    </div>
  }
}
