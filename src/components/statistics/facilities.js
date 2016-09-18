import React, { Component } from 'react'
import RatesInfo from '../../components/statistics/ratesInfo'
import Tabs from '../../components/statistics/tabs'
import Filter from '../../components/statistics/filter'

export default class Facilities extends Component {  

  componentDidMount(){
    //console.log($('#statistics-table'))    
    window.setDataTable('statistics-table')
  }
  
  render() {         
    var ReactHighcharts = require('react-highcharts');                
    const { imgHost, statisticsActions } = this.props                                        
    const { facilities, stats, currentTab } = this.props.statistics
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
                Facilities Recycling Totals<br />
                <span>Salvaged, Recycled, and Disposed by Tons</span>
              </div>
            </div>
          </div>
          {/* chart donut */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-donut-container { border: none; margin: 60px auto 0px auto; overflow: hidden; padding: 0; width: 1038px; /*width: 94%;*/ height: auto; }\n\t\t\t#chart-donut { margin: 0 auto; padding: 0; width: auto; height: 420px; }\n\t\t\t.highcharts-tooltip span { background: #4c4c4c; border: none; color: #fff; font: normal 10px Arial; line-height: 16px; margin: 0; padding: 6px 8px 6px 8px; text-align: center; width: auto;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\t-khtml-border-radius: 3px;\n\t\t\t\t-moz-border-radius: 3px;\n\t\t\t\t-ms-border-radius: 3px;\n\t\t\t\t-o-border-radius: 3px;\n\t\t\t\t-webkit-border-radius: 3px;\n\t\t\t\topacity: 0.9;\n\t\t\t\t-khtml-opacity: 0.9;\n\t\t\t\t-moz-opacity: 0.9;\n\t\t\t\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n\t\t\t\tfilter: alpha(opacity=90);\n\t\t\t\t-o-opacity: 0.9;\n\t\t\t\t-webkit-opacity: 0.9;\n\t\t\t}\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-donut-container">
                <ReactHighcharts config={facilities.donutChart}></ReactHighcharts>
              </div>
            </div>
          </div>
          {/* end chart donut */}
          {/* chart line */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-line-container { border: none; margin: 40px auto 0px auto; overflow: hidden; padding: 0; width: 900px; /*width: 94%;*/ height: auto; }\n\t\t\t#line-chart { margin: 0 auto; padding: 0; height: 420px; }\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-line-container">
                <ReactHighcharts config={facilities.timelineChart}></ReactHighcharts>
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
              <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-graph-vertical.png"} /><p>Facilities Statistics</p>
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
                {/*<table id="statistics-table" class="table table-striped table-bordered">*/}
                <table className="table table-striped table-bordered table-hover" id="statistics-table" ref="statisticsTable">
                  <thead>
                    <tr>
                      <th className="column-title">&nbsp;&nbsp;Facility Name</th>
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
                      <th className="column-stats-footer">30</th>
                      <th className="column-stats-footer">4,969.05</th>
                      <th className="column-stats-footer">100%</th>
                      <th className="column-stats-footer">172.01</th>
                      <th className="column-stats-footer">3.46%</th>
                      <th className="column-stats-footer">3.947.45</th>
                      <th className="column-stats-footer">79.44%</th>
                      <th className="column-stats-footer">849.58</th>
                      <th className="column-stats-footer">17.10%</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td className="column-title">Abbey Metal Corp</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">2.21</td>
                      <td className="column-stats">0.04%</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">2.21</td>
                      <td className="column-stats">0.04%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Blue Line Transfer</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">200.00</td>
                      <td className="column-stats">4.06%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">130.00</td>
                      <td className="column-stats">2.64%</td>
                      <td className="column-stats">70.00</td>
                      <td className="column-stats">1.42%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Circosta Iron &amp; Metal</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">124.80</td>
                      <td className="column-stats">2.54%</td>
                      <td className="column-stats">124.80</td>
                      <td className="column-stats">2.54%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Davis Street Transfer Station</td>
                      <td className="column-stats">4</td>
                      <td className="column-stats">2,319.32</td>
                      <td className="column-stats">47.12%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">2,022.64</td>
                      <td className="column-stats">41.10%</td>
                      <td className="column-stats">296.68</td>
                      <td className="column-stats">6.03%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Diversion Center</td>
                      <td className="column-stats">2</td>
                      <td className="column-stats">893.40</td>
                      <td className="column-stats">18.15%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">580.83</td>
                      <td className="column-stats">11.80%</td>
                      <td className="column-stats">312.57</td>
                      <td className="column-stats">6.35%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Eco Waste Systems</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">23.56</td>
                      <td className="column-stats">0.48%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">23.56</td>
                      <td className="column-stats">0.48%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Global Eco-Safe Recycling Inc.</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">10.25</td>
                      <td className="column-stats">0.21%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">5.13</td>
                      <td className="column-stats">0.10%</td>
                      <td className="column-stats">5.13</td>
                      <td className="column-stats">0.10%</td>
                    </tr>
                    <tr>
                      <td className="column-title">J. Manzo Recycling</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">2.77</td>
                      <td className="column-stats">0.06%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">2.77</td>
                      <td className="column-stats">0.06%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                    </tr>
                    <tr>
                      <td className="column-title">King Kubota Services Ltd.</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">7.45</td>
                      <td className="column-stats">0.15%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">3.73</td>
                      <td className="column-stats">0.08%</td>
                      <td className="column-stats">3.73</td>
                      <td className="column-stats">0.08%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Marin Resource Recovery Center</td>
                      <td className="column-stats">2</td>
                      <td className="column-stats">480.00</td>
                      <td className="column-stats">9.75%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">456.00</td>
                      <td className="column-stats">9.26%</td>
                      <td className="column-stats">24.00</td>
                      <td className="column-stats">0.49%</td>
                    </tr>
                    <tr>
                      <td className="column-title">OP Trucking CDI Operations</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">95.00</td>
                      <td className="column-stats">1.93%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">61.75</td>
                      <td className="column-stats">1.25%</td>
                      <td className="column-stats">33.25</td>
                      <td className="column-stats">0.68%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Point Recycling</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">14.11</td>
                      <td className="column-stats">0.29%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">7.06</td>
                      <td className="column-stats">0.14%</td>
                      <td className="column-stats">7.06</td>
                      <td className="column-stats">0.14%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Premiere Recycle</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">100.00</td>
                      <td className="column-stats">2.03%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">95.00</td>
                      <td className="column-stats">1.93%</td>
                      <td className="column-stats">5.00</td>
                      <td className="column-stats">0.10%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Recology San Francisco</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">4.98</td>
                      <td className="column-stats">0.10%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">2.49</td>
                      <td className="column-stats">0.05%</td>
                      <td className="column-stats">2.49</td>
                      <td className="column-stats">0.05%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Recology San Francisco</td>
                      <td className="column-stats">3</td>
                      <td className="column-stats">180.72</td>
                      <td className="column-stats">3.67%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">155.78</td>
                      <td className="column-stats">3.17%</td>
                      <td className="column-stats">24.94</td>
                      <td className="column-stats">0.51%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Stevens Creek Quarry</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">64.00</td>
                      <td className="column-stats">1.30%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">60.80</td>
                      <td className="column-stats">1.24%</td>
                      <td className="column-stats">3.20</td>
                      <td className="column-stats">0.07%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Stoneway Concrete</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">64.00</td>
                      <td className="column-stats">1.30%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">60.80</td>
                      <td className="column-stats">1.24%</td>
                      <td className="column-stats">3.20</td>
                      <td className="column-stats">0.07%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Urban Wood Waste Recyclers Ltd.</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">27.39</td>
                      <td className="column-stats">0.56%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">27.39</td>
                      <td className="column-stats">0.56%</td>
                      <td className="column-stats">3.20</td>
                      <td className="column-stats">0.00%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Zanker Material Processing Facility</td>
                      <td className="column-stats">2</td>
                      <td className="column-stats">161.12</td>
                      <td className="column-stats">3.27%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">137.46</td>
                      <td className="column-stats">2.79%</td>
                      <td className="column-stats">23.66</td>
                      <td className="column-stats">0.48%</td>
                    </tr>                    
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
