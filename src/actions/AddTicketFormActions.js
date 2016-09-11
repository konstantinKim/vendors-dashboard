import {  
  IDENTIFY_TICKET_SUCCESS
} from '../constants/AddTicketForm'

export function identifyTicket(projectId, cityId) {  
  return (dispatch) => {        
    dispatch({
      type: IDENTIFY_TICKET_SUCCESS,
      projectId: projectId,
      cityId: cityId
    })    
  }
}

