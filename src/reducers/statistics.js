import {  
  SWITCH_TAB,  
  GET_RECYCLING_TOTALS_SUCCESS,
  GET_CARBON_FOOTPRINT_SUCCESS,
  GET_MATERIALS_STATS_SUCCESS,
  GET_FACILITIES_STATS_SUCCESS,
  GET_PROJECTS_STATS_SUCCESS,
  GET_BUILDINGS_STATS_SUCCESS,
  GET_HAULING_STATS_SUCCESS,
  SET_DATE_RANGE
} from '../constants/Statistics'

import * as numberFormat from '../helpers/numberFormat'

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

const initialState = {
  dateFrom: parseInt(yyyy) - 1  + '-' + mm + '-01',
  dateTo: yyyy + '-' + mm + '-01',
  currentTab: 'overview',
  stats: {
      diversionRate: 0,
      nonInertRate: 0,
      inertRate: 0,
  },  
  recyclingTotals: {        
    reused: 0,
    recycled: 0,
    disposed: 0,
    timelineStats: [{ name: 'Reused',  data: [0,0,0,0,0,0,0,0,0,0,0,0,27, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Recycled',  data: [0,0,0,0,16,0,0,0,0,0,0,0,17,35,84.9,60.13,7,5,1, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Disposed',  data: [0,0,0,0,9,0,0,0,0,0,0,0,5,4,0.3,5,5, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }],
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
    projectsDuration: 0,
    materialsRecycled: 0,
    facilitiesUsed: 0,
    totalTickets: 0,
    avgTicketWeight: 0,
    totalSqFt: 0,
    totalDollarVal: 0,
    projectTypes: 0,
    avgProjectTonnage: 0,
    donutChart: {},
    timelineChart: {},                    
  },  
  carbonFootprint: {
    tonsRecycledReused: 0,
    projectedTonsRecycledReused: 0,    
    co2: 0,    
    projectedCo2: 0,
    homesPowered: 0,
    projectedHomesPowered: 0,
    vehiclesRemoved: 0,
    projectedVehiclesRemoved: 0,
    oilSaved: 0,
    projectedOilSaved: 0,
    gasolineSaved: 0,
    projectedGasolineSaved: 0,
    treeCarbon: 0,               
    projectedTreeCarbon: 0,
  },
  materialsRecycled: {
    materialsRecycledList: [],
    donutChart: {},
    timelineChart: {}
  },
  facilities: {
    facilitiesUsedList: [],
    donutChart: {},
    timelineChart: {}
  },
  projectTypes: {
    projectTypesList: [],
    donutChart: {},
    timelineChart: {}
  },
  buildingTypes: {
    projectTypesList: [],
    donutChart: {},
    timelineChart: {}
  },
  haulingTypes: {
    types: [
      {debris: 0, hauling: 0, self: 0}
    ],
    donutChart: {},
    timelineChart: {}
  }
}

function donutChartConfig(data){
  let total = 0
  for(let el in data){
    total += parseFloat(data[el][1]) 
  }    

  var conf = {
    chart: { backgroundColor:'none', border: 'none', margin: [0, 0, 0, 0] },
    colors: ['#cce3f2', '#99c7e4', '#66aad7', '#338ec9', '#0072bc', '#00285e', '#33537e', '#667e9e', '#99a9bf', '#ccd4df', '#d5cbc1'],
    credits: { enabled: false },
    plotOptions:
    {
      pie:
      {
        allowPointSelect: true,
        borderWidth: 2,
        cursor: 'pointer',
        dataLabels:
        {
          connectorPadding: 10,
          enabled: true,
          //format: '<b>{point.name}</b>: {point.y}',
          formatter: function() {
            var pname = this.point.name;
            if (pname.length > 45)
            {
              pname = pname.slice(0, 21) + '...' + pname.slice(-21);
            }
            return '<b>'+ pname +'</b>: '+ numberFormat.addCommas(this.y) +'';
          },
          style:
          {
            fontFamily: 'Arial',
            fontSize: '10px',
            fontWeight: 'normal'
          },
          useHTML: true 
        },
        slicedOffset: 20,
      }
    },
    series:
    [{
      allowPointSelect: true,
      data: data,      
      type: 'pie',
      innerSize: '50%',
      name: '',
      states: { hover: { enabled: false } }
    }],
    title: { text: '' },
    tooltip:
    {
      backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 0, enabled: true, headerFormat: '', shadow: false, useHTML: true,
      //pointFormat: '<span style="color: #fff;"><b>{point.name}</b>: {point.y}</span>',
      formatter: function ()
      {
        return '<span style="color: #fff;"><b>' + this.point.name + '</b>: ' + numberFormat.addCommas(this.point.y) + ' (' + numberFormat.addCommas(this.percentage) + '%)</span>';
      }
    }          
  }

  if(total == 0){
    conf = {lang: {noData: "No data to display"} , title: { text: '' }, credits: { enabled: false },}
  }

  return conf
}

function timeLineChartConfig(timeLineData, categories, title='In Tons'){  
  let conf  
  conf = {
    chart: { backgroundColor: 'none', type: 'line' },
    credits: { enabled: false },
    title: { text: '' },
    legend: { enabled: false },
    xAxis: {
        categories: categories,
        labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
    },
    yAxis: {
        min: 0,
        gridLineDashStyle: 'line',
        gridLineColor: '#d8dadb',
        labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
        title: { text: title, style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' }, margin: 20 }
    },
    plotOptions:
    {
        column:
        {
            borderWidth: 0,
            dataLabels:
            {
                 enabled: true,
                 style: { color: '#fff', fontSize: '10px', fontWeight: 'bold' },
                 y: -3,
            },
            pointPadding: 0.2,
            series: { allowPointSelect: true },
        },
    },
    series: timeLineData,
    tooltip:
    {
        backgroundColor: 'rgba(255, 255, 255, 0)', 
        borderWidth: 0, 
        enabled: true, 
        headerFormat: '<span style="color: #fff;"><b>{point.key}</b></span>', 
        //pointFormat: '<span style="color: #fff;"><b>{series.name}</b>: {point.y}</span>', 
        formatter: function() {
                return '<span style="color: #fff;"><b>'+ this.series.name +'</b>: ' + numberFormat.addCommas(this.y) +' </span>';
        },
        shadow: false, 
        useHTML: true

    }
  }

  return conf
}

function setRecyclingTotalsChartConfig(data) {         
  //OVERVIEW DONUT CHART
  let chartData = []    
  chartData.push([ 'Recycled', parseFloat(data.recycled) ])
  chartData.push([ 'Reused', parseFloat(data.reused) ])
  chartData.push([ 'Disposed', parseFloat(data.disposed) ])  
  data.donutChart = donutChartConfig(chartData)  

  let timeLineData = []
  for (let attr in data.timelineStats){
    let attrData = []    
    for (let item in data.timelineStats[attr]){
      attrData.push(parseFloat(data.timelineStats[attr][item]))
    }
    timeLineData.push({ name: attr,  data: attrData, lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } })
  }
    
  data.timelineChart = timeLineChartConfig(timeLineData, data.chartCategories)

  return data
}

function setMaterialsChartConfig(data) {         
  //OVERVIEW DONUT CHART
  let chartData = []      

  for (let idx in data.materialsRecycledList){
    chartData.push([ data.materialsRecycledList[idx]['name'], parseFloat(data.materialsRecycledList[idx]['totalTons']) ])
  }  

  let timeLineData = []
  for (let attr in data.timelineStats){
    let attrData = []    
    for (let item in data.timelineStats[attr]){
      attrData.push(parseFloat(data.timelineStats[attr][item]))
    }
    timeLineData.push({ name: attr,  data: attrData, lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } })
  }

  data.donutChart = donutChartConfig(chartData)      
  data.timelineChart = timeLineChartConfig(timeLineData, data.chartCategories)

  return data
}

function setFacilitiesChartConfig(data) {         
  //OVERVIEW DONUT CHART
  let chartData = []      

  for (let idx in data.facilitiesUsedList){
    chartData.push([ data.facilitiesUsedList[idx]['name'], parseFloat(data.facilitiesUsedList[idx]['totalTons']) ])
  }  

  let timeLineData = []
  for (let attr in data.timelineStats){
    let attrData = []    
    for (let item in data.timelineStats[attr]){
      attrData.push(parseFloat(data.timelineStats[attr][item]))
    }
    timeLineData.push({ name: attr,  data: attrData, lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } })
  }

  data.donutChart = donutChartConfig(chartData)      
  data.timelineChart = timeLineChartConfig(timeLineData, data.chartCategories)

  return data
}

