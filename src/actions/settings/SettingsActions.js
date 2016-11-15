import {  
  SWITCH_TAB,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS
} from '../../constants/Settings'

import { BACKEND_HOST, REQUEST_HEADERS, TOKEN } from '../../config/settings'
import { checkResponseStatus } from '../../store/enhancers/checkStatus'

export function switchTab(tabId) {
  return (dispatch) => {        
    dispatch({
      type: SWITCH_TAB,
      payload: tabId      
    })    
  }
}

export function updateProfileStats(data) {  
  return (dispatch) => {        
    dispatch({
      type: UPDATE_PROFILE,
      payload: data      
    })    
  }
}

export function initProfileStats() {  	
  return dispatch => fetch(BACKEND_HOST+'auth/data.json', {headers: REQUEST_HEADERS})
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setProfileStats(json)))    
}

export function updateProfile(data) {       
  var formData  = new FormData();    
  for(let property in data){    
    if(property.toString() != 'phone'){
      formData.append(property.toString(), data[property].toString());              
    }    
  }

  var phone = data['phone_1'].toString() + data['phone_2'].toString() + data['phone_3'].toString() + data['phone_4'].toString()  
  formData.append('phone', phone);
  data['phone'] = phone
    
  return dispatch => {    
    fetch(BACKEND_HOST+'haulers/update.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'PATCH',        
        body: formData
    })
    .then(checkResponseStatus)            
    .then(dispatch(setUpdateProfileStats(data)))
  }    
}

function setProfileStats(data) {       	
  return { type: UPDATE_PROFILE, payload: data };
}

function setUpdateProfileStats(data) {        
  return { type: UPDATE_PROFILE_SUCCESS, payload: data };
}