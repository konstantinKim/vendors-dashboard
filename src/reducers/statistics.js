import {  
  SWITCH_TAB,  
} from '../constants/Statistics'

const initialState = {  
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
    donutChart: {
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
              format: '<b>{point.name}</b>: {point.y}',
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
          data:
          [
            [ 'Recycled', 100 ],              
            [ 'reused', 100 ],
            [ 'Disposed', 100 ]        
          ],
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
            return '<span style="color: #fff;"><b>' + this.point.name + '</b>: ' + this.point.y + ' (' + this.percentage + '%)</span>';
          }
        }          
    },
    timelineChart: {
        chart: { backgroundColor: 'none', type: 'line' },
        credits: { enabled: false },
        title: { text: '' },
        legend: { enabled: false },
        xAxis: {
            categories: ["Sep<br>2014","Oct","Nov","Dec","Jan<br>2015","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan<br>2016","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
        },
        yAxis: {
            min: 0,
            gridLineDashStyle: 'line',
            gridLineColor: '#d8dadb',
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
            title: { text: 'In Tons', style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' }, margin: 20 }
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
        series:
        [
            { name: 'Reused',  data: [0,0,0,0,0,0,0,0,0,0,0,0,27, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Recycled',  data: [0,0,0,0,16,0,0,0,0,0,0,0,17,35,84.9,60.13,7,5,1, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Disposed',  data: [0,0,0,0,9,0,0,0,0,0,0,0,5,4,0.3,5,5, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }
        ],
        tooltip:
        {
            backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 0, enabled: true, headerFormat: '<span style="color: #fff;"><b>{point.key}</b></span>', pointFormat: '<span style="color: #fff;"><b>{series.name}</b>: {point.y}</span>', shadow: false, useHTML: true

        }
    }
  },
  carbonFootprint: {    
    tonsRecycled: 0,
    co2: 0,    
    homesPowered: 0,
    vehiclesRemoved: 0,
    oilSaved: 0,
    gasolineSaved: 0,
    treeCarbon: 0,
    projectedTonsRecycled: 0,
    projectedCo2: 0,
    projectedHomesPowered: 0,
    projectedVehiclesRemoved: 0,
    projectedOilSaved: 0,
    projectedGasolineSaved: 0,
    projectedTreeCarbon: 0
  },
  materialsRecycled: {
    materialsUsed: [
      {name: 'Mat Name', projects: 0, total_tons: 0, total_percent: 0, reused: 0, reused_percent: 0, recycled: 0, recycled_percent: 0, disposed: 0, disposed_percent: 0}
    ],
    donutChart: {
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
              format: '<b>{point.name}</b>: {point.y}',
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
          data:
          [
            [ 'Recycled', 100 ],              
            [ 'reused', 100 ],
            [ 'Disposed', 100 ]        
          ],
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
            return '<span style="color: #fff;"><b>' + this.point.name + '</b>: ' + this.point.y + ' (' + this.percentage + '%)</span>';
          }
        }          
    },
    timelineChart: {
        chart: { backgroundColor: 'none', type: 'line' },
        credits: { enabled: false },
        title: { text: '' },
        legend: { enabled: false },
        xAxis: {
            categories: ["Sep<br>2014","Oct","Nov","Dec","Jan<br>2015","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan<br>2016","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
        },
        yAxis: {
            min: 0,
            gridLineDashStyle: 'line',
            gridLineColor: '#d8dadb',
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
            title: { text: 'In Tons', style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' }, margin: 20 }
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
        series:
        [
            { name: 'Reused',  data: [0,0,0,0,0,0,0,0,0,0,0,0,27, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Recycled',  data: [0,0,0,0,16,0,0,0,0,0,0,0,17,35,84.9,60.13,7,5,1, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Disposed',  data: [0,0,0,0,9,0,0,0,0,0,0,0,5,4,0.3,5,5, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }
        ],
        tooltip:
        {
            backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 0, enabled: true, headerFormat: '<span style="color: #fff;"><b>{point.key}</b></span>', pointFormat: '<span style="color: #fff;"><b>{series.name}</b>: {point.y}</span>', shadow: false, useHTML: true

        }
    }
  },
  facilities: {
    facilitiesUsed: [
      {name: 'Facility Name', projects: 0, total_tons: 0, total_percent: 0, reused: 0, reused_percent: 0, recycled: 0, recycled_percent: 0, disposed: 0, disposed_percent: 0}
    ],
    donutChart: {
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
              format: '<b>{point.name}</b>: {point.y}',
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
          data:
          [
                      [ 'Abbey Metal Corp', 22.21 ],
                      [ 'Blue Line Transfer', 200 ],
                      [ 'Circosta Iron &amp; Metal', 124.8 ],
                      [ 'Davis Street Transfer Station', 146.75 ],
                      [ 'Diversion Center', 893.4 ],
                      [ 'Eco Waste Systems', 23.56 ],
                      [ 'Global EcoSafe Recycling Inc', 10.25 ],
                      [ 'J Manzo Recycling', 2.77 ],
                      [ 'King Kubota Services Ltd', 77.45 ],
                      [ 'Marin Resource Recovery Center', 480 ],
                      [ 'OP Trucking CDI Operations', 95 ],
                      [ 'Point Recycling', 14.11 ],
                      [ 'Premier Recycle', 100 ],
                      [ 'Recology San Francisco', 180.72 ],
                      [ 'Recology San Francisco ', 4.98 ],
                      [ 'Stevens Creek Quarry', 64 ],
                      [ 'Stoneway Concrete', 64 ],
                      [ 'Urban Wood Waste Recyclers Ltd ', 27.39 ],
                      [ 'Zanker Material Processing Facility', 161.12 ]
          ],
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
            return '<span style="color: #fff;"><b>' + this.point.name + '</b>: ' + this.point.y + ' (' + this.percentage + '%)</span>';
          }
        }          
    },
    timelineChart: {
        chart: { backgroundColor: 'none', type: 'line' },
        credits: { enabled: false },
        title: { text: '' },
        legend: { enabled: false },
        xAxis: {
            categories: ["Jan '14", "Feb '14", "Mar '14", "Apr '14", "May '14", "Jun '14", "Jul '14", "Aug '14", "Sep '14", "Oct '14", "Nov '14", "Dec '14"],
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
        },
        yAxis: {
            min: 0,
            gridLineDashStyle: 'line',
            gridLineColor: '#d8dadb',
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
            title: { text: 'In Tons', style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' }, margin: 20 }
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
        series:
        [
            {
              name: "Abbey Metal Corp",
              data: [2.21,0,0,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Blue Line Transfer",
              data: [0,0,0,0,0,0,0,0,0,200,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Circosta Iron &amp; Metal",
              data: [0,0,124.8,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Davis Street Transfer Station",
              data: [0,0,105,87.569,0,0,650,1100,191,0.75,85,100],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Diversion Center",
              data: [0,0,0,0,0,542,0,351,0.1,0.3,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Eco Waste Systems",
              data: [8.3335,6.8453,8.3857,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Global \ufeffEco-Safe Recycling Inc.",
              data: [0,0,10.2514,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "J. Manzo Recycling",
              data: [2.77,0,0,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "King Kubota Services Ltd.",
              data: [0,7.4516,0,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Marin Resource Recovery Center",
              data: [0,0,125,0,85,125,0,0,145,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "OP Trucking CDI Operations",
              data: [0,0,0,0,0,0,0,0,0,0,95,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Point Recycling",
              data: [0,0,0,14.11,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Premier Recycle",
              data :[0,0,0,0,0,0,0,0,0,100,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Recology San Francisco",
              data: [2.72,0,0,0,0,0,53,125,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Recology San Francisco",
              data: [4.98,0,0,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', }, 
            },
            {
              name: "Stevens Creek Quarry",
              data: [0,0,0,0,0,64,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Stoneway Concrete",
              data: [0,0,0,0,0,0,64,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Urban Wood Waste Recyclers Ltd.",
              data: [12.5442,5.7982,9.05,0,0,0,0,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            },
            {
              name: "Zanker Material Processing Facility",
              data: [0,0,0,0,0,24.12,137,0,0,0,0,0],
              lineWidth: 2,
              marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle', },
            }
        ],
        tooltip:
        {
            backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 0, enabled: true, headerFormat: '<span style="color: #fff;"><b>{point.key}</b></span>', pointFormat: '<span style="color: #fff;"><b>{series.name}</b>: {point.y}</span>', shadow: false, useHTML: true

        }
    }
  },
  projectTypes: {
    types: [
      {name: 'Type Name 1', projects: 0, total_tons: 0, total_percent: 0, reused: 0, reused_percent: 0, recycled: 0, recycled_percent: 0, disposed: 0, disposed_percent: 0}
    ],
    donutChart: {
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
              format: '<b>{point.name}</b>: {point.y}',
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
          data:
          [
            [ 'Type 1', 100 ],              
            [ 'Type 2', 100 ]            
          ],
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
            return '<span style="color: #fff;"><b>' + this.point.name + '</b>: ' + this.point.y + ' (' + this.percentage + '%)</span>';
          }
        }          
    },
    timelineChart: {
        chart: { backgroundColor: 'none', type: 'line' },
        credits: { enabled: false },
        title: { text: '' },
        legend: { enabled: false },
        xAxis: {
            categories: ["Sep<br>2014","Oct","Nov","Dec","Jan<br>2015","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan<br>2016","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
        },
        yAxis: {
            min: 0,
            gridLineDashStyle: 'line',
            gridLineColor: '#d8dadb',
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
            title: { text: 'In Tons', style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' }, margin: 20 }
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
        series:
        [
            { name: 'Reused',  data: [0,0,0,0,0,0,0,0,0,0,0,0,27, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Recycled',  data: [0,0,0,0,16,0,0,0,0,0,0,0,17,35,84.9,60.13,7,5,1, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Disposed',  data: [0,0,0,0,9,0,0,0,0,0,0,0,5,4,0.3,5,5, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }
        ],
        tooltip:
        {
            backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 0, enabled: true, headerFormat: '<span style="color: #fff;"><b>{point.key}</b></span>', pointFormat: '<span style="color: #fff;"><b>{series.name}</b>: {point.y}</span>', shadow: false, useHTML: true

        }
    }
  },
  buildingTypes: {
    types: [
      {name: 'Building Type Name 1', projects: 0, total_tons: 0, total_percent: 0, reused: 0, reused_percent: 0, recycled: 0, recycled_percent: 0, disposed: 0, disposed_percent: 0}
    ],
    donutChart: {
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
              format: '<b>{point.name}</b>: {point.y}',
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
          data:
          [
            [ 'Building Type 1', 100 ],              
            [ 'Building Type 2', 100 ]            
          ],
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
            return '<span style="color: #fff;"><b>' + this.point.name + '</b>: ' + this.point.y + ' (' + this.percentage + '%)</span>';
          }
        }          
    },
    timelineChart: {
        chart: { backgroundColor: 'none', type: 'line' },
        credits: { enabled: false },
        title: { text: '' },
        legend: { enabled: false },
        xAxis: {
            categories: ["Sep<br>2014","Oct","Nov","Dec","Jan<br>2015","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan<br>2016","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
        },
        yAxis: {
            min: 0,
            gridLineDashStyle: 'line',
            gridLineColor: '#d8dadb',
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
            title: { text: 'In Tons', style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' }, margin: 20 }
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
        series:
        [
            { name: 'Reused',  data: [0,0,0,0,0,0,0,0,0,0,0,0,27, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Recycled',  data: [0,0,0,0,16,0,0,0,0,0,0,0,17,35,84.9,60.13,7,5,1, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Disposed',  data: [0,0,0,0,9,0,0,0,0,0,0,0,5,4,0.3,5,5, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }
        ],
        tooltip:
        {
            backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 0, enabled: true, headerFormat: '<span style="color: #fff;"><b>{point.key}</b></span>', pointFormat: '<span style="color: #fff;"><b>{series.name}</b>: {point.y}</span>', shadow: false, useHTML: true

        }
    }
  },
  haulingTypes: {
    types: [
      {debris: 0, hauling: 0, self: 0}
    ],
    donutChart: {
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
              format: '<b>{point.name}</b>: {point.y}',
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
          data:
          [
            [ 'Hauling Type 1', 100 ],              
            [ 'Hauling Type 2', 50 ]            
          ],
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
            return '<span style="color: #fff;"><b>' + this.point.name + '</b>: ' + this.point.y + ' (' + this.percentage + '%)</span>';
          }
        }          
    },
    timelineChart: {
        chart: { backgroundColor: 'none', type: 'line' },
        credits: { enabled: false },
        title: { text: '' },
        legend: { enabled: false },
        xAxis: {
            categories: ["Sep<br>2014","Oct","Nov","Dec","Jan<br>2015","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan<br>2016","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
        },
        yAxis: {
            min: 0,
            gridLineDashStyle: 'line',
            gridLineColor: '#d8dadb',
            labels: { style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' } },
            title: { text: 'In Tons', style: { color: '#4c4c4c', font: 'normal 10px ArialRegular' }, margin: 20 }
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
        series:
        [
            { name: 'Reused',  data: [0,0,0,0,0,0,0,0,0,0,0,0,27, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Recycled',  data: [0,0,0,0,16,0,0,0,0,0,0,0,17,35,84.9,60.13,7,5,1, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }, { name: 'Disposed',  data: [0,0,0,0,9,0,0,0,0,0,0,0,5,4,0.3,5,5, ], lineWidth: 2, marker: { fillColor: '#fff', lineWidth: 2, lineColor: null, radius: 4, symbol: 'circle' } }
        ],
        tooltip:
        {
            backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 0, enabled: true, headerFormat: '<span style="color: #fff;"><b>{point.key}</b></span>', pointFormat: '<span style="color: #fff;"><b>{series.name}</b>: {point.y}</span>', shadow: false, useHTML: true

        }
    }
  }
}

export default function statistics(state = initialState, action) {
  switch (action.type) {        
    case SWITCH_TAB:
        return { ...state, currentTab: action.payload }

    default:
      return state;
  }
}