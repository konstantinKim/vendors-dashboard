import React, { Component } from 'react'
import RatesInfo from '../../components/statistics/ratesInfo'
import Tabs from '../../components/statistics/tabs'
import Filter from '../../components/statistics/filter'
import * as numberFormat from '../../helpers/numberFormat'

export default class ProjectTypes extends Component {  

  componentWillMount(){
    const { statisticsActions, statistics } = this.props                                                    
    statisticsActions.getProjectsStats(statistics.dateFrom, statistics.dateTo)        
  }

  componentDidUpdate(){        
    window.setDataTable('statistics-table')    
  }

  exportExcel(e){
    e.preventDefault()
    var A = [['Project Type','Projects','Total (tons)','Total(%)','Reused (tons)','Reused (%)','Recycled (tons)','Recycled (%)','Disposed (tons)','Disposed (%)']];

    var list = this.props.statistics.projectTypes.projectTypesList
    var ll = list.length    

    for(var k=0; k < ll; ++k){
      var row = []
      row.push('"'+list[k].name+'"')
      row.push(list[k].projects)
      row.push('"' + numberFormat.addCommas(list[k].totalTons) + '"')
      row.push('"' + numberFormat.addCommas(list[k].totalPercent) + '"')
      row.push('"' + numberFormat.addCommas(list[k].reused) + '"')
      row.push('"' + numberFormat.addCommas(list[k].reusedPercent) + '"')
      row.push('"' + numberFormat.addCommas(list[k].recycled) + '"')
      row.push('"' + numberFormat.addCommas(list[k].recycledPercent) + '"')
      row.push('"' + numberFormat.addCommas(list[k].disposed) + '"')
      row.push('"' + numberFormat.addCommas(list[k].disposedPercent) + '"')
      A.push(row)
    }
    
    var csvRows = [];
    for(var i=0, l=A.length; i<l; ++i){
        csvRows.push(A[i].join(','));        
    }    

    var csvString = csvRows.join('\n');
    var a         = document.createElement('a');
    a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvString);
    a.target      = '_blank';
    a.download    = 'ProjectTypesStatistics.csv';

