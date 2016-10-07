import {  
  SET_UPDATE_TICKET_SR_DATA,
  ON_OFF_FORM,
} from '../constants/EditTicketSrForm'

export function setUpdateTicketSrData(ticket, indexes, cityId) {  
  return (dispatch) => {        
    dispatch({
      type: SET_UPDATE_TICKET_SR_DATA,
      payload: ticket,      
      indexes: indexes,
      CITY_ID: cityId
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
