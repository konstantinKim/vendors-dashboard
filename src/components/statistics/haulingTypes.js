import React, { Component } from 'react'
import RatesInfo from '../../components/statistics/ratesInfo'
import Tabs from '../../components/statistics/tabs'
import Filter from '../../components/statistics/filter'

export default class HaulingTypes extends Component {    
  
  render() {         
    var ReactHighcharts = require('react-highcharts');                
    const { imgHost, statisticsActions } = this.props                                        
    const { haulingTypes, stats, currentTab } = this.props.statistics
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
                <Filter />
              </div>
            </div>
          </div>
          {/* statistics title */}
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="statistics-title">
                Hauling Types<br />
                <span>Salvaged, Recycled, and Disposed by Tons</span>
              </div>
            </div>
          </div>
          {/* chart donut */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-donut-container { border: none; margin: 60px auto 0px auto; overflow: hidden; padding: 0; width: 1038px; /*width: 94%;*/ height: auto; }\n\t\t\t#chart-donut { margin: 0 auto; padding: 0; width: auto; height: 420px; }\n\t\t\t.highcharts-tooltip span { background: #4c4c4c; border: none; color: #fff; font: normal 10px Arial; line-height: 16px; margin: 0; padding: 6px 8px 6px 8px; text-align: center; width: auto;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\t-khtml-border-radius: 3px;\n\t\t\t\t-moz-border-radius: 3px;\n\t\t\t\t-ms-border-radius: 3px;\n\t\t\t\t-o-border-radius: 3px;\n\t\t\t\t-webkit-border-radius: 3px;\n\t\t\t\topacity: 0.9;\n\t\t\t\t-khtml-opacity: 0.9;\n\t\t\t\t-moz-opacity: 0.9;\n\t\t\t\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n\t\t\t\tfilter: alpha(opacity=90);\n\t\t\t\t-o-opacity: 0.9;\n\t\t\t\t-webkit-opacity: 0.9;\n\t\t\t}\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-donut-container">
                <ReactHighcharts config={haulingTypes.donutChart}></ReactHighcharts>
              </div>
            </div>
          </div>
          {/* end chart donut */}
          {/* chart line */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-line-container { border: none; margin: 40px auto 0px auto; overflow: hidden; padding: 0; width: 900px; /*width: 94%;*/ height: auto; }\n\t\t\t#line-chart { margin: 0 auto; padding: 0; height: 420px; }\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-line-container">
                <ReactHighcharts config={haulingTypes.timelineChart}></ReactHighcharts>
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
              <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-graph-vertical.png"} /><p>Hauling Types Statistics</p>
            </div>
          </div>
        </div>
        {/* statistics table content */}
        <div id="statistics-overall-content" className="container-gh">
          {/* date/time filer */}
          <div style={{margin: '-1px 0px 0px 31px'}} id="statistics-filter" className="row">
            <div className="col-ghgrid-4">
              <div className="left">
                <a style={{marginLeft: 0}} href="#" className="button-print">Print</a><a href="#" className="button-print">Excel</a>
              </div>
            </div>
            <div className="col-ghgrid-4">
              <div className="right">
                <Filter />
              </div>
            </div>
          </div>
          {/* table content */}
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="statistics-table-container">
                <div className="statistics-box">
                  <div className="left">Debris Box Service</div>
                  <div className="right">2</div>
                </div>
                <div className="statistics-box-space">&nbsp;</div>
                <div className="statistics-box">
                  <div className="left">Hauiling Service</div>
                  <div className="right">2</div>
                </div>
                <div className="statistics-box-space">&nbsp;</div>
                <div className="statistics-box">
                  <div className="left">Self Haul</div>
                  <div className="right">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
