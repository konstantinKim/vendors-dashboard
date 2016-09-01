import {  
  SWITCH_TAB,
  SET_COMPLETED_COUNT_SUCCESS
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
    console.log(REQUEST_HEADERS)
    return dispatch => fetch(BACKEND_HOST+'projects/completed_count.json', REQUEST_HEADERS)
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setCompletedCount(json)))    
  
}

function setCompletedCount(data) {     
 return { type: SET_COMPLETED_COUNT_SUCCESS, payload: data };
}