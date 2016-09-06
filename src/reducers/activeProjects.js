import {
  GET_ACTIVE_SUCCESS,
  POST_ADD_TICKET_SUCCESS
} from '../constants/ActiveProjects'


const initialState = {
  sync: 'False',  
  projects: []
}

export default function activeProjects(state = initialState, action) {
  switch (action.type) {    
    case GET_ACTIVE_SUCCESS:
      return { ...state, projects: action.payload, sync: 'True' }

    case POST_ADD_TICKET_SUCCESS:  
      /*var new_ticket = {
        FACILITY_ID: 71,
        PROJECT_ID: 625,
        TICKET_RD_ID: 900,
        date_created: "2016-09-03",
        material: "Cardboard and Paper",
        rate_used: "59",
        recycled: "95",
        submitted_by: "New Test Added",
        ticket: "Test",
        weight: "9990099"
      }      */
      //console.log(state.projects[0].facilities[0].tickets)            
      //var currentProjects = state.projects
      for (var project_index = 0; project_index < state.projects.length; project_index++){
        if (state.projects[project_index].PROJECT_ID == action.payload.PROJECT_ID){
          for (var facility_index = 0; facility_index < state.projects[project_index].facilities.length; facility_index++){
            if(state.projects[project_index].facilities[facility_index].FACILITY_ID == action.payload.FACILITY_ID){
              state.projects[project_index].facilities[facility_index].tickes.push(action.payload)
            }
          }
        }
      }      

      /*state.projects[0].facilities[0].tickets.push(new_ticket)
      state.projects[0].tickets_count = state.projects[0].facilities[0].tickets.length*/

      return { ...state, projects: state.projects }

    default:
      return state;
  }
}