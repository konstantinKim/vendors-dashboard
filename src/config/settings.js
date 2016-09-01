export const BACKEND_HOST = 'http://localhost:5000/api/v1/'
export const IMG_HOST = 'http://vd.test'
const token = localStorage.getItem('token')  
export const REQUEST_HEADERS = { headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}}