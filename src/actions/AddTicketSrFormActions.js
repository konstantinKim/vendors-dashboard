import {  
  SET_CONSTRUCTION_TYPE_ID
} from '../constants/AddTicketSrForm'

export function setConstructionTypeId(constructionTypeId) {  
  return (dispatch) => {        
    dispatch({
      type: SET_CONSTRUCTION_TYPE_ID,      
      payload: constructionTypeId
    })    
  }
}

