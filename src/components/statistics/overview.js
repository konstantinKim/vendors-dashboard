import React, { Component } from 'react'
import RatesInfo from '../../components/statistics/ratesInfo'
import Tabs from '../../components/statistics/tabs'
import Filter from '../../components/statistics/filter'
import * as numberFormat from '../../helpers/numberFormat'

export default class Overview extends Component {    
  componentDidMount(){                
    const { statisticsActions, statistics } = this.props                                            
    //statisticsActions.setDateRange(statistics.dateFrom, statistics.dateTo)
    statisticsActions.getRecyclingTotals(statistics.dateFrom, statistics.dateTo)        
  }

  componentDidUpdate(){    
    /*const { statisticsActions, statistics } = this.props                                            
    statisticsActions.getRecyclingTotals(statistics.dateFrom, statistics.dateTo)    
    alert('componentDidUpdate')*/
  }
  
  render() {         
    var ReactHighcharts = require('react-highcharts');
    require('highcharts-no-data-to-display')(ReactHighcharts.Highcharts)     
               
    const { imgHost, statisticsActions, statistics } = this.props                                        
    const { recyclingTotals, currentTab, stats } = this.props.statistics
    return <div>                  
      <div>
        <div id="global-main-top-bar" className="container-gh">
          <div className="row">
            <div className="col-ghgrid-8">
              <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-graph-vertical.png"} /><p>Recycling Statistics</p>
            </div>
          </div>
        </div>
        {<RatesInfo stats={stats} />}
        {<Tabs imgHost={imgHost} statisticsActions={statisticsActions} currentTab={currentTab}  />}
        
        {/* start charts */}
        <div id="global-main-content" className="container-gh">
          {/* date/time filer */}
          <div id="statistics-filter" className="row">
            <div className="col-ghgrid-4">
              &nbsp;
            </div>
            <div className="col-ghgrid-4">
              <div className="right">
                <Filter statistics={statistics} statisticsActions={statisticsActions} />
              </div>
            </div>
          </div>
          {/* statistics title */}
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="statistics-title">
                Recycling Totals<br />
                <span>Salvaged, Recycled, and Disposed by Tons</span>
              </div>
            </div>
          </div>
          {/* chart donut */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-donut-container { border: none; margin: 60px auto 0px auto; overflow: hidden; padding: 0; width: 1038px; /*width: 94%;*/ height: auto; }\n\t\t\t#chart-donut { margin: 0 auto; padding: 0; width: auto; height: 420px; }\n\t\t\t.highcharts-tooltip span { background: #4c4c4c; border: none; color: #fff; font: normal 10px Arial; line-height: 16px; margin: 0; padding: 6px 8px 6px 8px; text-align: center; width: auto;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\t-khtml-border-radius: 3px;\n\t\t\t\t-moz-border-radius: 3px;\n\t\t\t\t-ms-border-radius: 3px;\n\t\t\t\t-o-border-radius: 3px;\n\t\t\t\t-webkit-border-radius: 3px;\n\t\t\t\topacity: 0.9;\n\t\t\t\t-khtml-opacity: 0.9;\n\t\t\t\t-moz-opacity: 0.9;\n\t\t\t\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n\t\t\t\tfilter: alpha(opacity=90);\n\t\t\t\t-o-opacity: 0.9;\n\t\t\t\t-webkit-opacity: 0.9;\n\t\t\t}\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-donut-container">
                <ReactHighcharts config={recyclingTotals.donutChart}></ReactHighcharts>
              </div>
            </div>
          </div>
          {/* end chart donut */}
          {/* chart line */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-line-container { border: none; margin: 40px auto 0px auto; overflow: hidden; padding: 0; width: 900px; /*width: 94%;*/ height: auto; }\n\t\t\t#line-chart { margin: 0 auto; padding: 0; height: 420px; }\n        " }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-line-container">
                <ReactHighcharts config={recyclingTotals.timelineChart}></ReactHighcharts>
              </div>
            </div>
          </div>
          {/* end chart line */}
        </div>
        {/* end charts */}
        {/* statistics overall bar */}
        <div style={{marginTop: 0}} id="global-main-top-bar" className="container-gh">
          <div className="row">
            <div className="col-ghgrid-8">
              <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-graph-vertical.png"} /><p>Contractor Overall Statistics</p>
            </div>
          </div>
        </div>
        {/* statistics overall content */}
        <div id="statistics-overall-content" className="container-gh">
          <div style={{margin: '-3px 0px 8px 0px'}} className="row">
            <div className="col-gh-3">
              <div className="content">
                <p><span className="left">Total Projects</span> <span className="right">{recyclingTotals.totalProjects}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Active Projects</span> <span className="right">{recyclingTotals.activeProjects}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Completed Projects</span> <span className="right">{recyclingTotals.completedProjects}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Avg. Project Duration</span> <span className="right">{recyclingTotals.projectsDuration} days</span></p>
              </div>
            </div>
            <div className="col-gh-3">
              <div className="content">
                <p><span className="left">Materials Recycled</span> <span className="right">{recyclingTotals.materialsRecycled}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Facilities Used</span> <span className="right">{recyclingTotals.facilitiesUsed}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Total Tickets</span> <span className="right">{recyclingTotals.totalTickets}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Avg. Ticket Weight</span> <span className="right">{numberFormat.addCommas(recyclingTotals.avgTicketWeight)} t</span></p>
              </div>
            </div>
            <div className="col-gh-3">
              <div className="content">
                <p><span className="left">Total Sq. Ft.</span> <span className="right">{numberFormat.addCommas(recyclingTotals.totalSqFt)} sq ft</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Total Dollar Val.</span> <span className="right">${numberFormat.addCommas(recyclingTotals.totalDollarVal)}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Project Types</span> <span className="right">{recyclingTotals.projectTypes}</span></p>
              </div>
              <div className="content">
                <p><span className="line">&nbsp;</span></p>
              </div>
              <div className="content">
                <p><span className="left">Avg. Project Tonnage</span> <span className="right">{numberFormat.addCommas(recyclingTotals.avgProjectTonnage)} t</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
