import React, { Component } from 'react'

export default class EditTicketForm extends Component {          

  render() { 
    const { imgHost, editTicketForm } = this.props       

    return <div>                  
      <div id="edit_ticket" className="reveal-add-users">        
        <div>
          <form encType='multipart/form-data' id="edit_ticket_form">
            <input id="update_ticket_id" ref="update_ticket_id" type="hidden" defaultValue={editTicketForm.TICKET_ID} name="TICKET_RD_ID" required="required" />            
            <div style={{marginTop: 19}} className="titles">
              <img style={{margin: '-1px 0px 0px 0px', padding: '0px 12px 0px 12px'}} src={imgHost + "/_images/icons/content/add.png"} />Edit Ticket
            </div>
            <div className="forms">                                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket # *</div>
                <div className="column-35 no-border"><input type="text" placeholder={editTicketForm.ticket} name="ticket" defaultValue={editTicketForm.ticket} /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Material *</div>
                <div className="column-40 no-border">
                      <select name="MATERIAL_ID" required="required" defaultValue={editTicketForm.MATERIAL_ID}>
                        <option value=''>-- Select Material --</option>                        
                      </select>
                </div>
              </div>                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Ticket Date *</div>
                <div className="column-35 no-border"><input type="text" name="thedate" className="calendar" ref="update_calendar" data-date-format="yyyy-mm-dd" defaultValue={editTicketForm.thedate} placeholder={editTicketForm.thedate} /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Facility *</div>
                <div className="column-40 no-border">
                      <select name="FACILITY_ID" required defaultValue={editTicketForm.FACILITY_ID}>
                        <option value=''>-- Select Facility --</option>                        
                      </select>
                </div>
              </div>               
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Weight *</div>
                <div className="column-35 no-border">
                  <input style={{width: '120px'}} type="text" placeholder={editTicketForm.weight} defaultValue={editTicketForm.weight} name="weight" />
                  <select name="units" required="required" style={{width: '90px', margin: '0 10px'}} defaultValue={editTicketForm.units}>
                    <option value='tons'>Tons</option>
                    <option value='yards'>C. Y.</option>
                    <option value='pounds'>Pounds</option>
                  </select>
                  <select name="percentage" required="required" style={{width: '80px'}} defaultValue={editTicketForm.percentage}>
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
                <div className="column-35 no-border"><input type="text" name="submitted_by" defaultValue={editTicketForm.submitted_by} placeholder={editTicketForm.submitted_by} /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">Image *</div>
                <div className="column-40 no-border">
                      <input ref="ticket_file" type="file" name="image" />
                </div>
              </div>                
              <div className="row">
                <div className="content no-border">
                  <div style={{margin: '-6px 0px 0px 0px', padding: 0}} className="column-50 no-border">&nbsp;</div>
                  <div style={{margin: '-6px 0px 0px 0px', padding: '0px 20px 0px 0px', textAlign: 'right'}} className="column-50 no-border"><input type="submit" defaultValue="Update" /></div>
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
