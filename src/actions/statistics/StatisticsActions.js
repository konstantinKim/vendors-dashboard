import {  
  SWITCH_TAB,  
  GET_RECYCLING_TOTALS_SUCCESS,
  GET_CARBON_FOOTPRINT_SUCCESS,
  GET_MATERIALS_STATS_SUCCESS,
  GET_FACILITIES_STATS_SUCCESS,
  GET_PROJECTS_STATS_SUCCESS,
  GET_BUILDINGS_STATS_SUCCESS,
  GET_HAULING_STATS_SUCCESS,
  SET_DATE_RANGE
} from '../../constants/Statistics'

import { BACKEND_HOST, REQUEST_HEADERS } from '../../config/settings'
import { checkResponseStatus } from '../../store/enhancers/checkStatus'

export function switchTab(tabId) {
  return (dispatch) => {        
    dispatch({
      type: SWITCH_TAB,
      payload: tabId      
    })    
  }
}

export function getRecyclingTotals(dateFrom, dateTo) {    	
  return dispatch => fetch(BACKEND_HOST+'statistics/recycling_totals/'+dateFrom+'/'+dateTo+'.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setRecyclingTotals(json)))    
}

export function getCarbonFootprint(dateFrom, dateTo) {      
  return dispatch => fetch(BACKEND_HOST+'statistics/carbon_footprint/'+dateFrom+'/'+dateTo+'.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setCarbonFootprint(json)))    
}

export function getMaterialsStats(dateFrom, dateTo) {      
  return dispatch => fetch(BACKEND_HOST+'statistics/materials/'+dateFrom+'/'+dateTo+'.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setMaterialsStats(json)))    
}

export function getFacilitiesStats(dateFrom, dateTo) {      
  return dispatch => fetch(BACKEND_HOST+'statistics/facilities/'+dateFrom+'/'+dateTo+'.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setFacilitiesStats(json)))    
}

export function getProjectsStats(dateFrom, dateTo) {      
  return dispatch => fetch(BACKEND_HOST+'statistics/projects/'+dateFrom+'/'+dateTo+'.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setProjectsStats(json)))    
}

export function getBuildingsStats(dateFrom, dateTo) {      
  return dispatch => fetch(BACKEND_HOST+'statistics/buildings/'+dateFrom+'/'+dateTo+'.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setBuildingsStats(json)))    
}

export function getHaulingStats(dateFrom, dateTo) {      
  return dispatch => fetch(BACKEND_HOST+'statistics/hauling/'+dateFrom+'/'+dateTo+'.json', {headers: REQUEST_HEADERS})
    .then(checkResponseStatus)    
    .then(response => response.json())    
    .then(json => dispatch(setHaulingStats(json)))    
}

export function setDateRange(dateFrom, dateTo) {        
  return { type: SET_DATE_RANGE, dateFrom: dateFrom, dateTo: dateTo }
}

function setRecyclingTotals(data) { 
 return { type: GET_RECYCLING_TOTALS_SUCCESS, payload: data };
}

function setCarbonFootprint(data) { 
 return { type: GET_CARBON_FOOTPRINT_SUCCESS, payload: data };
}

function setMaterialsStats(data) { 
 return { type: GET_MATERIALS_STATS_SUCCESS, payload: data };
}

function setFacilitiesStats(data) { 
 return { type: GET_FACILITIES_STATS_SUCCESS, payload: data };
}

function setProjectsStats(data) { 
 return { type: GET_PROJECTS_STATS_SUCCESS, payload: data };
}

function setBuildingsStats(data) { 
 return { type: GET_BUILDINGS_STATS_SUCCESS, payload: data };
}

function setHaulingStats(data) { 
 return { type: GET_HAULING_STATS_SUCCESS, payload: data };
}