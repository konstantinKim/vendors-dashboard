import {  
  GET_ACTIVE_SUCCESS,
  POST_ADD_TICKET_SUCCESS,
  POST_ADD_TICKET_REQUEST,
  POST_ADD_TICKET_ERROR,
  POST_ADD_TICKET_SR_SUCCESS,
  PATCH_UPDATE_TICKET_SUCCESS,
  PATCH_UPDATE_TICKET_ERROR,
  PATCH_UPDATE_TICKET_SR_SUCCESS,
  PATCH_UPDATE_TICKET_SR_ERROR,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_SR_SUCCESS,
  ON_OFF_EDIT_TICKET_FORM,
  ON_OFF_EDIT_TICKET_SR_FORM,
  CLEAR_ADD_TICKET_ERROR
} from '../constants/ActiveProjects'

import { BACKEND_HOST, REQUEST_HEADERS, TOKEN } from '../config/settings'
import { checkResponseStatus } from '../store/enhancers/checkStatus'

export function getActiveProjects() {    
	console.log(REQUEST_HEADERS)
  return dispatch => fetch(BACKEND_HOST+'projects.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setActiveProjects(json)))    
}

export function clearAddTicketError() {    
 return { type: CLEAR_ADD_TICKET_ERROR, payload: '' };   
}

export function addTicket(data, file) {      	
  var formData  = new FormData();  
  for (var i = 0; i < data.length; i++) {      
    if(data[i].name != 'image'){
        formData.append(data[i].name, data[i].value);        
    }    
  }                

  formData.append('image', file.files[0]);

  return dispatch => {
    dispatch(addTicketRequest());
    fetch(BACKEND_HOST+'tickets_rd.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'POST',        
        body: formData
    })
    .then(checkResponseStatus)        
    .then(response => response.json())    
    .then(json => dispatch(setNewTicket(json)))
  }    
}

export function updateTicket(data, file, editFormState) {       
  var formData  = new FormData();    
  for (var i = 0; i < data.length; i++) {      
    if(data[i].name != 'image'){
        formData.append(data[i].name, data[i].value);        
    }        
  }                

  formData.append('image', file.files[0]);
  
  return dispatch => {    
    dispatch(onOffEditTicketForm('True'));
    fetch(BACKEND_HOST+'tickets_rd/'+formData.get('TICKET_RD_ID')+'.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'PATCH',        
        body: formData
    })
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setUpdateTicket(json, editFormState.indexes)));        
  }    
}

export function deleteTicket(ticket, indexes) {
  return dispatch => {    
    fetch(BACKEND_HOST+'tickets_rd/'+ticket.TICKET_RD_ID+'.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'DELETE'        
    })
    .then(checkResponseStatus)                
    .then(response => dispatch(unsetTicket(response, indexes)))
  }     
}

export function deleteSrTicket(ticket, indexes) {
  return dispatch => {    
    fetch(BACKEND_HOST+'tickets_sr/'+ticket.TICKET_SR_ID+'.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'DELETE'        
    })
    .then(checkResponseStatus)                
    .then(response => dispatch(unsetTicketSr(response, indexes)))
  }     
}

export function addTicketSr(data, file, material_image_1, material_image_2, material_image_3, material_image_4) {       
  var formData  = new FormData();  
  for (var i = 0; i < data.length; i++) {
    if(data[i].name != 'CONSTRUCTION_TYPE_ID' && data[i].name != 'image' && data[i].name != 'material_image_1' && data[i].name != 'material_image_2' && data[i].name != 'material_image_3' && data[i].name != 'material_image_4'){
        formData.append(data[i].name, data[i].value);
    }        
  }
  
  formData.append('inventory', data.inventory);
  formData.append('CONSTRUCTION_TYPE_ID', data.CONSTRUCTION_TYPE_ID);

  if(file != undefined){
    formData.append('image', file.files[0]);
  }  
  
  formData.append('material_image_1', material_image_1.files[0]);
  formData.append('material_image_2', material_image_2.files[0]);
  formData.append('material_image_3', material_image_3.files[0]);
  formData.append('material_image_4', material_image_4.files[0]);
  console.log(formData.get('CONSTRUCTION_TYPE_ID'))
  return dispatch => {
    dispatch(addTicketRequest());
    fetch(BACKEND_HOST+'tickets_sr.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'POST',        
        body: formData
    })
    .then(checkResponseStatus)        
    .then(response => response.json())    
    .then(json => dispatch(setNewSrTicket(json)))
  }    
}

