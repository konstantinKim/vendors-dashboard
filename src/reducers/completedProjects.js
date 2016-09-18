import {
  GET_COMPLETED_SUCCESS
} from '../constants/CompletedProjects'

const initialState = {  
  projects: []
}

function setChartConfig(project) {   
  var disposed = project.total_tons - project.recycled
  if(disposed < 0){
    disposed = 0
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
        [ 'Recycled', project.recycled ],              
        [ 'Disposed', disposed ]        
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
  }

  project.chartConfig = conf
  return project
}


export default function completedProjects(state = initialState, action) {  
  switch (action.type) {    
    case GET_COMPLETED_SUCCESS:
      var data = action.payload
      for (let project_index = 0; project_index < data.length; project_index++){
        data[project_index] = setChartConfig(data[project_index])
      }
      return { ...state, projects: data }

    default:
      return state;
  }
}