import {  
  GET_COMPLETED_SUCCESS
} from '../constants/CompletedProjects'

import { BACKEND_HOST, REQUEST_HEADERS } from '../config/settings'
import { checkResponseStatus } from '../store/enhancers/checkStatus'

export function getCompletedProjects() {  
  return dispatch => fetch(BACKEND_HOST+'projects/completed.json', REQUEST_HEADERS)
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setCompletedProjects(json)))    
}

function setCompletedProjects(data) { 
 return { type: GET_COMPLETED_SUCCESS, payload: data };
}