function setProjectsChartConfig(data) {         
  //OVERVIEW DONUT CHART
  let chartData = []      

  for (let idx in data.projectTypesList){
    chartData.push([ data.projectTypesList[idx]['name'], parseFloat(data.projectTypesList[idx]['totalTons']) ])
  }  

  let timeLineData = []
  for (let attr in data.timelineStats){
    let attrData = []    
    for (let item in data.timelineStats[attr]){
      attrData.push(parseFloat(data.timelineStats[attr][item]))
    }
    timeLineData.push({ name: attr,  data: attrData, lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } })
  }

  data.donutChart = donutChartConfig(chartData)      
  data.timelineChart = timeLineChartConfig(timeLineData, data.chartCategories)

  return data
}

function setBuildingsChartConfig(data) {         
  //OVERVIEW DONUT CHART
  let chartData = []      

  for (let idx in data.projectTypesList){
    chartData.push([ data.projectTypesList[idx]['name'], parseFloat(data.projectTypesList[idx]['totalTons']) ])
  }  

  let timeLineData = []
  for (let attr in data.timelineStats){
    let attrData = []    
    for (let item in data.timelineStats[attr]){
      attrData.push(parseFloat(data.timelineStats[attr][item]))
    }
    timeLineData.push({ name: attr,  data: attrData, lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } })
  }

  data.donutChart = donutChartConfig(chartData)      
  data.timelineChart = timeLineChartConfig(timeLineData, data.chartCategories)

  return data
}

