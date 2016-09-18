import {  
  SET_UPDATE_TICKET_DATA,
  SET_UPDATE_TICKET_PERCENTAGE
} from '../constants/EditTicketForm'

export function setUpdateTicketData(ticket, city_id, indexes=null) {  
  return (dispatch) => {        
    dispatch({
      type: SET_UPDATE_TICKET_DATA,
      payload: ticket,
      CITY_ID: city_id,
      indexes: indexes
    })    
  }
}

export function disableForm() {    
  return (dispatch) => {        
    dispatch({
      type: SET_UPDATE_TICKET_PERCENTAGE,      
      payload: 'True'      
    })    
  }
}
