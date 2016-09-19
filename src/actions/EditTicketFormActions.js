import {  
  SET_UPDATE_TICKET_DATA,
  ON_OFF_FORM,
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

export function onOffForm(status) {    
  return (dispatch) => {        
    dispatch({
      type: ON_OFF_FORM,      
      payload: status      
    })    
  }
}
