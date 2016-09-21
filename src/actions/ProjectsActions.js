import {  
  SWITCH_TAB,
  SET_COMPLETED_COUNT_SUCCESS,
  SET_MATERIALS_SUCCESS,
  SET_FACILITIES_REQUEST,
  SET_FACILITIES_SUCCESS
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

export function getFacilities(city_id, material_id, projectId) {    
    return dispatch => {
        dispatch(setFacilitiesPreloader());
        fetch(BACKEND_HOST+'facilities/city/'+city_id+'/material/'+material_id+'/project/'+projectId+'.json', {headers: REQUEST_HEADERS})
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setFacilities(json)))     
    }
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

function setFacilitiesPreloader() {     
  var facilities = [{'FACILITY_ID':'', 'name': 'Please wait. Loading...'}]    
  return { type: SET_FACILITIES_REQUEST, payload: facilities };    
}

function setFacilities(data) {     
  var facilities = []
  if (typeof data.data != 'undefined' && data.data.length) {
    for (let i in data.data){      
      facilities.push(data.data[i].attributes)  
    }
  }
  var selected_facilities = []
  if (typeof data.selected_facilities.data != 'undefined' && data.selected_facilities.data.length) {
    for (let i in data.selected_facilities.data){      
      selected_facilities.push(data.selected_facilities.data[i].attributes)
    }
  }
  return { type: SET_FACILITIES_SUCCESS, payload: facilities, selectedFacilities: selected_facilities };
}