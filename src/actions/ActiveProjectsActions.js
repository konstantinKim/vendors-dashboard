import {  
  GET_ACTIVE_SUCCESS
} from '../constants/ActiveProjects'

import { BACKEND_HOST, REQUEST_HEADERS } from '../config/settings'
import { checkResponseStatus } from '../store/enhancers/checkStatus'

export function getActiveProjects() {    
  return dispatch => fetch(BACKEND_HOST+'projects.json', REQUEST_HEADERS)
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setActiveProjects(json)))    
}

function setActiveProjects(data) { 
 return { type: GET_ACTIVE_SUCCESS, payload: data };
}





