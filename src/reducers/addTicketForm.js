import {  
  IDENTIFY_TICKET_SUCCESS
} from '../constants/AddTicketForm'

const initialState = {  
  projectId: 0,
  cityId: 0
}

export default function addTicketForm(state = initialState, action) {
  switch (action.type) {    

    case IDENTIFY_TICKET_SUCCESS:      
      return { ...state, projectId: action.projectId, cityId: action.cityId }    

    default:
      return state;
  }
}