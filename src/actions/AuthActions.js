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
  return dispatch => {
   fetch(BACKEND_HOST+'auth.json', { headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(username + ':' + password)))}})
  .then(checkStatus)
  .then(response => response.json())      
  .then(json => dispatch(setAuthData(json)))  
  }
}

export function confirmSignUp(token) {
  return dispatch => {    
    fetch(BACKEND_HOST+'auth/confirm_signup/'+token+'.json', 
    {
        headers: {'Accept': '*/*'}        
    })
    .then(checkSignUpStatus)
    .then(response => response.json())    
    .then(json => dispatch(setConfirmData(json)))    
  }    
}

export function loginByToken(token) {
  return dispatch => {    
    fetch(BACKEND_HOST+'auth/token_login/'+token+'.json', 
    {
        headers: {'Accept': '*/*'}        
    })
    .then(checkStatus)
    .then(response => response.json())      
    .then(json => dispatch(setAuthData(json)))      
  }    
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
    .then(json => dispatch(setSignUpData(json)))    
  }    
}

function setAuthData(data) {        
  console.log(data.error)
  if(data.error != undefined || data.token == undefined){    
    //console.log('error')    
    //return { type: 'GET_LOGIN_ERROR', payload: data };
    window.triggerSignUp('signup', data)
    alert(data.error)    
    throw new Error(data.error)
  }
  else{
    // Put the object into storage
    localStorage.clear();
    localStorage.setItem('token', data.token);        
    localStorage.setItem('email', data.email);
    localStorage.setItem('name', data.contact);
    localStorage.setItem('company', data.company);    
    window.location = '/'
  }
  
  //window.location = '/'      
}

function setSignUpData(data) {     
  
  console.log(data.error)
  if(data.error != undefined || data.token == undefined){    
    //console.log('error')    
    //return { type: 'GET_LOGIN_ERROR', payload: data };
    window.triggerSignUp('signup', data)
    alert(data.error)    
    throw new Error(data.error)
  }
  else{
    // Put the object into storage
    localStorage.clear();
    localStorage.setItem('token', data.token);        
    localStorage.setItem('email', data.email);
    localStorage.setItem('name', data.contact);
    localStorage.setItem('company', data.company);
    localStorage.setItem('isFirstLogin', 'true');
    window.location = '/settings'
  }     
}

function setConfirmData(data) {          
  if(!data){
    alert('Permission Denied')
    throw new Error('Permission Denied')      
  }

  if(data.error != undefined || data.token == undefined){    
    //console.log('error')    
    //return { type: 'GET_LOGIN_ERROR', payload: data };    
    alert(data.error)    
    throw new Error(data.error)      
  }
  else{    
    window.triggerSignUp('confirm', data)
  }
}
