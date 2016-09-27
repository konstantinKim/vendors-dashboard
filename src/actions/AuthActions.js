import { BACKEND_HOST } from '../config/settings'

function checkStatus(response) {
  if (response.status == 200) {
    console.log("status: ", response.statusText);    
    return response
  } else {    
    var error = new Error(response.statusText)    
    error.response = response
    //console.log(error)
    alert('Error: Incorrect Email or Password')
    throw error
  }
}

function checkSignUpStatus(response) {
  if (response.status == 200) {
    console.log("status: ", response.statusText);    
    return response
  } else {    
    console.log("status: ", response.statusText);    
    return response    

    /*var error = new Error(response.statusText)    
    error.response = response        
    throw error*/
  }
}

export function login(username, password) {  		
  return dispatch => fetch(BACKEND_HOST+'auth.json', { headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(username + ':' + password)))}})
  .then(checkStatus)
  .then(response => response.json())      
  .then(json => dispatch(setAuthData(json)))    
}

export function signUp(token, password) {     
  var formData  = new FormData();  
  formData.append('token', token);        
  formData.append('password', password);        

  return dispatch => {    
    fetch(BACKEND_HOST+'auth/signup.json', 
    {
        headers: {'Accept': '*/*'},        
        method: 'POST',        
        body: formData
    })
    .then(checkSignUpStatus)
    .then(response => response.json())    
    .then(json => dispatch(setAuthData(json)))
  }    
}

function setAuthData(data) {     
  
  console.log(data.error)
  if(data.error != undefined){    
    //console.log('error')    
    //return { type: 'GET_LOGIN_ERROR', payload: data };
    alert(data.error)    
  }
  else{
    // Put the object into storage
    localStorage.clear();
    localStorage.setItem('token', data);
    window.location = '/'    
  }
  
  //window.location = '/'      
}
