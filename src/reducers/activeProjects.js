import {
  GET_ACTIVE_SUCCESS,
  POST_ADD_TICKET_SUCCESS,
  POST_ADD_TICKET_REQUEST,
  POST_ADD_TICKET_ERROR,
  POST_ADD_TICKET_SR_SUCCESS,
  PATCH_UPDATE_TICKET_SUCCESS,
  PATCH_UPDATE_TICKET_ERROR,
  PATCH_UPDATE_TICKET_SR_SUCCESS,
  PATCH_UPDATE_TICKET_SR_ERROR,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_SR_SUCCESS,
  ON_OFF_EDIT_TICKET_FORM,
  ON_OFF_EDIT_TICKET_SR_FORM,
  CLEAR_ADD_TICKET_ERROR
} from '../constants/ActiveProjects'


const initialState = {  
  sync: 'False',  
  disableAddTicketForm: 'False',
  isDisableEditTicketForm: 'False',
  isDisableEditTicketSrForm: 'False',
  addTicketError: '',
  editTicketError: '',
  editTicketSrError: '',
  projects: []  
}

function setChartConfig(project) {       
  var dataChart = []
  var facUsedIds = []
  for (let fi = 0; fi < project.facilities.length; fi++){
    let fw = 0    
    for (let ti = 0; ti < project.facilities[fi].tickets.length; ti++){                  
      fw += parseFloat(project.facilities[fi].tickets[ti].weight)
    }
    let fac = []
    fac.push(project.facilities[fi].name)
    fac.push(fw) 
    dataChart.push(fac)
    facUsedIds.push(project.facilities[fi].FACILITY_ID)
  } 

  for (let fi = 0; fi < project.reused_types.length; fi++){
    let fw = 0    
    for (let ti = 0; ti < project.reused_types[fi].tickets.length; ti++){                  
      fw = parseFloat(project.reused_types[fi].tickets[ti].weight)
      
      if(!facUsedIds.includes(project.reused_types[fi].tickets[ti].FACILITY_ID) && project.reused_types[fi].tickets[ti].facility){
        let fac = []
        fac.push(project.reused_types[fi].tickets[ti].facility)
        fac.push(fw) 
        dataChart.push(fac)      
      }
      else{
        for (let chart_i = 0; chart_i < dataChart.length; chart_i++){                  
          if(dataChart[chart_i][0] == project.reused_types[fi].tickets[ti].facility){
            dataChart[chart_i][1] = dataChart[chart_i][1] + fw
            break
          }
        }
      }
      facUsedIds.push(project.reused_types[fi].tickets[ti].FACILITY_ID)
    }    
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
  
  for (let rt_index = 0; rt_index < project.reused_types.length; rt_index++){
    let ticketsCount = project.reused_types[rt_index].tickets.length
    let rtTotalTons = 0
    for (let ticket_index = 0; ticket_index < ticketsCount; ticket_index++){            
      totalTons += parseFloat(project.reused_types[rt_index].tickets[ticket_index].weight) 
      totalRecycled += parseFloat(project.reused_types[rt_index].tickets[ticket_index].weight) 

      rtTotalTons += parseFloat(project.reused_types[rt_index].tickets[ticket_index].weight)      

      if(!materialsHauled.includes(project.reused_types[rt_index].tickets[ticket_index].MATERIAL_ID)){
        materialsHauled.push(project.reused_types[rt_index].tickets[ticket_index].MATERIAL_ID)        
      }                    
    }    

    totalTicketsCount += ticketsCount
    project.reused_types[rt_index].tons_taken = rtTotalTons        
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

    case CLEAR_ADD_TICKET_ERROR:
      return { ...state, addTicketError: '' }

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
        newProjects[project_index].facilities.push({'FACILITY_ID':action.payload.FACILITY_ID, 'name':action.payload.facility, 'street':action.payload.facility_street, 'city':action.payload.facility_city, 'state':action.payload.facility_state, 'zipcode':action.payload.facility_zipcode, 'tickets':[action.payload]})        
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

    case ON_OFF_EDIT_TICKET_SR_FORM:
        return { ...state, isDisableEditTicketSrForm: action.payload, editTicketSrError: '' }    

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
          project.facilities.push({'FACILITY_ID':action.payload.FACILITY_ID, 'name':action.payload.facility, 'street':action.payload.facility_street, 'city':action.payload.facility_city, 'state':action.payload.facility_state, 'zipcode':action.payload.facility_zipcode, 'tickets':[action.payload]})
        }                
      }
      
      newProjects = state.projects
      newProjects[action.indexes.project_index] = setChartConfig(setStatistic(project)) 

      window.closePopUp()       
      window.doMessage('Ticket Successfully Updated', 'Success')
      
      return { ...state, projects: newProjects, isDisableEditTicketForm: 'False' }

    case PATCH_UPDATE_TICKET_SR_SUCCESS:
      project = state.projects[action.indexes.project_index]
      //If RType didnt changed
      if(project.reused_types[action.indexes.rtype_index].CONSTRUCTION_TYPE_ID == action.payload.CONSTRUCTION_TYPE_ID){
        project.reused_types[action.indexes.rtype_index].tickets[action.indexes.ticket_index] = action.payload
      }
      //If Rtype is changed        
      else
      {
        //delete ticket from Rtype        
        if(project.reused_types[action.indexes.rtype_index].tickets.length > 1){
          project.reused_types[action.indexes.rtype_index].tickets.splice(action.indexes.ticket_index, 1)
        }
        //delete Rtype
        else{
          project.reused_types.splice(action.indexes.rtype_index, 1)
        }
        
        //add ticket
        found = false;
        for (i = 0; i < project.reused_types.length; i++){
          if(project.reused_types[i].CONSTRUCTION_TYPE_ID == action.payload.CONSTRUCTION_TYPE_ID){
            project.reused_types[i].tickets.push(action.payload)
            found = true;
            break;
          }
        }

        if(!found){
          project.reused_types.push({'name': action.payload.name, 'CONSTRUCTION_TYPE_ID': action.payload.CONSTRUCTION_TYPE_ID, 'tickets': [action.payload]})
        }                
      }
      
      newProjects = state.projects
      newProjects[action.indexes.project_index] = setChartConfig(setStatistic(project)) 

      window.closePopUp()       
      window.doMessage('Ticket Successfully Updated', 'Success')
      
      return { ...state, projects: newProjects, isDisableEditTicketSrForm: 'False' }  

    case PATCH_UPDATE_TICKET_ERROR:
        return { ...state, editTicketError: action.payload, isDisableEditTicketForm: 'False' }

    case PATCH_UPDATE_TICKET_SR_ERROR:
        return { ...state, editTicketSrError: action.payload, isDisableEditTicketSrForm: 'False' }    

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

    case DELETE_TICKET_SR_SUCCESS:
      newProjects = state.projects
      project = newProjects[action.indexes.project_index]

      //delete ticket from Rtype        
      if(project.reused_types[action.indexes.rtype_index].tickets.length > 1){
        project.reused_types[action.indexes.rtype_index].tickets.splice(action.indexes.ticket_index, 1)
      }
      //delete Rtype
      else{
        project.reused_types.splice(action.indexes.rtype_index, 1)
      }

      newProjects[action.indexes.project_index] = setChartConfig(setStatistic(project)) 

      window.doMessage('Ticket Deleted', 'Success')

      return { ...state, projects: newProjects }  

    case POST_ADD_TICKET_SR_SUCCESS:                        
      newProjects = state.projects
      
      newFacility = true      
      for (project_index = 0; project_index < state.projects.length; project_index++){
        if (newProjects[project_index].PROJECT_ID == action.payload.PROJECT_ID){                    
          for (facility_index = 0; facility_index < newProjects[project_index].reused_types.length; facility_index++){
            if(newProjects[project_index].reused_types[facility_index].CONSTRUCTION_TYPE_ID == action.payload.CONSTRUCTION_TYPE_ID){
              newProjects[project_index].reused_types[facility_index].tickets.push(action.payload)
              newFacility = false
              break
            }
          }
          break
        }
      }       

      //Add New RTYPE and push ticket to it
      if(newFacility == true && newProjects.length > 0){        
        newProjects[project_index].reused_types.push({'CONSTRUCTION_TYPE_ID':action.payload.CONSTRUCTION_TYPE_ID, 'name':action.payload.name, 'tickets':[action.payload]})                
      }

      newProjects[project_index] = setChartConfig(setStatistic(newProjects[project_index]))
      

      window.closePopUp()       
      window.doMessage('Ticket Successfully Added', 'Success')
      window.resetForm('add_ticket_sr_form')

      return { ...state, projects: state.projects, disableAddTicketForm: 'False' }  

    default:
      return state;
  }
}