import {  
  GET_COMPLETED_SUCCESS
} from '../constants/CompletedProjects'

import { BACKEND_HOST } from '../config/settings'

export function getCompletedProjects() {  
  return dispatch => fetch(BACKEND_HOST+'projects.json')
    .then(response => response.json())    
    .then(json => dispatch(setCompletedProjects(json)))
}

function setCompletedProjects(data) { 
 return { type: GET_COMPLETED_SUCCESS, payload: data };
}
