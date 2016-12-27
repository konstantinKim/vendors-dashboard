import {  
  SET_MATERIALS_SUCCESS,
  UPDATE_STATE,
  SET_RESULTS
  
} from '../../constants/Search'

import { BACKEND_HOST, REQUEST_HEADERS } from '../../config/settings'
import { checkResponseStatus } from '../../store/enhancers/checkStatus'

export function getMaterials() {    
    return dispatch => fetch(BACKEND_HOST+'materials.json', {headers: REQUEST_HEADERS})
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setMaterials(json)))    
}

export function updateState(data) {    
    return { type: UPDATE_STATE, payload: data };    
}

export function doSearch(data) {    
    return dispatch => fetch(BACKEND_HOST+'facilities/material/'+data.MATERIAL_ID+'/zipcode/'+data.zipcode+'/radius/'+data.radius+'.json', {headers: REQUEST_HEADERS})
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setResults(json)))    
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

function setResults(data) {       
  return { type: SET_RESULTS, payload: data };
}