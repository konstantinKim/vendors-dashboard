
export const checkResponseStatus = function(response){
    if (response.status >= 200 && response.status < 300) {
        console.log("status: ", response.statusText);
        return response
    }

    if (response.status == 401) {
        window.location = '/login'
    }    
    
    var error = new Error(response.statusText)
    error.response = response
    alert(error)
    throw error
  }