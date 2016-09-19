
export const checkResponseStatus = function(response){
    if (response.status >= 200 && response.status < 300) {
        console.log("status: ", response.statusText);
        return response
    }

    if (response.status == 401) {
        //alert(response.statusText)
        //return response
        window.location = '/login'
    }    
    
    //var error = new Error(response.statusText)
    //error.response = response
    //return error
    //console.log(response)
    //console.log(response.json)
    return response
  }