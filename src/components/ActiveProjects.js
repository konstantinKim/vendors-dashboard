import React, { PropTypes, Component } from 'react'


export default class ActiveProjects extends Component {   
    componentWillMount(){                                        
        this.props.activeProjectsActions.getActiveProjects()                        
    }

    componentDidUpdate(){                                                
        window.zoomImg()
    }                      

    identifyTicket(e){          
          var projectId = e.target.attributes.getNamedItem('data-project-id').value
          var cityId = e.target.attributes.getNamedItem('data-project-city-id').value
          return this.props.addTicketFormActions.identifyTicket(projectId, cityId)
    }

    setUpdateTicketData(e){                              
          var project_index = e.currentTarget.attributes.getNamedItem('data-project-index').value                    
          var facility_index = e.currentTarget.attributes.getNamedItem('data-facility-index').value                    
          var ticket_index = e.currentTarget.attributes.getNamedItem('data-ticket-index').value                              
          var ticket = this.props.projects[project_index].facilities[facility_index].tickets[ticket_index]
          this.props.projectsActions.getFacilities(this.props.projects[project_index].CITY_ID, ticket.MATERIAL_ID, this.props.projects[project_index].PROJECT_ID)
          return this.props.editTicketFormActions.setUpdateTicketData(ticket, this.props.projects[project_index].CITY_ID, {'project_index': project_index, 'facility_index': facility_index, 'ticket_index': ticket_index}, this.props.projects[project_index].PROJECT_ID)
    }

    setUpdateTicketSrData(e){                              
          var project_index = e.currentTarget.attributes.getNamedItem('data-project-index').value
          var rtype_index = e.currentTarget.attributes.getNamedItem('data-rtype-index').value                    
          var ticket_index = e.currentTarget.attributes.getNamedItem('data-ticket-index').value                              
          var ticket = this.props.projects[project_index].reused_types[rtype_index].tickets[ticket_index]
          this.props.projectsActions.getSalvageFacilities(this.props.projects[project_index].CITY_ID, 7, this.props.projects[project_index].PROJECT_ID)
          return this.props.editTicketSrFormActions.setUpdateTicketSrData(ticket, {'project_index': project_index, 'rtype_index': rtype_index, 'ticket_index': ticket_index}, this.props.projects[project_index].CITY_ID)
    }

    deleteTicket(e){
          e.preventDefault()
          if(confirm('Are you sure you want to delete?')){
            var project_index = e.currentTarget.attributes.getNamedItem('data-project-index').value                    
            var facility_index = e.currentTarget.attributes.getNamedItem('data-facility-index').value                    
            var ticket_index = e.currentTarget.attributes.getNamedItem('data-ticket-index').value                              
            var ticket = this.props.projects[project_index].facilities[facility_index].tickets[ticket_index]                    
            return this.props.activeProjectsActions.deleteTicket(ticket, {'project_index': project_index, 'facility_index': facility_index, 'ticket_index': ticket_index})
          }
          return false;          
    }        

    deleteSrTicket(e){
          e.preventDefault()
          if(confirm('Are you sure you want to delete?')){
            var project_index = e.currentTarget.attributes.getNamedItem('data-project-index').value                    
            var rtype_index = e.currentTarget.attributes.getNamedItem('data-rtype-index').value                    
            var ticket_index = e.currentTarget.attributes.getNamedItem('data-ticket-index').value                              
            var ticket = this.props.projects[project_index].reused_types[rtype_index].tickets[ticket_index]                    
            return this.props.activeProjectsActions.deleteSrTicket(ticket, {'project_index': project_index, 'rtype_index': rtype_index, 'ticket_index': ticket_index})
          }
          return false;          
    }   

    collapseImg(e){
        e.preventDefault()
        var index = e.currentTarget.attributes.getNamedItem('data-id').value
        window.collapseImg(index);
    }     

