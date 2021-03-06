import React, { Component } from 'react'
import RatesInfo from '../../components/statistics/ratesInfo'
import Tabs from '../../components/statistics/tabs'
import Filter from '../../components/statistics/filter'

export default class carbonFootprint extends Component {  
  componentDidMount(){                
    const { statisticsActions, statistics } = this.props                                                
    statisticsActions.getCarbonFootprint(statistics.dateFrom, statistics.dateTo)        
  }
  
  render() {             
    const { imgHost, statisticsActions, statistics } = this.props                                        
    const { carbonFootprint, currentTab, stats } = this.props.statistics
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
        {<Tabs imgHost={imgHost} statisticsActions={statisticsActions} currentTab={currentTab} />}
        
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
                Carboon Footprint &amp; Environmental Impact
              </div>
            </div>
          </div>
          {/* carbon footprint */}
          <div style={{margin: '59px auto 14px auto'}} className="row">
            <div className="col-ghgrid-8">
              <div id="carbon-title">
                <div className="spacer">&nbsp;</div>
                <div className="actual">Actual</div>
                <div className="projected">Projected</div>
              </div>
              <div id="carbon-container">
                <div id="carbon-row">
                  <div className="img-area">
                    <img src={imgHost + "/_images/icons/content/co2.jpg"} />
                  </div>
                  <div className="title">
                    Carbon Footprint<br />Saving
                  </div>
                  <div style={{marginTop: '-9px'}} className="actual">
                    {carbonFootprint.co2}<span className="small"> ( metric tons )<br /><span style={{color: '#4c4c4c', position: 'relative', top: '-5px'}}>Tons Recycled: {carbonFootprint.tonsRecycledReused}</span></span>
                  </div>
                  <div style={{marginTop: '-9px'}} className="projected">
                    {carbonFootprint.projectedCo2}<span className="small"> ( metric tons )<br /><span style={{color: '#4c4c4c', position: 'relative', top: '-5px'}}>Tons Recycled: {carbonFootprint.projectedTonsRecycledReused}</span></span>
                  </div>
                </div>
                <div style={{marginTop: '-1px'}} id="carbon-row">
                  <div className="img-area">
                    <img src={imgHost + "/_images/icons/content/home1.jpg"} />
                  </div>
                  <div className="title">
                    Homes powered<br />for 1 month
                  </div>
                  <div style={{color: '#6fa203'}} className="actual">
                    {carbonFootprint.homesPowered}
                  </div>
                  <div style={{color: '#6fa203'}} className="projected">
                    {carbonFootprint.projectedHomesPowered}
                  </div>
                </div>
                <div style={{marginTop: '-1px'}} id="carbon-row">
                  <div className="img-area">
                    <img src={imgHost + "/_images/icons/content/vehicles.jpg"} />
                  </div>
                  <div className="title">
                    Vehicles removed<br />from road for 1 year
                  </div>
                  <div className="actual">
                    {carbonFootprint.vehiclesRemoved}
                  </div>
                  <div className="projected">
                    {carbonFootprint.projectedVehiclesRemoved}
                  </div>
                </div>
                <div style={{marginTop: '-1px'}} id="carbon-row">
                  <div className="img-area">
                    <img src={imgHost + "/_images/icons/content/barrel.jpg"} />
                  </div>
                  <div className="title">
                    Barrels of oil saved
                  </div>
                  <div style={{color: '#6fa203'}} className="actual">
                    {carbonFootprint.oilSaved}
                  </div>
                  <div style={{color: '#6fa203'}} className="projected">
                    {carbonFootprint.projectedOilSaved}
                  </div>
                </div>
                <div style={{marginTop: '-1px'}} id="carbon-row">
                  <div className="img-area">
                    <img style={{padding: '0px 0px 0px 12px'}} src={imgHost + "/_images/icons/content/gas_can.jpg"} />
                  </div>
                  <div className="title">
                    Gallons of<br />gasoline saved
                  </div>
                  <div className="actual">
                    {carbonFootprint.gasolineSaved}
                  </div>
                  <div className="projected">
                    {carbonFootprint.projectedGasolineSaved}
                  </div>
                </div>
                <div style={{marginTop: '-1px'}} id="carbon-row">
                  <div className="img-area">
                    <img src={imgHost + "/_images/icons/content/tree.png"} />
                  </div>
                  <div className="title">
                    Tree carbon<br />processing equivalent
                  </div>
                  <div style={{color: '#6fa203'}} className="actual">
                    {carbonFootprint.treeCarbon}
                  </div>
                  <div style={{color: '#6fa203'}} className="projected">
                    {carbonFootprint.projectedTreeCarbon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end charts */}                
      </div>
    </div>
  }
}
