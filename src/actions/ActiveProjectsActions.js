import {  
  GET_ACTIVE_SUCCESS
} from '../constants/ActiveProjects'

import { BACKEND_HOST } from '../config/settings'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log("status: ", response.statusText);
    return response
  } else {
    window.location = '/login'
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function getActiveProjects() {  
  const token = localStorage.getItem('token')  
  return dispatch => fetch(BACKEND_HOST+'projects.json', { headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}})
    .then(checkStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setActiveProjects(json)))    
}

function setActiveProjects(data) { 
 return { type: GET_ACTIVE_SUCCESS, payload: data };
}





