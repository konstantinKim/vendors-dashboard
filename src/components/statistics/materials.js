import React, { Component } from 'react'
import RatesInfo from '../../components/statistics/ratesInfo'
import Tabs from '../../components/statistics/tabs'
import Filter from '../../components/statistics/filter'

export default class Materials extends Component {  

  componentDidMount(){
    //console.log($('#statistics-table'))    
    window.setDataTable('statistics-table')
  }
  
  render() {         
    var ReactHighcharts = require('react-highcharts');                
    const { imgHost, statisticsActions } = this.props                                        
    const { materialsRecycled, stats, currentTab } = this.props.statistics
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
                Material Recycling Totals<br />
                <span>Salvaged, Recycled, and Disposed by Tons</span>
              </div>
            </div>
          </div>
          {/* chart donut */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-donut-container { border: none; margin: 60px auto 0px auto; overflow: hidden; padding: 0; width: 1038px; /*width: 94%;*/ height: auto; }\n\t\t\t#chart-donut { margin: 0 auto; padding: 0; width: auto; height: 420px; }\n\t\t\t.highcharts-tooltip span { background: #4c4c4c; border: none; color: #fff; font: normal 10px Arial; line-height: 16px; margin: 0; padding: 6px 8px 6px 8px; text-align: center; width: auto;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\t-khtml-border-radius: 3px;\n\t\t\t\t-moz-border-radius: 3px;\n\t\t\t\t-ms-border-radius: 3px;\n\t\t\t\t-o-border-radius: 3px;\n\t\t\t\t-webkit-border-radius: 3px;\n\t\t\t\topacity: 0.9;\n\t\t\t\t-khtml-opacity: 0.9;\n\t\t\t\t-moz-opacity: 0.9;\n\t\t\t\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n\t\t\t\tfilter: alpha(opacity=90);\n\t\t\t\t-o-opacity: 0.9;\n\t\t\t\t-webkit-opacity: 0.9;\n\t\t\t}\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-donut-container">
                <ReactHighcharts config={materialsRecycled.donutChart}></ReactHighcharts>
              </div>
            </div>
          </div>
          {/* end chart donut */}
          {/* chart line */}
          <style dangerouslySetInnerHTML={{__html: "\n        \t#chart-line-container { border: none; margin: 40px auto 0px auto; overflow: hidden; padding: 0; width: 900px; /*width: 94%;*/ height: auto; }\n\t\t\t#line-chart { margin: 0 auto; padding: 0; height: 420px; }\n\t\t" }} />
          <div className="row">
            <div className="col-ghgrid-8">
              <div id="chart-line-container">
                <ReactHighcharts config={materialsRecycled.timelineChart}></ReactHighcharts>
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
              <img style={{margin: 0, padding: '11px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/header-graph-vertical.png"} /><p>Material Statistics</p>
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
                      <th className="column-title">&nbsp;&nbsp;Material Type</th>
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
                      <td className="column-title">Appliances &amp; Equipment</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">12.00</td>
                      <td className="column-stats">0.24%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">11.40</td>
                      <td className="column-stats">0.23%</td>
                      <td className="column-stats">0.60</td>
                      <td className="column-stats">0.01%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Asphalt</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">64.00</td>
                      <td className="column-stats">1.29%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">60.80</td>
                      <td className="column-stats">1.22%</td>
                      <td className="column-stats">3.20</td>
                      <td className="column-stats">0.06%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Bricks, Masonry, &amp; Stone Products</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">464.47</td>
                      <td className="column-stats">9.35%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">441.34</td>
                      <td className="column-stats">8.88%</td>
                      <td className="column-stats">23.23</td>
                      <td className="column-stats">0.47%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Concrete</td>
                      <td className="column-stats">9</td>
                      <td className="column-stats">1,451.75</td>
                      <td className="column-stats">29.22%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">1379.72</td>
                      <td className="column-stats">27.77%</td>
                      <td className="column-stats">72.03</td>
                      <td className="column-stats">1.45%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Deconstructed &amp; Salvaged Items</td>
                      <td className="column-stats">3</td>
                      <td className="column-stats">172.01</td>
                      <td className="column-stats">3.46%</td>
                      <td className="column-stats">172.01</td>
                      <td className="column-stats">3.46%</td>
                      <td className="column-stats">441.34</td>
                      <td className="column-stats">8.88%</td>
                      <td className="column-stats">23.23</td>
                      <td className="column-stats">0.47%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Drywall - Clean/Unpainted</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">500.00</td>
                      <td className="column-stats">10.06%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">475.00</td>
                      <td className="column-stats">9.56%</td>
                      <td className="column-stats">25.00</td>
                      <td className="column-stats">0.50%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Drywall - Demo &amp; Painted</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">0.75</td>
                      <td className="column-stats">0.02%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.23%</td>
                      <td className="column-stats">0.75</td>
                      <td className="column-stats">0.02%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Dunnage</td>
                      <td className="column-stats">1</td>
                      <td className="column-stats">185.00</td>
                      <td className="column-stats">3.72%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">175.75</td>
                      <td className="column-stats">3.54%</td>
                      <td className="column-stats">9.25</td>
                      <td className="column-stats">0.19%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Metal</td>
                      <td className="column-stats">2</td>
                      <td className="column-stats">17.39</td>
                      <td className="column-stats">0.35%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">17.39</td>
                      <td className="column-stats">0.35%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Mix C &amp; D</td>
                      <td className="column-stats">8</td>
                      <td className="column-stats">2,079.92</td>
                      <td className="column-stats">41.86%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">1,364.42</td>
                      <td className="column-stats">27.46%</td>
                      <td className="column-stats">715.51</td>
                      <td className="column-stats">14.40%</td>
                    </tr>
                    <tr>
                      <td className="column-title">Wood - Clean</td>
                      <td className="column-stats">2</td>
                      <td className="column-stats">21.66</td>
                      <td className="column-stats">0.44%</td>
                      <td className="column-stats">0.00</td>
                      <td className="column-stats">0.00%</td>
                      <td className="column-stats">21.64</td>
                      <td className="column-stats">0.44%</td>
                      <td className="column-stats">0.02</td>
                      <td className="column-stats">0.00%</td>
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
