import {  
  GET_ACTIVE_SUCCESS,
  POST_ADD_TICKET_SUCCESS,
  POST_ADD_TICKET_REQUEST,
  POST_ADD_TICKET_ERROR,
  PATCH_UPDATE_TICKET_SUCCESS,
  PATCH_UPDATE_TICKET_ERROR,
  DELETE_TICKET_SUCCESS,
  ON_OFF_EDIT_TICKET_FORM  
} from '../constants/ActiveProjects'

import { BACKEND_HOST, REQUEST_HEADERS, TOKEN } from '../config/settings'
import { checkResponseStatus } from '../store/enhancers/checkStatus'

export function getActiveProjects() {    
	console.log(REQUEST_HEADERS)
  return dispatch => fetch(BACKEND_HOST+'projects.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setActiveProjects(json)))    
}

export function addTicket(data, file) {      	
  var formData  = new FormData();  
  for (var i = 0; i < data.length; i++) {      
    if(data[i].name != 'image'){
        formData.append(data[i].name, data[i].value);        
    }    
  }                

  formData.append('image', file.files[0]);

  return dispatch => {
    dispatch(addTicketRequest());
    fetch(BACKEND_HOST+'tickets_rd.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'POST',        
        body: formData
    })
    .then(checkResponseStatus)        
    .then(response => response.json())    
    .then(json => dispatch(setNewTicket(json)))
  }    
}

export function updateTicket(data, file, editFormState) {       
  var formData  = new FormData();    
  for (var i = 0; i < data.length; i++) {      
    if(data[i].name != 'image'){
        formData.append(data[i].name, data[i].value);        
    }        
  }                

  formData.append('image', file.files[0]);
  
  return dispatch => {    
    dispatch(onOffEditTicketForm('True'));
    fetch(BACKEND_HOST+'tickets_rd/'+formData.get('TICKET_RD_ID')+'.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'PATCH',        
        body: formData
    })
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setUpdateTicket(json, editFormState.indexes)));        
  }    
}

export function deleteTicket(ticket, indexes) {
  return dispatch => {    
    fetch(BACKEND_HOST+'tickets_rd/'+ticket.TICKET_RD_ID+'.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'DELETE'        
    })
    .then(checkResponseStatus)                
    .then(response => dispatch(unsetTicket(response, indexes)))
  }     
}

function setActiveProjects(data) { 
 return { type: GET_ACTIVE_SUCCESS, payload: data };
}

function setNewTicket(data) {  
 if(typeof data.error == 'undefined'){  
  return { type: POST_ADD_TICKET_SUCCESS, payload: data };  
 }
 return { type: POST_ADD_TICKET_ERROR, payload: data.error };
 
}

function setUpdateTicket(data, indexes) {  
  if(typeof data.error == 'undefined'){  
    return { type: PATCH_UPDATE_TICKET_SUCCESS, payload: data, indexes: indexes };
  }
  return { type: PATCH_UPDATE_TICKET_ERROR, payload: data.error};
  
}

function unsetTicket(data, indexes) { 
  try{
    if (data.status == 204) {
      return { type: DELETE_TICKET_SUCCESS, indexes: indexes };
    }        
  }
  catch(err){
    window.doMessage('Ticket cannot be deleted', 'Warning')
    return { type: 'error' }
  }      
  window.doMessage('Ticket cannot be deleted', 'Warning')
  return { type: 'error' }
}

function addTicketRequest() {       
  return { type: POST_ADD_TICKET_REQUEST, payload: 'True' };    
}

export function onOffEditTicketForm(status) {    
  return (dispatch) => {        
    dispatch({
      type: ON_OFF_EDIT_TICKET_FORM,      
      payload: status      
    })    
  }
}




