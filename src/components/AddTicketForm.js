import React, { Component } from 'react'

export default class AddTicketForm extends Component {      
  onAddTicketSubmit(e) {        
    e.preventDefault()    
    var inputs = document.querySelectorAll("#add_new_ticket input, #add_new_ticket select");        
    return this.props.activeProjectsActions.addTicket(inputs, this.refs['ticket_file'])
  }  

  render() {    
    const { imgHost, projectsPage } = this.props     
    var materialsList
    materialsList = projectsPage.materials.map(function (item) {
      return (        
          <option key={'mat_'+item.MATERIAL_ID} value={item.MATERIAL_ID}>{item.name}</option>        
      )
    })    

    return <div>                  
      <div id="add_new_ticket" className="reveal-add-users">        
        <div>
          <form encType='multipart/form-data' id="add_ticket_form" onSubmit={::this.onAddTicketSubmit}>
            <input type="hidden" defaultValue="1" name="PROJECT_ID" />
            <div style={{marginTop: 19}} className="titles">
              <img style={{margin: '-1px 0px 0px 0px', padding: '0px 12px 0px 12px'}} src={imgHost + "/_images/icons/content/add.png"} />Add Ticket
            </div>
            <div className="forms">                                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket # *</div>
                <div className="column-35 no-border"><input type="text" placeholder="enter ticket number" required="required" name="ticket" /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Material *</div>
                <div className="column-40 no-border">
                      <select name="MATERIAL_ID" required="required">
                        <option value=''>-- Select Material --</option>
                        {materialsList}                                                                                              
                      </select>
                </div>
              </div>                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket Date *</div>
                <div className="column-35 no-border"><input type="text" placeholder="enter ticket date" required="required" name="thedate" className="calendar" ref="calendar" data-date-format="yyyy-mm-dd" /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Facility *</div>
                <div className="column-40 no-border">
                      <select name="FACILITY_ID" required>
                        <option value=''>-- Select Facility --</option>
                        {materialsList}                                                                                              
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
                    <option value='100'>100%</option>
                    <option value='95'>95%</option>
                    <option value='90'>90%</option>
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
                  <div style={{margin: '-6px 0px 0px 0px', padding: '0px 20px 0px 0px', textAlign: 'right'}} className="column-50 no-border"><input type="submit" defaultValue="Add Ticket" name /></div>
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
