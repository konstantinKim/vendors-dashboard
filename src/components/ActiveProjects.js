import React, { PropTypes, Component } from 'react'


export default class ActiveProjects extends Component {
    render() {
        const { projects } = this.props
        var projectsListTemplate

        if (projects.length > 0) {
            projectsListTemplate = projects.map(function (item, index) {
                return (
                    <div key={item.id}>
                        <div className="row">
                          <div style={{margin: '0 auto', /*width: '95%', */ width: 1040}} id="accordion-main"
                               className="panel-group">
                              <div style={{background: 'none', marginTop: '-2px'}} className="panel panel-default">
                                  <a style={{float: 'right', marginBottom: '-33px', padding: '2px 17px 5px 10px', position: 'relative', top: 10, right: '10%'}}
                                     href="projects-add-ticket.html" className="button"><span
                                      style={{font: 'normal 20px ArialRegular', position: 'relative', top: 2}}>+ </span>Add
                                      New Ticket</a>
                                  <a href={'#collapse'+index} data-parent="#accordion-main" data-toggle="collapse">
                                      <div
                                          style={{color: '#333', margin: '0px 0px -5px 0px', width: '100%', height: '100%', minHeight: '100%'}}
                                          className="panel-heading white">
                                          <span
                                              style={{borderRight: 'solid 1px #fff', display: 'table-cell', padding: '15px 5px 15px 15px', textAlign: 'right', width: 40, height: '100%', minHeight: '100%'}}>1.</span>
                                          <span
                                              style={{borderRight: 'solid 1px #ccc', display: 'table-cell', padding: '15px 0px 15px 7px', width: 281, height: '100%', minHeight: '100%'}}>
                                            {item.name}<br />
                                            {item.address}
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #ccc', display: 'table-cell', padding: '15px 0px 15px 16px', width: 197, height: '100%', minHeight: '100%'}}>
                                            {item.number}
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #fff', display: 'table-cell', fontFamily: 'ArialBold', padding: '15px 0px 15px 17px', width: 477, height: '100%', minHeight: '100%'}}>
                                            Number of tickets added: (<span className="blue-text">{item.tickets.length}</span>)
                                              {/*<span class="button add-ticket-button"><span style="font: normal 20px ArialRegular; position: relative; top: 2px; z-index: 9999;">+ </span>Add New Ticket</span>*/}
                                          </span>
                                          <span
                                              style={{borderRight: 'solid 1px #fff', display: 'table-cell', padding: 0, width: 40, height: '100%', minHeight: '100%'}}>
                                            <span className="glyphicon glyphicon-align-justify"/>
                                          </span>
                                      </div>
                                  </a>

                                  <div id={'collapse'+index} className="panel-collapse collapse">
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
                                                              src="../_images/icons/nav/tab-facilities.png"/>Hauler and
                                                          Subcontractor Ticket Entry
                                                      </div>
                                                      <div className="col-ghgrid-5">
                                                          <div
                                                              style={{font: 'normal 12px ArialRegular', padding: '6px 6px 0px 0px', textAlign: 'right'}}>
                                                              Number of Tickets Uploaded (55)&nbsp;&nbsp;
                                                              <a style={{padding: '6px 14px 7px 12px'}}
                                                                 href="projects-add-ticket.html" className="button"><span
                                                                  style={{fontSize: 20, position: 'relative', top: 3}}>+</span>
                                                                  Add New Ticket</a>
                                                              <a style={{padding: '6px 14px 7px 12px'}} href="#"
                                                                 className="button"><span
                                                                  style={{fontSize: 20, position: 'relative', top: 3}}>+</span>
                                                                  Submit For Final</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="header">
                                                      <p style={{fontSize: 14, paddingLeft: 18}}>ABC Trucking and Hauling
                                                          <span
                                                              style={{color: '#7fc8ff', fontFamily: 'ArialRegular', paddingLeft: 6}}>8594 Hegenberger Road, Oakland, CA 96473</span>
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
                                                          style={{font: 'normal 20px ArialBold'}}>5</span></div>
                                                      <div className="column-50">Total Tons Hauled&nbsp;&nbsp;–&nbsp;&nbsp;
                                                          <span style={{font: 'normal 20px ArialBold'}}>71.38</span></div>
                                                  </div>
                                                  <div style={{lineHeight: '56px', marginTop: '-1px', width: '100%'}}
                                                       className="titles dark">
                                                      <div style={{borderRight: 'solid 1px #bbb'}} className="column-50">
                                                          Number of Materials Hauled&nbsp;&nbsp;–&nbsp;&nbsp;<span
                                                          style={{font: 'normal 20px ArialBold'}}>1</span></div>
                                                      <div className="column-50">Total Tons Recycled&nbsp;&nbsp;–&nbsp;&nbsp;
                                                          <span style={{font: 'normal 20px ArialBold'}}>67.81</span></div>
                                                  </div>
                                                  <div style={{lineHeight: '56px', marginTop: '-1px', width: '100%'}}
                                                       className="titles dark">
                                                      Diversion Rate for this Hauler or Subcontractor&nbsp;&nbsp;–&nbsp;&nbsp;
                                                      <span style={{font: 'normal 20px ArialBold'}}>72.87</span>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div style={{width: '100%'}} className="content">
                                                      <div className="column-16 no-border">Ticket #</div>
                                                      <div className="column-16 no-border">Submitted By</div>
                                                      <div className="column-10 no-border">Weight</div>
                                                      <div className="column-10 no-border">Recycled</div>
                                                      <div className="column-11 no-border">Diversion %</div>
                                                      <div className="column-11 no-border">Date</div>
                                                      <div style={{padding: 0, textAlign: 'center'}}
                                                           className="column-11 no-border">Accept / Reject
                                                      </div>
                                                      <div style={{padding: 0, textAlign: 'center'}}
                                                           className="column-5 no-border">View
                                                      </div>
                                                      <div style={{padding: '0px 0px 0px 10px'}}
                                                           className="column-5 no-border">Edit
                                                      </div>
                                                      <div style={{padding: 0}} className="column-5 no-border">Delete</div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div style={{margin: '0px 0px 0px -1px'}} id="accordion"
                                                       className="panel-group">
                                                      {/* list */}
                                                      <div
                                                          style={{background: 'none', marginTop: '-2px', width: '100.1% !important'}}
                                                          className="panel panel-default">{/* <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">15</a> */}
                                                          <div style={{lineHeight: 40, height: 40}}
                                                               className="panel-heading white panel-content">
                                                              <div style={{margin: 0, width: '100%'}} id="settings-container">
                                                                  <div style={{border: 'none', width: '100%'}}
                                                                       className="content">
                                                                      <div className="column-3 no-border">1.</div>
                                                                      <div
                                                                          style={{borderLeft: 'none', fontFamily: 'ArialBold', padding: 0}}
                                                                          className="column-13 no-border">01234'56px'7890
                                                                      </div>
                                                                      <div className="column-16 no-border">Terrylyn Dunne
                                                                      </div>
                                                                      <div className="column-10 no-border">17.49</div>
                                                                      <div className="column-10 no-border">16.62</div>
                                                                      <div className="column-11 no-border">95%</div>
                                                                      <div className="column-11 no-border">11/26/2009</div>
                                                                      <div
                                                                          style={{padding: '5px 0px 0px 0px', textAlign: 'center'}}
                                                                          className="column-11 no-border">
                                                                          <a style={{color: '#0A0', fontSize: 21, textDecoration: 'none'}}
                                                                             href="#" data-animation="fade"
                                                                             data-reveal-id="reveal-ticket-accept"
                                                                             className="glyphicon glyphicon-ok-circle"/>&nbsp;
                                                                          <a style={{color: '#cc3300', fontSize: 21, textDecoration: 'none'}}
                                                                             href="#" data-animation="fade"
                                                                             data-reveal-id="reveal-ticket-reject"
                                                                             className="glyphicon glyphicon-remove-circle"/>
                                                                      </div>
                                                                      <div
                                                                          style={{padding: '0px 0px 0px 1px', textAlign: 'center'}}
                                                                          className="column-5 no-border">
                                                                          <a href="#collapseOne" data-parent="#accordion"
                                                                             data-toggle="collapse"><img
                                                                              src="../_images/icons/nav/tab-search.png"/></a>
                                                                      </div>
                                                                      <div style={{padding: '0px 0px 0px 14px'}}
                                                                           className="column-5 no-border">
                                                                          <a href="#"><img
                                                                              src="../_images/icons/content/pen.png"/></a>
                                                                      </div>
                                                                      <div style={{padding: '0px 0px 0px 10px'}}
                                                                           className="column-5 no-border">
                                                                          <a href="#"><img
                                                                              src="../_images/icons/content/close-blue.png"/></a>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div className="panel-collapse collapse" id="collapseOne">
                                                              <div style={{borderTop: 'none'}} className="panel-body">
                                                                  <div className="row">
                                                                      <div
                                                                          style={{borderLeft: 'none', margin: '20px auto 29px auto', width: '92%'}}
                                                                          className="content">
                                                                          <div style={{padding: 0}}
                                                                               className="column-70 no-border">
                                                                              <div
                                                                                  style={{margin: '-7px auto -7px auto', padding: 0, width: '100%'}}
                                                                                  id="settings-container">
                                                                                  <table className="table table-bordered"
                                                                                         id="table-ticket-1">
                                                                                      <thead style={{margin: 0, padding: 0}}>
                                                                                      <tr className="titles">
                                                                                          <th style={{padding: '9px 0px 9px 15px !important'}}
                                                                                              className="tdata-bold">Material
                                                                                          </th>
                                                                                          <th style={{padding: '9px 0px 9px 15px !important'}}
                                                                                              className="tdata-bold">% Applied
                                                                                          </th>
                                                                                          <th style={{padding: '9px 0px 9px 15px !important'}}
                                                                                              className="tdata-bold">Weight
                                                                                          </th>
                                                                                          <th style={{padding: '9px 0px 9px 15px !important'}}
                                                                                              className="tdata-bold"><span
                                                                                              style={{position: 'relative', top: 1}}>Disposition</span>
                                                                                          </th>
                                                                                      </tr>
                                                                                      </thead>
                                                                                      <tfoot style={{margin: 0, padding: 0}}>
                                                                                      <tr style={{border: 'solid 1px #ccc'}}>
                                                                                          <th className="tdata-bold">Total
                                                                                          </th>
                                                                                          <th className="tdata-bold">100%</th>
                                                                                          <th className="tdata-bold">10 tons
                                                                                          </th>
                                                                                          <th className="tdata-bold">93%</th>
                                                                                      </tr>
                                                                                      </tfoot>
                                                                                      <tbody
                                                                                          style={{border: 'none !important', padding: 0}}>
                                                                                      <tr className="content">
                                                                                          <td className="tdata-bold">1.
                                                                                              Bricks, Masonry, &amp; Stone
                                                                                              Products Stone Products
                                                                                          </td>
                                                                                          <td className="tdata">10</td>
                                                                                          <td className="tdata">1 tons</td>
                                                                                          <td className="tdata">Recycled</td>
                                                                                      </tr>
                                                                                      <tr className="content">
                                                                                          <td className="tdata-bold">2.
                                                                                              Cardboard and Paper
                                                                                          </td>
                                                                                          <td className="tdata">20%</td>
                                                                                          <td className="tdata">2 tons</td>
                                                                                          <td className="tdata">Recycled</td>
                                                                                      </tr>
                                                                                      </tbody>
                                                                                  </table>
                                                                              </div>
                                                                          </div>
                                                                          <div style={{padding: '20px 20px 0px 20px'}}
                                                                               className="column-30 no-border">
                                                                              <div
                                                                                  style={{border: 'none', margin: 0, textAlign: 'center', width: '100%'}}
                                                                                  className="content">
                                                                                  <a data-animation="fade"
                                                                                     data-reveal-id="reveal-ticket-1" href="#"
                                                                                     className="link-regular"><img
                                                                                      src="../_images/tickets/01.jpg"/><br /><span
                                                                                      className="blue-text">click to zoom</span></a>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="row">
                                                                      <div className="note">
                                                                          Note: Lorem ipsum dolor sit amet, consectetur
                                                                          adipiscing elit. Aenean rutrum in arcu eu aliquam.
                                                                          Vestibulum ante ipsum primis in faucibus orci luctus
                                                                          et ultrices posuere cubilia Curae; Proin non erat a
                                                                          diam consequat vestibulum a quis ante. Duis lorem
                                                                          ante, dictum at pharetra ut, mollis vitae tortor. In
                                                                          arcu est, placerat eget est nec, tempus pellentesque
                                                                          ex.
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      {/* end list */}
                                                  </div>
                                              </div>
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
            <div className="container-gh" id="global-main-top-bar">
                <div className="row">
                    <div className="col-ghgrid-3">
                        <div style={{float: 'left'}}>
                            <img style={{margin: 0, padding: '11px 0px 0px 12px'}}
                                 src="../_images/icons/content/header-list.png"/>

                            <p>My Projects List</p>
                        </div>
                        <div style={{float: 'left'}}>
                            <span className="divider">&nbsp;</span>
                        </div>
                    </div>
                    <div className="col-ghgrid-3">&nbsp;</div>
                    <div className="col-ghgrid-2"></div>
                </div>
            </div>

            <div style={{marginTop: '-2px'}} id="global-main-tabs" className="container-gh">
                <div style={{position: 'relative', top: '-2px'}} className="row">
                    <div className="col-gh-5">
                        <a href="haulsub-projects-active.html" className="link-regular">
                            <span className="tabs-projects-selected border"><img
                                style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}}
                                src="../_images/icons/nav/tab-statistics.png"/>Active Projects (<span
                                className="blue-text">16</span>)</span>
                        </a>
                    </div>
                    <div className="col-gh-5">
                        <a href="haulsub-projects-completed.html" className="link-regular">
                            <span className="tabs-projects border"><img
                                style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}}
                                src="../_images/icons/nav/tab-check.png"/>Completed (<span
                                className="blue-text">68</span>)</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-gh" id="global-main-content">
                <div id="settings-container">
                    <div className="titles">
                        <div className="column-31">Project Address</div>
                        <div className="column-19">Turner Project #</div>
                        <div className="column-50 no-border">Tickets</div>
                    </div>
                </div>                
                {projectsListTemplate}
            </div>
        </div>
    }
}

ActiveProjects.propTypes = {
    projects: PropTypes.array.isRequired
}