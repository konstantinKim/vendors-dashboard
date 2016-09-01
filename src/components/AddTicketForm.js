import React, { Component } from 'react'

export default class AddTicketForm extends Component {      
  render() {    
    const { imgHost } = this.props
    return <div>            
      <div id="add_new_ticket" className="reveal-add-users">        
        <div>
          <form action method="post" name>
            <input type="hidden" defaultValue="<?=$project->PROJECT_ID?>" name="Add[PROJECT_ID]" />
            <div style={{marginTop: 19}} className="titles">
              <img style={{margin: '-1px 0px 0px 0px', padding: '0px 12px 0px 12px'}} src={imgHost + "/_images/icons/content/add.png"} />Add Ticket
            </div>
            <div className="forms">                                
              <div className="row">
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-15 no-border">Email *</div>
                <div className="column-35 no-border"><input type="email" placeholder="enter email address" required="required" name="Add[email]" className="customEmail" /></div>
                <div style={{lineHeight: '34px', textAlign: 'right'}} className="column-10 no-border">ID *</div>
                <div className="column-40 no-border"><input type="text" required="required" placeholder="0123456789" name="Add[custom_subcontractor_id]" style={{textAlign: 'center', width: '33%'}} /></div>
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