    document.body.appendChild(a);
    a.click();      
  }
  
  render() {         
    var ReactHighcharts = require('react-highcharts');                
    const { imgHost, statisticsActions, statistics } = this.props                                        
    const { projectTypes, stats, currentTab } = this.props.statistics
    const self = this

    var listTemplate
    if(projectTypes.projectTypesList.length > 0){
      listTemplate = projectTypes.projectTypesList.map(function (item, index) {
        return (
          <tr key={'pt_' + index}>
            <td className="column-title">{item.name}</td>
            <td className="column-stats">{item.projects}</td>
            <td className="column-stats">{numberFormat.addCommas(item.totalTons)}</td>
            <td className="column-stats">{numberFormat.addCommas(item.totalPercent)}%</td>
            <td className="column-stats">{numberFormat.addCommas(item.reused)}</td>
            <td className="column-stats">{numberFormat.addCommas(item.reusedPercent)}%</td>
            <td className="column-stats">{numberFormat.addCommas(item.recycled)}</td>
            <td className="column-stats">{numberFormat.addCommas(item.recycledPercent)}%</td>
            <td className="column-stats">{numberFormat.addCommas(item.disposed)}</td>
            <td className="column-stats">{numberFormat.addCommas(item.disposedPercent)}%</td>
          </tr>
        )
      })
    }

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
              <div className="left">
                &nbsp;
              </div>
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
                Project Recycling Totals<br />
                <span>Salvaged, Recycled, and Disposed by Tons</span>
              </div>
            </div>
          </div>
          {/* chart donut */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-donut-container { border: none; margin: 60px auto 0px auto; overflow: hidden; padding: 0; width: 1038px; /*width: 94%;*/ height: auto; }\n\t\t\t#chart-donut { margin: 0 auto; padding: 0; width: auto; height: 420px; }\n\t\t\t.highcharts-tooltip span { background: #4c4c4c; border: none; color: #fff; font: normal 10px Arial; line-height: 16px; margin: 0; padding: 6px 8px 6px 8px; text-align: center; width: auto;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\t-khtml-border-radius: 3px;\n\t\t\t\t-moz-border-radius: 3px;\n\t\t\t\t-ms-border-radius: 3px;\n\t\t\t\t-o-border-radius: 3px;\n\t\t\t\t-webkit-border-radius: 3px;\n\t\t\t\topacity: 0.9;\n\t\t\t\t-khtml-opacity: 0.9;\n\t\t\t\t-moz-opacity: 0.9;\n\t\t\t\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n\t\t\t\tfilter: alpha(opacity=90);\n\t\t\t\t-o-opacity: 0.9;\n\t\t\t\t-webkit-opacity: 0.9;\n\t\t\t}\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-donut-container">
                <ReactHighcharts config={projectTypes.donutChart}></ReactHighcharts>
              </div>
            </div>
          </div>
          {/* end chart donut */}
          {/* chart line */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-line-container { border: none; margin: 40px auto 0px auto; overflow: hidden; padding: 0; width: 900px; /*width: 94%;*/ height: auto; }\n\t\t\t#line-chart { margin: 0 auto; padding: 0; height: 420px; }\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-line-container">
                <ReactHighcharts config={projectTypes.timelineChart}></ReactHighcharts>
              </div>
            </div>
          </div>
          {/* end chart line */}
        </div>
        {/* end charts */}
      
        <div className="print-page-break"></div>
        
        {/* statistics overall bar */}
        <div style={{marginTop: 0}} id="global-main-top-bar" className="container-gh">
          <div className="row">
            <div className="col-ghgrid-8">
              <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-graph-vertical.png"} /><p>Project Types Statistics</p>
            </div>
          </div>
        </div>
        {/* statistics table content */}
        <div id="statistics-overall-content" className="container-gh">
          {/* date/time filer */}
          <div style={{margin: '-1px 0px 0px 31px'}} id="statistics-filter" className="row">
            <div className="col-ghgrid-4">
              <div className="left">
                <a onClick={window.doPrint} style={{marginLeft: 0, cursor:'pointer'}} className="button-print">Print</a>
                <a onClick={::self.exportExcel} href="#" className="button-print">Excel</a>
              </div>
            </div>
            <div className="col-ghgrid-4">
              <div className="right">
                <Filter statistics={statistics} statisticsActions={statisticsActions} />
              </div>
            </div>
          </div>
          {/* table content */}
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="statistics-table-container">
                {/*<table id="statistics-table" class="table table-striped table-bordered">*/}
                <table className="table table-striped table-bordered table-hover" id="statistics-table" ref="statisticsTable">
                  <thead>
                    <tr>
                      <th className="column-title">&nbsp;&nbsp;Project Type</th>
                      <th className="column-stats">Projects</th>
                      <th className="column-stats">Total<br />(tons)</th>
                      <th className="column-stats">Total<br />(%)</th>
                      <th className="column-stats">Salvaged<br />(tons)</th>
                      <th className="column-stats">Salvaged<br />(%)</th>
                      <th className="column-stats">Recycled<br />(tons)</th>
                      <th className="column-stats">Recycled<br />(%)</th>
                      <th className="column-stats">Disposed<br />(tons)</th>
                      <th className="column-stats">Diposed<br />(%)</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th className="column-title-footer">&nbsp;&nbsp;Total</th>
                      <th className="column-stats-footer">{projectTypes.totalProjects}</th>
                      <th className="column-stats-footer">{numberFormat.addCommas(projectTypes.totalTons)}</th>
                      <th className="column-stats-footer">100%</th>
                      <th className="column-stats-footer">{numberFormat.addCommas(projectTypes.reused)}</th>
                      <th className="column-stats-footer">{numberFormat.addCommas(projectTypes.reusedPercent)}%</th>
                      <th className="column-stats-footer">{numberFormat.addCommas(projectTypes.recycled)}</th>
                      <th className="column-stats-footer">{numberFormat.addCommas(projectTypes.recycledPercent)}%</th>
                      <th className="column-stats-footer">{numberFormat.addCommas(projectTypes.disposed)}</th>
                      <th className="column-stats-footer">{numberFormat.addCommas(projectTypes.disposedPercent)}%</th>
                    </tr>
                  </tfoot>
                  <tbody>                    
                      {listTemplate}                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
