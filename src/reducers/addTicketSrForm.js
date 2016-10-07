import {  
  SET_CONSTRUCTION_TYPE_ID
} from '../constants/AddTicketSrForm'

const initialState = {  
  constructionTypeId: '18'
}

export default function addTicketSrForm(state = initialState, action) {
  switch (action.type) {    

    case SET_CONSTRUCTION_TYPE_ID:      
      return { ...state, constructionTypeId: action.payload }    

    default:
      return state;
  }
}