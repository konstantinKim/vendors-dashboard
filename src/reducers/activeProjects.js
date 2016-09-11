import {
  GET_ACTIVE_SUCCESS,
  POST_ADD_TICKET_SUCCESS,
  POST_ADD_TICKET_REQUEST
} from '../constants/ActiveProjects'


const initialState = {
  sync: 'False',  
  disableAddTicketForm: 'False',
  projects: []
}

export default function activeProjects(state = initialState, action) {
  switch (action.type) {    
    case GET_ACTIVE_SUCCESS:
      return { ...state, projects: action.payload, sync: 'True' }

    case POST_ADD_TICKET_REQUEST:
        return { ...state, disableAddTicketForm: action.payload }

    case POST_ADD_TICKET_SUCCESS:              
      var newFacility = true            
      var project_index
      var facility_index            
      
      for (project_index = 0; project_index < state.projects.length; project_index++){
        if (state.projects[project_index].PROJECT_ID == action.payload.PROJECT_ID){                    
          for (facility_index = 0; facility_index < state.projects[project_index].facilities.length; facility_index++){
            if(state.projects[project_index].facilities[facility_index].FACILITY_ID == action.payload.FACILITY_ID){
              state.projects[project_index].facilities[facility_index].tickets.push(action.payload)
              newFacility = false
              break
            }
          }
          break
        }
      }       

      //Add New Facility and push ticket to it
      if(newFacility == true && state.projects.length > 0){        
        facility_index = state.projects[project_index].facilities.push({'FACILITY_ID':action.payload.FACILITY_ID, 'name':action.payload.facility, 'tickets':[]})
        facility_index -= 1                
        state.projects[project_index].facilities[facility_index].tickets.push(action.payload)
      }

      //console.log('Update stats')
      //Update stats
      var totalTicketsCount = 0
      var materialsHauled = []
      var totalTons = 0
      var totalRecycled = 0
      var totalRate = 0
      for (facility_index = 0; facility_index < state.projects[project_index].facilities.length; facility_index++){
        var ticketsCount = state.projects[project_index].facilities[facility_index].tickets.length
        for (var ticket_index = 0; ticket_index < ticketsCount; ticket_index++){
          var matId = state.projects[project_index].facilities[facility_index].tickets[ticket_index].MATERIAL_ID
          if(!materialsHauled.includes(matId)){
            materialsHauled.push(matId)
          }                    
          totalTons += parseFloat(state.projects[project_index].facilities[facility_index].tickets[ticket_index].weight) 
          totalRecycled += parseFloat(state.projects[project_index].facilities[facility_index].tickets[ticket_index].recycled)
        }        
        totalTicketsCount += ticketsCount
      }
      
      state.projects[project_index].materials_hauled = materialsHauled.length
      state.projects[project_index].tickets_count = totalTicketsCount
      state.projects[project_index].total_tons = totalTons
      state.projects[project_index].recycled = totalRecycled
      if(totalTons > 0 && totalRecycled > 0){
        totalRate = (totalRecycled / totalTons * 100)
      }
      state.projects[project_index].rate = totalRate                  

      return { ...state, projects: state.projects, disableAddTicketForm: 'False' }

    default:
      return state;
  }
}