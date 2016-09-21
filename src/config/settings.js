export const BACKEND_HOST = '/api/v1/'
export const IMG_HOST = ''//'http://vd.test'
const token = localStorage.getItem('token')  
export const REQUEST_HEADERS = {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}
export const TOKEN = token