import { BACKEND_HOST } from '../config/settings'

function checkStatus(response) {
  if (response.status == 200) {
    console.log("status: ", response.statusText);    
    return response
  } else {    
    var error = new Error(response.statusText)    
    error.response = response
    //console.log(error)
    alert('Error: Incorrect Email or Passord')
    throw error
  }
}

export function login(username, password) {  		
  return dispatch => fetch(BACKEND_HOST+'auth.json', { headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(username + ':' + password)))}})
  .then(checkStatus)
  .then(response => response.json())      
  .then(json => dispatch(setAuthData(json)))    
}

function setAuthData(data) {     
  // Put the object into storage
  if(data){
    localStorage.clear();
    localStorage.setItem('token', data);
    window.location = '/'
  }
  
  console.log(data)
  //window.location = '/'    
  //return { type: 'GET_LOGIN_ERROR', payload: data };
}

