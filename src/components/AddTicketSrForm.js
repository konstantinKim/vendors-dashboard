import React, { Component } from 'react'
import Errors from '../components/Errors'

export default class AddTicketSrForm extends Component {        
  componentDidMount(){
    window.setCalendar('addTicketSrFormCalendar');
    //window.setSelectedRadionButton('ct_id_btn', this.props.addTicketSrForm.constructionTypeId);
  }
  componentDidUpdate(){
    window.setCalendar('addTicketSrFormCalendar');    
  }

  onAddTicketSubmit(e) {        
    e.preventDefault()  
    if(this.props.disableAddTicketForm == 'False'){      
      var inputs = document.querySelectorAll("#add_ticket_sr_form input, #add_ticket_sr_form select, #add_ticket_sr_form textarea");              
      var inventory = []
      let salvage = document.getElementsByName('salvage[]')
      let i = -1
      let count = salvage.length
      while(++i < count) {        
        if(salvage[i].checked){
          inventory.push(salvage[i].value);
        }
        
      }
      inventory = inventory.join()            
      inputs.inventory = inventory      
      inputs.CONSTRUCTION_TYPE_ID = this.props.addTicketSrForm.constructionTypeId
      return this.props.activeProjectsActions.addTicketSr(inputs, this.refs['ticket_file'], this.refs['material_image_1'], this.refs['material_image_2'], this.refs['material_image_3'], this.refs['material_image_4'])
    }
    alert('Processing. Please wait.')              
  }  

  onChangeReuseType(e) {                
    return this.props.addTicketSrFormActions.setConstructionTypeId(e.currentTarget.value)
  }

  onChangeTicketType(e) {
    this.props.activeProjectsActions.clearAddTicketError()              
    return window.changeTicketTypeForm(e.currentTarget.value, this.props.addTicketForm.projectId)
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

  render() {      
    const { imgHost, projectsPage } = this.props     
    
    let materialsList
    materialsList = projectsPage.salvageMaterials.map(function (item) {
      return (                  
          <li key={'salvage_mat_'+item.MATERIAL_SALVAGE_ID} style={{width:'28%', float:'left'}}>
            <input type="checkbox" value={item.MATERIAL_SALVAGE_ID} name="salvage[]" /> {item.name}
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
    if(this.props.addTicketSrForm.constructionTypeId == '18'){
        donatedFields = <div>
            <div className="row">
              <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Facility *</div>
              <div className="column-35 no-border">
                    <select name="FACILITY_ID" required>
                      <option value=''>-- Select Facility --</option>
                      {facilitiesList}                                                                                              
                       
                    </select>
              </div>                           
            </div>

            <div className="row">
              <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket # *</div>
              <div className="column-35 no-border">
                    <input type="text" placeholder="enter ticket number" required="required" name="ticket" />
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
                      <input type="text" placeholder="enter ticket date" required="required" name="thedate_ticket" className="addTicketSrFormCalendar" data-date-format="yyyy-mm-dd" readOnly="readonly" />
                </div>                           
            </div>
      </div>
    }        
    
    return <div>                  
      <div id="add_new_ticket_sr" className="reveal-add-users">        
        <div>
          <form encType='multipart/form-data' id="add_ticket_sr_form" onSubmit={::this.onAddTicketSubmit}>
            <input id="add_ticket_sr_project_id" ref="add_ticket_sr_project_id" type="hidden" name="PROJECT_ID" defaultValue={this.props.addTicketForm.projectId} required="required" />
            <input id="add_ticket_sr_city_id" ref="add_ticket_sr_city_id" type="hidden" name="CITY_ID" defaultValue={this.props.addTicketForm.cityId} required="required" />
            <div style={{marginTop: 19}} className="titles">
              <img style={{margin: '-1px 0px 0px 0px', padding: '0px 12px 0px 12px'}} src={imgHost + "/_images/icons/content/add.png"} />Add Salvage and Reuse Ticket
            </div>
            
            <div className="forms">                                              
              {::this.showErrors()}
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket Type *</div>
                <div className="column-35 no-border">
                  <select onChange={::this.onChangeTicketType} name="type" required="required" value="sr">
                    <option value='sr'>Salvage and Reuse</option>      
                    <option value='rd'>Recycle and Dispose</option>                          
                  </select>                  
                </div>                
                
              </div>                

              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Choose *</div>
                <div className="column-30 no-border" style={{width: '85%', padding: '5px 0'}}>
                <ul style={{listStyleType:'none'}}>
                  {materialsList}
                </ul>
                </div>                                
              </div>                

              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Usage *</div>
                <div className="column-30 no-border" style={{width: '85%', padding: '5px 0'}}>
                  <ul style={{listStyleType:'none'}}>
                    <li><input className="ct_id_btn" onChange={::this.onChangeReuseType} type="radio" name="CONSTRUCTION_TYPE_ID" value="18" checked={this.props.addTicketSrForm.constructionTypeId==18?"checked":""} />&nbsp; Donated</li>
                    <li><input className="ct_id_btn" onChange={::this.onChangeReuseType} type="radio" name="CONSTRUCTION_TYPE_ID" value="17" checked={this.props.addTicketSrForm.constructionTypeId==17?"checked":""} />&nbsp; Reuse OnSite</li>
                    <li><input className="ct_id_btn" onChange={::this.onChangeReuseType} type="radio" name="CONSTRUCTION_TYPE_ID" value="19" checked={this.props.addTicketSrForm.constructionTypeId==19?"checked":""} />&nbsp; Salvage for reuse on other project</li>
                  </ul>
                </div>                                
              </div>     
              
              {donatedFields}                            
              
              <div className="row" style={{paddingTop: '10px'}}>
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
              </div>                

              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Description</div>
                <div className="column-30 no-border" style={{width: '85%', paddingTop: '10px', paddingBottom: '10px'}}>
                  <textarea name="description" rows="2" style={{width: '90%'}}></textarea>
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
                <div className="column-35 no-border"><input type="text" placeholder="" required="required" name="submitted_by" /></div>                
              </div>              
              
              <div className="row">
                <div className="content no-border">
                  <div style={{margin: '-6px 0px 0px 0px', padding: 0}} className="column-50 no-border">&nbsp;</div>
                  <div style={{margin: '-6px 0px 0px 0px', padding: '0px 20px 0px 0px', textAlign: 'right'}} className="column-50 no-border"><input type="submit" defaultValue={::this.getAddButtonStatus()} /></div>
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