    render() {                                                        
        var ReactHighcharts = require('react-highcharts');        
        const { projects, imgHost } = this.props                                        
        const self = this        
        var projectsListTemplate                                        
        if (projects.length > 0) {
            projectsListTemplate = projects.map(function (item, index) {                                                                            
                return (                                        
                    <div key={'project_'+item.PROJECT_ID}>                                                                                                                                                                        
                        <div className="row">
                          <div style={{margin: '0 auto', /*width: '95%', */ width: 1040}} id="accordion-main"
                               className="panel-group">
                              <div style={{background: 'none', marginTop: '-2px'}} className="panel panel-default">
                                  <a id={"add_ticket_btn_"+item.PROJECT_ID} onClick={::self.identifyTicket} style={{float: 'right', marginBottom: '-33px', padding: '2px 17px 5px 10px', position: 'relative', top: 10, right: '10%'}}
                                     href="#" data-reveal-id="add_new_ticket" data-animation="fade" data-project-id={item.PROJECT_ID} data-project-city-id={item.CITY_ID} className="button"><span
                                      style={{font: 'normal 20px ArialRegular', position: 'relative', top: 2}}>+ </span>Add
                                      New Ticket</a>
                                  <a href={'#collapse'+item.PROJECT_ID} data-parent="#accordion-main" data-toggle="collapse">
                                      <div
                                          style={{color: '#333', margin: '0px 0px -5px 0px', width: '100%', height: '100%', minHeight: '100%'}}
                                          className="panel-heading white">
                                          <span
                                              style={{borderRight: 'solid 1px #fff', display: 'table-cell', padding: '15px 5px 15px 15px', textAlign: 'right', width: 40, height: '100%', minHeight: '100%'}}>{index + 1}.</span>
                                          <span
                                              style={{borderRight: 'solid 1px #ccc', display: 'table-cell', padding: '15px 0px 15px 7px', width: 281, height: '100%', minHeight: '100%'}}>
                                            {item.name}<br />
                                            {item.street}<br />
                                            {item.city}, {item.state} {item.zipcode} 
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #ccc', display: 'table-cell', padding: '15px 0px 15px 16px', width: 197, height: '100%', minHeight: '100%'}}>
                                            {item.tracking}
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #fff', display: 'table-cell', fontFamily: 'ArialBold', padding: '15px 0px 15px 17px', width: 477, height: '100%', minHeight: '100%'}}>
                                            Number of tickets added: (<span className="blue-text">{item.tickets_count}</span>)                                              
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #fff', display: 'table-cell', padding: 0, width: 40, height: '100%', minHeight: '100%'}}>
                                            <span className="glyphicon glyphicon-align-justify"/>
                                          </span>
                                      </div>
                                  </a>

                                  <div id={'collapse'+item.PROJECT_ID} className="panel-collapse collapse">
                                      <div className="panel-body">
                                          <div className="row">
                                              <div className="col-ghgrid-8">
                                                  <div style={{marginTop: 25}} id="statistics-title">
                                                      Facilities Usage<br />
                                                      <span>Separated by Facility/Reuse Option</span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="row">
                                              <div className="col-ghgrid-8">                                                  
                                                  <div id="chart-donut-container" style={{margin: '0 auto', width: '900px'}}>
                                                      <ReactHighcharts id={'chart_'+item.PROJECT_ID} config={item.chartConfig} ref={'chart_'+item.PROJECT_ID}></ReactHighcharts>
                                                  </div>
                                              </div>
                                          </div>
                                          <div style={{margin: '30px auto 29px auto', width: '94%'}} id="settings-container">
                                              <div className="row">
                                                  <div style={{width: '100%'}} className="titles">
                                                      <div className="col-ghgrid-3">
                                                          <span className="icon fa fa-recycle" style={{margin: '0px 5px 0px 5px'}}></span>Facilities Usage and
                                                           Ticket Entry
                                                      </div>
                                                      <div className="col-ghgrid-5">
                                                          <div
                                                              style={{font: 'normal 12px ArialRegular', padding: '6px 6px 0px 0px', textAlign: 'right'}}>
                                                              Number of Tickets Uploaded ({item.tickets_count})&nbsp;&nbsp;
                                                              <a onClick={::self.identifyTicket} style={{padding: '6px 14px 7px 12px'}}
                                                                 href="#" data-reveal-id="add_new_ticket" data-animation="fade" data-project-id={item.PROJECT_ID} data-project-city-id={item.CITY_ID} className="button add_new_ticket_btn"><span
                                                                  style={{fontSize: 20, position: 'relative', top: 3}}>+</span>
                                                                  Add New Ticket</a>                                                              
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="header">
                                                      <p style={{fontSize: 14, paddingLeft: 18}}>
                                                          <span
                                                              style={{fontFamily: 'ArialRegular', paddingLeft: 6}}>{item.street}</span>
                                                      </p><a
                                                      style={{fontSize: 11, lineHeight: 37, marginLeft: 10, padding: '4px 10px 5px 8px'}}
                                                      href="#" className="button"><span
                                                      style={{color: '#fff', paddingRight: 3, position: 'relative', top: 2}}
                                                      className="glyphicon glyphicon-map-marker"/>map</a>
                                                  </div>
                                                  <div style={{lineHeight: '56px', marginTop: '-1px', width: '100%'}}
                                                       className="titles dark">
                                                      <div style={{borderRight: 'solid 1px #bbb'}} className="column-50">
                                                          Number of Tickets Entered&nbsp;&nbsp;–&nbsp;&nbsp;<span
                                                          style={{font: 'normal 20px ArialBold'}}>{item.tickets_count}</span></div>
                                                      <div className="column-50">Total Tons Hauled&nbsp;&nbsp;–&nbsp;&nbsp;
                                                          <span style={{font: 'normal 20px ArialBold'}}>{item.total_tons}</span></div>
                                                  </div>
                                                  <div style={{lineHeight: '56px', marginTop: '-1px', width: '100%'}}
                                                       className="titles dark">
                                                      <div style={{borderRight: 'solid 1px #bbb'}} className="column-50">
                                                          Number of Materials Hauled&nbsp;&nbsp;–&nbsp;&nbsp;<span
                                                          style={{font: 'normal 20px ArialBold'}}>{item.materials_hauled}</span></div>
                                                      <div className="column-50">Total Tons Recycled&nbsp;&nbsp;–&nbsp;&nbsp;
                                                          <span style={{font: 'normal 20px ArialBold'}}>{item.recycled}</span></div>
                                                  </div>
                                                  <div style={{lineHeight: '56px', marginTop: '-1px', width: '100%'}}
                                                       className="titles dark">
                                                      Diversion Rate &nbsp;&nbsp;–&nbsp;&nbsp;
                                                      <span style={{font: 'normal 20px ArialBold'}}>{item.rate}%</span>
                                                  </div>
                                              </div>
                                              {item.facilities.map(function(facility, f_index){
                                                return(
                                                  <div key={'facility_'+facility.FACILITY_ID+'_'+f_index}>
                                                    <div className="header">
                                                      <p style={{fontSize: 14, paddingLeft: 18}}>{facility.name}</p>                                                      
                                                    </div>
                                                    <div>
                                                      <div style={{lineHeight: '26px', fontSize: '14px', marginTop: '-1px', width: '100%'}}
                                                           className="titles dark">
                                                          <div style={{borderRight: 'solid 1px #bbb'}} className="column-50">
                                                              Tickets entered for this facility&nbsp;&nbsp;–&nbsp;&nbsp;<span
                                                              style={{font: 'normal 16px ArialBold'}}>{facility.tickets.length}</span></div>
                                                          <div className="column-50">Tons taken to this facility&nbsp;&nbsp;–&nbsp;&nbsp;
                                                              <span style={{font: 'normal 16px ArialBold'}}>{facility.tons_taken}</span></div>
                                                      </div>
                                                      <div style={{lineHeight: '26px', fontSize: '14px', marginTop: '-1px', width: '100%'}}
                                                           className="titles dark">
                                                          <div style={{borderRight: 'solid 1px #bbb'}} className="column-50">
                                                              Materials taken to this facility&nbsp;&nbsp;–&nbsp;&nbsp;<span
                                                              style={{font: 'normal 16px ArialBold'}}>{facility.materials_taken}</span></div>
                                                          <div className="column-50">Tons recycled at this facility&nbsp;&nbsp;–&nbsp;&nbsp;
                                                              <span style={{font: 'normal 16px ArialBold'}}>{facility.tons_recycled}</span></div>
                                                      </div>
                                                    </div>
                                                    <div className="row">
                                                        <div style={{width: '100%'}} className="content">
                                                            <div className="column-16 no-border">Ticket #</div>
                                                            <div className="column-11 no-border">Material</div>
                                                            <div className="column-16 no-border">Submitted By</div>
                                                            <div className="column-10 no-border">Weight</div>
                                                            <div className="column-10 no-border">Recycled</div>
                                                            <div className="column-11 no-border">Applied %</div>
                                                            <div className="column-11 no-border">Date</div>                                                            
                                                            <div style={{padding: 0, textAlign: 'center'}}
                                                                 className="column-5 no-border">View
                                                            </div>
                                                            <div style={{padding: '0px 0px 0px 10px'}}
                                                                 className="column-5 no-border">Edit
                                                            </div>
                                                            <div style={{padding: 0}} className="column-5 no-border">Delete</div>
                                                        </div>
                                                    </div>
                                                    {facility.tickets.map(function(ticket, t_index){
                                                      return(
                                                        <div id={"row_ticket_"+ticket.TICKET_RD_ID} key={'ticket_'+ticket.TICKET_RD_ID}>
                                                            <div className="row">
                                                                <div style={{margin: '0px 0px 0px -1px'}} id="accordion"
                                                                     className="panel-group">
                                                                    {/* list */}
                                                                    <div
                                                                        style={{background: 'none', marginTop: '-2px', width: '100.1% !important'}}
                                                                        className="panel panel-default">
                                                                        <div style={{lineHeight: 40, height: 40}}
                                                                             className="panel-heading white panel-content">
                                                                            <div style={{margin: 0, width: '100%'}} id="settings-container">
                                                                                <div style={{border: 'none', width: '100%'}}
                                                                                     className="content">
                                                                                    <div className="column-3 no-border">{t_index+1}.</div>
                                                                                    <div
                                                                                        style={{borderLeft: 'none', fontFamily: 'ArialBold', padding: 0}}
                                                                                        className="column-13 no-border">{ticket.ticket}
                                                                                    </div>
                                                                                    <div className="column-11 no-border" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', border: 'none'}} title={ticket.material}>{ticket.material}</div>
                                                                                    <div className="column-16 no-border" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', border: 'none'}} title={ticket.submitted_by}>{ticket.submitted_by}</div>
                                                                                    <div className="column-10 no-border">{ticket.weight}</div>
                                                                                    <div className="column-10 no-border">{ticket.recycled}</div>
                                                                                    <div className="column-11 no-border">{ticket.percentage}%</div>
                                                                                    <div className="column-11 no-border">{ticket.thedate}</div>                                                                                    
                                                                                    <div
                                                                                        style={{padding: '0px 0px 0px 1px', textAlign: 'center'}}
                                                                                        className="column-5 no-border">
                                                                                        <a href={"#collapseOne"+ticket.TICKET_RD_ID} data-parent="#accordion"
                                                                                           data-toggle="collapse"><span className="icon fa fa-search" style={{margin: '0px 0px 0px 0px'}}></span></a>
                                                                                    </div>
                                                                                    <div style={{padding: '0px 0px 0px 14px'}}
                                                                                         className="column-5 no-border">
                                                                                        <a onClick={::self.setUpdateTicketData} data-reveal-id="edit_ticket" data-animation="fade" data-project-index={index} data-facility-index={f_index} data-ticket-index={t_index} href="#">
                                                                                          <span className="icon fa fa-pencil" style={{margin: '0px 0px 0px 0px'}}></span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div style={{padding: '0px 0px 0px 10px'}}
                                                                                         className="column-5 no-border">
                                                                                        <a onClick={::self.deleteTicket} data-project-index={index} data-facility-index={f_index} data-ticket-index={t_index} href="#">
                                                                                          <span className="icon fa fa-remove" style={{margin: '0px 0px 0px 0px'}}></span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="panel-collapse collapse" id={"collapseOne"+ticket.TICKET_RD_ID}>
                                                                            <div style={{borderTop: 'none', textAlign: 'center'}} className="panel-body">
                                                                                <div className="zoomControls">
                                                                                    <button className="rotate_left" type="button" title="Rotate left"> &lt; </button>
                                                                                    <button className="zoom_out" type="button" title="Zoom out"> - </button>
                                                                                    <button className="fit" type="button" title="Fit image"> [ ]</button>
                                                                                    <button onClick={::self.collapseImg} data-id={"#collapseOne"+ticket.TICKET_RD_ID} className="zoom_close" type="button" title="Close"> X</button>
                                                                                    <button className="zoom_in" type="button" title="Zoom in"> + </button>
                                                                                    <button className="rotate_right" type="button" title="Rotate right"> &gt; </button>
                                                                                </div>
                                                                                <div className='doZoom'>
                                                                                    <img src={imgHost + ticket.image}/> 
                                                                                </div>                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end list */}
                                                                </div>
                                                            </div>
                                                        </div>                                                        
                                                      )
                                                    })}                                                    
                                                  </div>                                                  
                                                )
                                              })}
                                              {/* end FACILITIES list. */}
                                              {item.reused_types.map(function(rtype, rt_index){ 
                                                return(
                                                  <div key={'rtype_'+rt_index}>
                                                    <div className="header">
                                                      <p style={{fontSize: 14, paddingLeft: 18}}>{rtype.name}</p>                                                      
                                                    </div>                                                                                                                                                          
                                                    <div style={{lineHeight: '26px', fontSize: '14px', marginTop: '-1px', width: '100%'}}
                                                           className="titles dark">
                                                          <div style={{borderRight: 'solid 1px #bbb'}} className="column-50">
                                                              Tickets entered for this reuse type&nbsp;&nbsp;–&nbsp;&nbsp;<span
                                                              style={{font: 'normal 16px ArialBold'}}>{rtype.tickets.length}</span></div>
                                                          <div className="column-50">Tons taken to this reuse type&nbsp;&nbsp;–&nbsp;&nbsp;
                                                              <span style={{font: 'normal 16px ArialBold'}}>{rtype.tons_taken}</span></div>
                                                    </div>
                                                    <div className="row">
                                                        <div style={{width: '100%'}} className="content">
                                                            <div className="column-16 no-border">Ticket #</div>
                                                            <div className="column-11 no-border">Material</div>
                                                            <div className="column-16 no-border">Submitted By</div>
                                                            <div className="column-10 no-border">Weight</div>
                                                            <div className="column-10 no-border">Recycled</div>
                                                            <div className="column-11 no-border">Applied %</div>
                                                            <div className="column-11 no-border">Date</div>                                                            
                                                            <div style={{padding: 0, textAlign: 'center'}}
                                                                 className="column-5 no-border">View
                                                            </div>
                                                            <div style={{padding: '0px 0px 0px 10px'}}
                                                                 className="column-5 no-border">Edit
                                                            </div>
                                                            <div style={{padding: 0}} className="column-5 no-border">Delete</div>
                                                        </div>
                                                    </div>
                                                    {rtype.tickets.map(function(sr_ticket, srt_index){
                                                      return(
                                                        <div id={"row_sr_ticket_"+sr_ticket.TICKET_SR_ID} key={'sr_ticket_'+sr_ticket.TICKET_SR_ID}>
                                                            <div className="row">
                                                                <div style={{margin: '0px 0px 0px -1px'}} id="accordion"
                                                                     className="panel-group">
                                                                    {/* list */}
                                                                    <div
                                                                        style={{background: 'none', marginTop: '-2px', width: '100.1% !important'}}
                                                                        className="panel panel-default">
                                                                        <div style={{lineHeight: 40, height: 40}}
                                                                             className="panel-heading white panel-content">
                                                                            <div style={{margin: 0, width: '100%'}} id="settings-container">
                                                                                <div style={{border: 'none', width: '100%'}}
                                                                                     className="content">
                                                                                    <div className="column-3 no-border">{srt_index+1}.</div>
                                                                                    <div
                                                                                        style={{borderLeft: 'none', fontFamily: 'ArialBold', padding: 0}}
                                                                                        className="column-13 no-border">{sr_ticket.ticket?sr_ticket.ticket:'N/A'}
                                                                                    </div>
                                                                                    <div className="column-11 no-border" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', border: 'none'}} title={sr_ticket.material}>{sr_ticket.material}</div>
                                                                                    <div className="column-16 no-border" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', border: 'none'}} title={sr_ticket.submitted_by}>{sr_ticket.submitted_by}</div>
                                                                                    <div className="column-10 no-border">{sr_ticket.weight}</div>
                                                                                    <div className="column-10 no-border">{sr_ticket.weight}</div>
                                                                                    <div className="column-11 no-border">{sr_ticket.percentage}%</div>
                                                                                    <div className="column-11 no-border">{sr_ticket.thedate_ticket}</div>                                                                                    
                                                                                    <div
                                                                                        style={{padding: '0px 0px 0px 1px', textAlign: 'center'}}
                                                                                        className="column-5 no-border">
                                                                                        <a href={"#collapseSrImage"+sr_ticket.TICKET_SR_ID} data-parent="#accordion"
                                                                                           data-toggle="collapse"><span className="icon fa fa-search" style={{margin: '0px 0px 0px 0px'}}></span></a>
                                                                                    </div>
                                                                                    <div style={{padding: '0px 0px 0px 14px'}}
                                                                                         className="column-5 no-border">
                                                                                        <a onClick={::self.setUpdateTicketSrData} data-reveal-id="edit_ticket_sr" data-animation="fade" data-project-index={index} data-rtype-index={rt_index} data-ticket-index={srt_index} href="#">
                                                                                          <span className="icon fa fa-pencil" style={{margin: '0px 0px 0px 0px'}}></span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div style={{padding: '0px 0px 0px 10px'}}
                                                                                         className="column-5 no-border">
                                                                                        <a onClick={::self.deleteSrTicket} data-project-index={index} data-rtype-index={rt_index} data-ticket-index={srt_index} href="#">
                                                                                          <span className="icon fa fa-remove" style={{margin: '0px 0px 0px 0px'}}></span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="panel-collapse collapse" id={"collapseSrImage"+sr_ticket.TICKET_SR_ID}>

                                                                            <div style={{borderTop: 'none', textAlign: 'center'}} className="panel-body">
                                                                                <div style={{border: 'none', textAlign: 'left', padding: '10px 15px'}} className="panel-body">
                                                                                  <b>Description: </b> {sr_ticket.description} <br />
                                                                                  <b>Inventory: </b>  {sr_ticket.salvage_materials}<br />
                                                                                  <b>Facility: </b>  {sr_ticket.facility}<br />
                                                                                </div>
                                                                                <img width="185px" style={{padding:'5px'}} src={imgHost + sr_ticket.image}/>
                                                                                <img width="185px" style={{padding:'5px'}} src={imgHost + sr_ticket.material_image}/>
                                                                                <img width="185px" style={{padding:'5px'}} src={imgHost + sr_ticket.material_image2}/>
                                                                                <img width="185px" style={{padding:'5px'}} src={imgHost + sr_ticket.material_image3}/>
                                                                                <img width="185px" style={{padding:'5px'}} src={imgHost + sr_ticket.material_image4}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end list */}
                                                                </div>
                                                            </div>
                                                        </div>                                                        
                                                      )
                                                    })}
                                                  </div>
                                                )
                                              })}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                )
            })
        }
        
        return <div className='componentActiveProjects'>                                      
          {projectsListTemplate}                      
        </div>
    }
}

ActiveProjects.propTypes = {
    projects: PropTypes.array.isRequired
}