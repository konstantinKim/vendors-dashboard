import {
  GET_ACTIVE_SUCCESS,
  POST_ADD_TICKET_SUCCESS,
  POST_ADD_TICKET_REQUEST,
  POST_ADD_TICKET_ERROR,
  PATCH_UPDATE_TICKET_SUCCESS,
  PATCH_UPDATE_TICKET_ERROR,
  DELETE_TICKET_SUCCESS,
  ON_OFF_EDIT_TICKET_FORM
} from '../constants/ActiveProjects'


const initialState = {  
  sync: 'False',  
  disableAddTicketForm: 'False',
  isDisableEditTicketForm: 'False',
  addTicketError: '',
  editTicketError: '',
  projects: []  
}

function setChartConfig(project) {       
  var dataChart = []
  for (let fi = 0; fi < project.facilities.length; fi++){
    let fw = 0    
    for (let ti = 0; ti < project.facilities[fi].tickets.length; ti++){                  
      fw += parseFloat(project.facilities[fi].tickets[ti].weight)
    }
    let fac = []
    fac.push(project.facilities[fi].name)
    fac.push(fw) 
    dataChart.push(fac)
  }    
  
    

  var conf = {
    chart: { backgroundColor:'none', border: 'none', margin: [0, 0, 0, 0], width: '900' },
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
          format: '<b>{point.name}</b>:{point.y}',
          style:
          {
            fontFamily: 'Arial',
            fontSize: '10px',
            fontWeight: 'normal',
            //width: '200px'
          },
          useHTML: true 
        },
        slicedOffset: 20,
        size: '75%'
      }
    },
    series:
    [{
      allowPointSelect: true,
      data: dataChart,
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



function setStatistic(project) { 
  var totalTicketsCount = 0
  var materialsHauled = []
  var totalTons = 0
  var totalRecycled = 0
  var totalRate = 0
  for (var facility_index = 0; facility_index < project.facilities.length; facility_index++){
    let facilityTotalTons = 0
    let facilityTotalRecycled = 0
    let facilityMaterialsTaken = []    
    var ticketsCount = project.facilities[facility_index].tickets.length
    for (var ticket_index = 0; ticket_index < ticketsCount; ticket_index++){
      var matId = project.facilities[facility_index].tickets[ticket_index].MATERIAL_ID
      if(!materialsHauled.includes(matId)){
        materialsHauled.push(matId)        
      }                    
      if(!facilityMaterialsTaken.includes(matId)){
        facilityMaterialsTaken.push(matId)
      }
      totalTons += parseFloat(project.facilities[facility_index].tickets[ticket_index].weight) 
      totalRecycled += parseFloat(project.facilities[facility_index].tickets[ticket_index].recycled)

      facilityTotalTons += parseFloat(project.facilities[facility_index].tickets[ticket_index].weight)
      facilityTotalRecycled += parseFloat(project.facilities[facility_index].tickets[ticket_index].recycled)
    }

    totalTicketsCount += ticketsCount
    project.facilities[facility_index].tons_taken = facilityTotalTons
    project.facilities[facility_index].tons_recycled = facilityTotalRecycled
    project.facilities[facility_index].materials_taken = facilityMaterialsTaken.length
  }
  
  project.materials_hauled = materialsHauled.length
  project.tickets_count = totalTicketsCount
  project.total_tons = +totalTons.toFixed(2)
  project.recycled = +totalRecycled.toFixed(2)
  if(totalTons > 0 && totalRecycled > 0){
    totalRate = +(totalRecycled / totalTons * 100).toFixed(2)
  }
  project.rate = totalRate                  

  return project
}

export default function activeProjects(state = initialState, action) {
  switch (action.type) {    
    case GET_ACTIVE_SUCCESS:
      var data = action.payload
      for (let project_index = 0; project_index < data.length; project_index++){
        data[project_index] = setChartConfig(setStatistic(data[project_index]))
      }
      return { ...state, projects: data, sync: 'True' }

    case POST_ADD_TICKET_REQUEST:        
        return { ...state, disableAddTicketForm: action.payload, addTicketError: '' }        

    case POST_ADD_TICKET_SUCCESS:              
      var newProjects = state.projects
      var newFacility = true            
      var project_index
      var facility_index            
      
      for (project_index = 0; project_index < state.projects.length; project_index++){
        if (newProjects[project_index].PROJECT_ID == action.payload.PROJECT_ID){                    
          for (facility_index = 0; facility_index < newProjects[project_index].facilities.length; facility_index++){
            if(newProjects[project_index].facilities[facility_index].FACILITY_ID == action.payload.FACILITY_ID){
              newProjects[project_index].facilities[facility_index].tickets.push(action.payload)
              newFacility = false
              break
            }
          }
          break
        }
      }       

      //Add New Facility and push ticket to it
      if(newFacility == true && newProjects.length > 0){        
        newProjects[project_index].facilities.push({'FACILITY_ID':action.payload.FACILITY_ID, 'name':action.payload.facility, 'tickets':[action.payload]})        
      }

      newProjects[project_index] = setChartConfig(setStatistic(newProjects[project_index]))       

      window.closePopUp()       
      window.doMessage('Ticket Successfully Added', 'Success')
      window.resetForm('add_ticket_form')

      return { ...state, projects: state.projects, disableAddTicketForm: 'False' }

    case POST_ADD_TICKET_ERROR:
      return { ...state, disableAddTicketForm: 'False', addTicketError: action.payload }

    case ON_OFF_EDIT_TICKET_FORM:
        return { ...state, isDisableEditTicketForm: action.payload, editTicketError: '' }

    case PATCH_UPDATE_TICKET_SUCCESS:
      var project = state.projects[action.indexes.project_index]
      //If Facilty didnt changed
      if(project.facilities[action.indexes.facility_index] == action.payload.FACILITY_ID){
        project.facilities[action.indexes.facility_index].tickets[action.indexes.ticket_index] = action.payload
      }
      //If Facilty changed        
      else
      {
        //delete ticket from facility        
        if(project.facilities[action.indexes.facility_index].tickets.length > 1){
          project.facilities[action.indexes.facility_index].tickets.splice(action.indexes.ticket_index, 1)
        }
        //delete facility
        else{
          project.facilities.splice(action.indexes.facility_index, 1)
        }
        
        //add ticket
        var found = false;
        for (var i = 0; i < project.facilities.length; i++){
          if(project.facilities[i].FACILITY_ID == action.payload.FACILITY_ID){
            project.facilities[i].tickets.push(action.payload)
            found = true;
            break;
          }
        }

        if(!found){
          project.facilities.push({'name': action.payload.facility, 'FACILITY_ID': action.payload.FACILITY_ID, 'tickets': [action.payload]})
        }                
      }
      
      newProjects = state.projects
      newProjects[action.indexes.project_index] = setChartConfig(setStatistic(project)) 

      window.closePopUp()       
      window.doMessage('Ticket Successfully Updated', 'Success')
      
      return { ...state, projects: newProjects, isDisableEditTicketForm: 'False' }

    case PATCH_UPDATE_TICKET_ERROR:
        return { ...state, editTicketError: action.payload, isDisableEditTicketForm: 'False' }


    case DELETE_TICKET_SUCCESS:
      newProjects = state.projects
      project = newProjects[action.indexes.project_index]

      //delete ticket from facility        
      if(project.facilities[action.indexes.facility_index].tickets.length > 1){
        project.facilities[action.indexes.facility_index].tickets.splice(action.indexes.ticket_index, 1)
      }
      //delete facility
      else{
        project.facilities.splice(action.indexes.facility_index, 1)
      }

      newProjects[action.indexes.project_index] = setChartConfig(setStatistic(project)) 

      window.doMessage('Ticket Deleted', 'Success')

      return { ...state, projects: newProjects }

    default:
      return state;
  }
}