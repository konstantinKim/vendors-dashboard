import {  
  SWITCH_TAB,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_IMAGES
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
    if(property.toString() != 'phone' && property.toString() != 'permits' && property.toString() != 'associations' && property.toString() != 'hours' && property.toString() != 'reps'){
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

  var associations = [];
  for(let i in data.associations){
    let name = data.associations[i].name.toString().trim().replace(',',';')
    if(name){
      associations.push(data.associations[i].name.toString().trim().replace(',',';'))
    }    
  }
  formData.append('associations', associations.join(','));
  
  formData.append('hours', JSON.stringify(data.hours));

  formData.append('reps', JSON.stringify(data.reps));
      
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

export function addImage(data) {       
  var formData  = new FormData();  
  formData.append('image', data);      
      
  return dispatch => {    
    fetch(BACKEND_HOST+'haulers_images.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'POST',        
        body: formData
    })
    .then(checkResponseStatus)            
    .then(dispatch(getImages()))
  }    
}

export function deleteImage(id) {
  return dispatch => {    
    fetch(BACKEND_HOST+'haulers_images/'+id+'.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'DELETE'        
    })
    .then(checkResponseStatus)                
    .then(dispatch(getImages()))
    .then(dispatch(getImages()))
  }     
}

export function getImages() {       
  return dispatch => fetch(BACKEND_HOST+'haulers_images.json', {headers: REQUEST_HEADERS})
        .then(checkResponseStatus)    
        .then(response => response.json())    
        .then(json => dispatch(setUpdateImages(json)))    
}

function setProfileStats(data) {  
  if(!data.permits.length){
    data.permits.push({'name':''})
  }
  if(!data.associations.length){
    data.associations.push({'name':''})
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

function setUpdateImages(data) {            
  return { type: UPDATE_IMAGES, payload: data };
}