export function updateTicketSr(data, file, material_image_1, material_image_2, material_image_3, material_image_4) {       
  
  var formData  = new FormData();    
  for(let property in data.ticket){
    if(property != 'facility' && property != 'material' && property != 'image' && property != 'material_image_1' && property != 'material_image_2' && property != 'material_image_3' && property != 'material_image_4'){
      formData.append(property.toString(), data.ticket[property].toString());          
    }    
  }

  if(file != undefined){
    formData.append('image', file.files[0]);
  }  
  
  formData.append('material_image_1', material_image_1.files[0]);
  formData.append('material_image_2', material_image_2.files[0]);
  formData.append('material_image_3', material_image_3.files[0]);
  formData.append('material_image_4', material_image_4.files[0]);  

  return dispatch => {    
    dispatch(onOffEditSrTicketForm('True'));
    fetch(BACKEND_HOST+'tickets_sr/'+formData.get('TICKET_SR_ID')+'.json', 
    {
        headers: {'Accept': '*/*', 'Authorization': 'Bearer ' + TOKEN},        
        method: 'PATCH',        
        body: formData
    })
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setUpdateTicketSr(json, data.indexes)));        
  }    
  
}

function setActiveProjects(data) { 
 return { type: GET_ACTIVE_SUCCESS, payload: data };
}

function setNewTicket(data) {  
 if(typeof data.TICKET_RD_ID != 'undefined'){  
  return { type: POST_ADD_TICKET_SUCCESS, payload: data };  
 }

 let errorText
 if(typeof data.error == 'undefined'){
  errorText = 'Unknown Error, please contact customer support'
 }
 else{
  errorText = data.error
 }

 return { type: POST_ADD_TICKET_ERROR, payload: errorText };
}

function setNewSrTicket(data) {  
 if(typeof data.TICKET_SR_ID != 'undefined'){  
  return { type: POST_ADD_TICKET_SR_SUCCESS, payload: data };  
 }

 let errorText
 if(typeof data.error == 'undefined'){
  errorText = 'Unknown Error, please contact customer support'
 }
 else{
  errorText = data.error
 }
 
 return { type: POST_ADD_TICKET_ERROR, payload: errorText }; 
}

function setUpdateTicket(data, indexes) {  
  if(typeof data.TICKET_RD_ID != 'undefined'){  
    return { type: PATCH_UPDATE_TICKET_SUCCESS, payload: data, indexes: indexes };
  }
  
  let errorText
  if(typeof data.error == 'undefined'){
    errorText = 'Unknown Error, please contact customer support'
   }
  else{
    errorText = data.error
  }
  
  return { type: PATCH_UPDATE_TICKET_ERROR, payload: errorText};  
}

function setUpdateTicketSr(data, indexes) {
  if(typeof data.TICKET_SR_ID != 'undefined'){  
    return { type: PATCH_UPDATE_TICKET_SR_SUCCESS, payload: data, indexes: indexes };
  }

  let errorText
  if(typeof data.error == 'undefined'){
    errorText = 'Unknown Error, please contact customer support'
  }
  else{
    errorText = data.error
  }
  return { type: PATCH_UPDATE_TICKET_SR_ERROR, payload: errorText};
}

function unsetTicket(data, indexes) { 
  try{
    if (data.status == 204) {
      return { type: DELETE_TICKET_SUCCESS, indexes: indexes };
    }        
  }
  catch(err){
    window.doMessage('Ticket cannot be deleted', 'Warning')
    return { type: 'error' }
  }      
  window.doMessage('Ticket cannot be deleted', 'Warning')
  return { type: 'error' }
}

function unsetTicketSr(data, indexes) { 
  try{
    if (data.status == 204) {
      return { type: DELETE_TICKET_SR_SUCCESS, indexes: indexes };
    }        
  }
  catch(err){
    window.doMessage('Ticket cannot be deleted', 'Warning')
    return { type: 'error' }
  }      
  window.doMessage('Ticket cannot be deleted', 'Warning')
  return { type: 'error' }
}

function addTicketRequest() {       
  return { type: POST_ADD_TICKET_REQUEST, payload: 'True' };    
}

export function onOffEditTicketForm(status) {    
  return (dispatch) => {        
    dispatch({
      type: ON_OFF_EDIT_TICKET_FORM,      
      payload: status      
    })    
  }
}

export function onOffEditSrTicketForm(status) {    
  return (dispatch) => {        
    dispatch({
      type: ON_OFF_EDIT_TICKET_SR_FORM,      
      payload: status      
    })    
  }
}




