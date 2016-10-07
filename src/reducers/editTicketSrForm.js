import {  
  SET_UPDATE_TICKET_SR_DATA,
  ON_OFF_FORM
} from '../constants/EditTicketSrForm'

const initialState = {
  ticket: {
    inventory: ''
  },
  CITY_ID: 0,
  isDisabled: 'False',
  indexes: {}
}

export default function editTicketSrForm(state = initialState, action) {
  switch (action.type) {    

    case SET_UPDATE_TICKET_SR_DATA:            
      return { ...state, 
        ticket: action.payload,
        indexes: action.indexes,
        CITY_ID: action.CITY_ID
      }    

    case ON_OFF_FORM:
      return { ...state, isDisabled: action.payload }

    default:
      return state;
  }
}