import React, { PropTypes, Component } from 'react'


export default class ActiveProjects extends Component {
    render() {
        const { projects, imgHost } = this.props
        var projectsListTemplate        

        if (projects.length > 0) {
            projectsListTemplate = projects.map(function (item, index) {

                return (
                    <div key={'project_'+item.PROJECT_ID}>
                        <div className="row">
                          <div style={{margin: '0 auto', /*width: '95%', */ width: 1040}} id="accordion-main"
                               className="panel-group">
                              <div style={{background: 'none', marginTop: '-2px'}} className="panel panel-default">
                                  <a style={{float: 'right', marginBottom: '-33px', padding: '2px 17px 5px 10px', position: 'relative', top: 10, right: '10%'}}
                                     href="projects-add-ticket.html" className="button"><span
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
                                            {item.street}
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #ccc', display: 'table-cell', padding: '15px 0px 15px 16px', width: 197, height: '100%', minHeight: '100%'}}>
                                            {item.turner_number}
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #fff', display: 'table-cell', fontFamily: 'ArialBold', padding: '15px 0px 15px 17px', width: 477, height: '100%', minHeight: '100%'}}>
                                            Number of tickets added: (<span className="blue-text">{item.tickets_count}</span>)
                                              {/*<span class="button add-ticket-button"><span style="font: normal 20px ArialRegular; position: relative; top: 2px; z-index: 9999;">+ </span>Add New Ticket</span>*/}
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
                                                      Tickets Entered By Haulers and Subs<br />
                                                      <span>SEPARATED BY HAULERS AND SUBS</span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="row">
                                              <div className="col-ghgrid-8">
                                                  <div
                                                      style={{color: '#fff', font: 'normal 10px ArialRegular', letterSpacing: '.15px', lineHeight: 14, float: 'right', margin: '-80px 2% 0px 0px', textAlign: 'center'}}>
                                                      <br />
                                                      <a href="#" className="link-regular"><span
                                                          style={{margin: '0px 0px 4px 0px', lineHeight:'15px'}}
                                                          className="rounded-corner">Export Recycling<br />Tickets To Excel</span></a>
                                                      <a href="#" className="link-regular"><span className="rounded-corner"
                                                                                                 style={{lineHeight:'15px'}}>Export Savlage<br />Tickets To Excel</span></a>
                                                  </div>
                                                  <div id="chart-donut-container">
                                                      <div id="chart-donut-ticket"/>
                                                  </div>
                                              </div>
                                          </div>
                                          <div style={{margin: '30px auto 29px auto', width: '94%'}} id="settings-container">
                                              <div className="row">
                                                  <div style={{width: '100%'}} className="titles">
                                                      <div className="col-ghgrid-3">
                                                          <img
                                                              style={{padding: '0px 8px 0px 12px', position: 'relative', top: '-2px'}}
                                                              src={imgHost + "/_images/icons/nav/tab-facilities.png"}/>Hauler and
                                                          Subcontractor Ticket Entry
                                                      </div>
                                                      <div className="col-ghgrid-5">
                                                          <div
                                                              style={{font: 'normal 12px ArialRegular', padding: '6px 6px 0px 0px', textAlign: 'right'}}>
                                                              Number of Tickets Uploaded ({item.tickets_count})&nbsp;&nbsp;
                                                              <a style={{padding: '6px 14px 7px 12px'}}
                                                                 href="projects-add-ticket.html" className="button"><span
                                                                  style={{fontSize: 20, position: 'relative', top: 3}}>+</span>
                                                                  Add New Ticket</a>                                                              
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="header">
                                                      <p style={{fontSize: 14, paddingLeft: 18}}>Vendor Company Name
                                                          <span
                                                              style={{color: '#7fc8ff', fontFamily: 'ArialRegular', paddingLeft: 6}}>{item.street}</span>
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
                                                      Diversion Rate for this Hauler or Subcontractor&nbsp;&nbsp;–&nbsp;&nbsp;
                                                      <span style={{font: 'normal 20px ArialBold'}}>{item.rate}</span>
                                                  </div>
                                              </div>
                                              {item.facilities.map(function(facility, f_index){
                                                return(
                                                  <div key={'facility_'+facility.FACILITY_ID+'_'+f_index}>
                                                    <div className="header">
                                                      <p style={{fontSize: 14, paddingLeft: 18}}>{facility.name}</p>                                                      
                                                    </div>
                                                    <div className="row">
                                                        <div style={{width: '100%'}} className="content">
                                                            <div className="column-16 no-border">Ticket #</div>
                                                            <div className="column-11 no-border">Material</div>
                                                            <div className="column-16 no-border">Submitted By</div>
                                                            <div className="column-10 no-border">Weight</div>
                                                            <div className="column-10 no-border">Recycled</div>
                                                            <div className="column-11 no-border">Diversion %</div>
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
                                                    {facility.tickets.map(function(ticket){
                                                      return(
                                                        <div key={'ticket_'+ticket.TICKET_RD_ID}>
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
                                                                                    <div className="column-3 no-border">1.</div>
                                                                                    <div
                                                                                        style={{borderLeft: 'none', fontFamily: 'ArialBold', padding: 0}}
                                                                                        className="column-13 no-border">{ticket.ticket}
                                                                                    </div>
                                                                                    <div className="column-11 no-border">{ticket.material}</div>
                                                                                    <div className="column-16 no-border">{ticket.submitted_by}</div>
                                                                                    <div className="column-10 no-border">{ticket.weight}</div>
                                                                                    <div className="column-10 no-border">{ticket.recycled}</div>
                                                                                    <div className="column-11 no-border">{ticket.rate_used}%</div>
                                                                                    <div className="column-11 no-border">{ticket.date_created}</div>                                                                                    
                                                                                    <div
                                                                                        style={{padding: '0px 0px 0px 1px', textAlign: 'center'}}
                                                                                        className="column-5 no-border">
                                                                                        <a href={"#collapseOne"+ticket.TICKET_RD_ID} data-parent="#accordion"
                                                                                           data-toggle="collapse"><img
                                                                                            src={imgHost + "/_images/icons/nav/tab-search.png"}/></a>
                                                                                    </div>
                                                                                    <div style={{padding: '0px 0px 0px 14px'}}
                                                                                         className="column-5 no-border">
                                                                                        <a href="#"><img
                                                                                            src={imgHost + '/_images/icons/content/pen.png'}/></a>
                                                                                    </div>
                                                                                    <div style={{padding: '0px 0px 0px 10px'}}
                                                                                         className="column-5 no-border">
                                                                                        <a href="#"><img
                                                                                            src={imgHost + "/_images/icons/content/close-blue.png"}/></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="panel-collapse collapse" id={"collapseOne"+ticket.TICKET_RD_ID}>
                                                                            <div style={{borderTop: 'none'}} className="panel-body">
                                                                                Image Here                                                                  
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