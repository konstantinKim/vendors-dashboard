import {  
  GET_ACTIVE_SUCCESS,
  POST_ADD_TICKET_SUCCESS
} from '../constants/ActiveProjects'

import { BACKEND_HOST, REQUEST_HEADERS, TOKEN } from '../config/settings'
import { checkResponseStatus } from '../store/enhancers/checkStatus'

export function getActiveProjects() {    
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

  return dispatch => fetch(BACKEND_HOST+'tickets_rd.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'POST',        
        body: formData
    })
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setNewTicket(json)))
}

function setActiveProjects(data) { 
 return { type: GET_ACTIVE_SUCCESS, payload: data };
}

function setNewTicket(data) { 
 return { type: POST_ADD_TICKET_SUCCESS, payload: data};
}





