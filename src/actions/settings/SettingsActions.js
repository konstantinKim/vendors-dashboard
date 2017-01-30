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
    if(property.toString() != 'phone' && property.toString() != 'permits' && property.toString() != 'hours'){
      formData.append(property.toString(), data[property].toString());              
    }    
  }

  var phone = data['phone_1'].toString() + data['phone_2'].toString() + data['phone_3'].toString() + data['phone_4'].toString()  
  formData.append('phone', phone);
  data['phone'] = phone

  var permits = [];
  for(let i in data.permits){
    permits.push(data.permits[i].name.toString().trim().replace(',',';'))
  }
  formData.append('permits', permits.join(','));
  
  formData.append('hours', JSON.stringify(data.hours));
      
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
  if(!data.permits.length){
    data.permits.push({'name':''})
  }
  
  var hours = {
      "monday":{
        "day":"Monday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "tuesday":{
        "day":"Tuesday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "wednesday":{
        "day":"Wednesday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "thursday":{
        "day":"Thursday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "friday":{
        "day":"Friday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "saturday":{
        "day":"Saturday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "sunday":{
        "day":"Sunday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      }
    }

  try 
  {    
    data.hours = JSON.parse(data.hours)
  } catch(e) {
    data.hours = hours
  }  
  
  if(!data.hours){
    data.hours = hours
  }
      
  
  
  return { type: UPDATE_PROFILE, payload: data };
}

function setUpdateProfileStats(data) {          
  return { type: UPDATE_PROFILE_SUCCESS, payload: data };
}