import {  
  SWITCH_TAB,
  SET_COMPLETED_COUNT_SUCCESS,
  SET_MATERIALS_SUCCESS
} from '../constants/Projects'

import { BACKEND_HOST, REQUEST_HEADERS } from '../config/settings'
import { checkResponseStatus } from '../store/enhancers/checkStatus'

export function switchTab(tabId) {

  return (dispatch) => {
    //const myState = getState()        
    
    dispatch({
      type: SWITCH_TAB,
      payload: tabId      
    })    
  }
}

export function getCompletedCount() {    
    return dispatch => fetch(BACKEND_HOST+'projects/completed_count.json', {headers: REQUEST_HEADERS})
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setCompletedCount(json)))    
}

export function getMaterials() {    
    return dispatch => fetch(BACKEND_HOST+'materials.json', {headers: REQUEST_HEADERS})
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setMaterials(json)))    
}

function setCompletedCount(data) {     
 return { type: SET_COMPLETED_COUNT_SUCCESS, payload: data };
}

function setMaterials(data) {     
  var materials = []
  if (typeof data.data != 'undefined' && data.data.length) {
    for (var i in data.data){      
      materials.push(data.data[i].attributes)  
    }
  }
  return { type: SET_MATERIALS_SUCCESS, payload: materials };
}