function setHaulingChartConfig(data) {         
  //OVERVIEW DONUT CHART
  let chartData = []      
  
  chartData.push([ 'Debris Box Service', parseInt(data.debris)])
  chartData.push([ 'Hauiling Service', parseInt(data.hauling) ])
  chartData.push([ 'Self Haul', parseInt(data.haulingSelf) ])
    

  let timeLineData = []
  for (let attr in data.timelineStats){
    let attrData = []    
    for (let item in data.timelineStats[attr]){
      attrData.push(parseFloat(data.timelineStats[attr][item]))
    }
    var names = {'debris': 'Debris Box Service', 'self_hauler': 'Hauiling Service', 'service': 'Self Haul' }    
    timeLineData.push({ name: names[attr],  data: attrData, lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } })
  }  

  data.donutChart = donutChartConfig(chartData)      
  data.timelineChart = timeLineChartConfig(timeLineData, data.chartCategories)

  return data
}

export default function statistics(state = initialState, action) {
  switch (action.type) {        
    case SWITCH_TAB:
      return { ...state, currentTab: action.payload }

    case SET_DATE_RANGE:        
      return { ...state, dateFrom: action.dateFrom, dateTo: action.dateTo }    

    case GET_RECYCLING_TOTALS_SUCCESS:
      var data = setRecyclingTotalsChartConfig(action.payload)         
      var stats = {
          diversionRate: data.diversionRate,
          nonInertRate: data.nonInertRate,
          inertRate: data.inertRate
      }
      return { ...state, recyclingTotals: data, stats: stats }

    case GET_CARBON_FOOTPRINT_SUCCESS:
      data = action.payload
      stats = {
          diversionRate: data.diversionRate,
          nonInertRate: data.nonInertRate,
          inertRate: data.inertRate
      }
      return { ...state, carbonFootprint: data, stats: stats }          

    case GET_MATERIALS_STATS_SUCCESS:
      data = setMaterialsChartConfig(action.payload)         
      stats = {
          diversionRate: data.diversionRate,
          nonInertRate: data.nonInertRate,
          inertRate: data.inertRate
      }
      return { ...state, materialsRecycled: data, stats: stats }            

    case GET_FACILITIES_STATS_SUCCESS:
      data = setFacilitiesChartConfig(action.payload)         
      stats = {
          diversionRate: data.diversionRate,
          nonInertRate: data.nonInertRate,
          inertRate: data.inertRate
      }
      return { ...state, facilities: data, stats: stats }              

    case GET_PROJECTS_STATS_SUCCESS:
      data = setProjectsChartConfig(action.payload)         
      stats = {
          diversionRate: data.diversionRate,
          nonInertRate: data.nonInertRate,
          inertRate: data.inertRate
      }
      return { ...state, projectTypes: data, stats: stats }                    

    case GET_BUILDINGS_STATS_SUCCESS:
      data = setBuildingsChartConfig(action.payload)         
      stats = {
          diversionRate: data.diversionRate,
          nonInertRate: data.nonInertRate,
          inertRate: data.inertRate
      }
      return { ...state, buildingTypes: data, stats: stats }                      

    case GET_HAULING_STATS_SUCCESS:
      data = setHaulingChartConfig(action.payload)         
      stats = {
          diversionRate: data.diversionRate,
          nonInertRate: data.nonInertRate,
          inertRate: data.inertRate
      }
      return { ...state, haulingTypes: data, stats: stats }                        

    default:
      return state;
  }
}