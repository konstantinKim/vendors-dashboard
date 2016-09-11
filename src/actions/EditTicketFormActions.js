import {  
  SET_UPDATE_TICKET_DATA
} from '../constants/EditTicketForm'

export function setUpdateTicketData(ticket, city_id) {  
  return (dispatch) => {        
    dispatch({
      type: SET_UPDATE_TICKET_DATA,
      payload: ticket,
      CITY_ID: city_id
    })    
  }
}

