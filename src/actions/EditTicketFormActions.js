import {  
  SET_UPDATE_TICKET_DATA
} from '../constants/EditTicketForm'

export function setUpdateTicketData(ticket) {  
  return (dispatch) => {        
    dispatch({
      type: SET_UPDATE_TICKET_DATA,
      payload: ticket
    })    
  }
}

