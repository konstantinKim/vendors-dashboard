
export const checkResponseStatus = function(response){if (response.status >= 200 && response.status < 300) {
    console.log("status: ", response.statusText);
    return response
  } else {
    window.location = '/login'
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }}