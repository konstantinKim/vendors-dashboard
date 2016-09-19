import {  
  SET_UPDATE_TICKET_DATA,
  ON_OFF_FORM
} from '../constants/EditTicketForm'

const initialState = {
  CITY_ID: 0,  
  TICKET_ID: 0,
  ticket: '',
  MATERIAL_ID: 0,
  thedate: '',
  FACILITY_ID: 0,
  weight: '',
  units: 'tons',
  percentage: 100,
  submitted_by: '',
  isDisabled: 'False',
  indexes: {}
}

export default function editTicketForm(state = initialState, action) {
  switch (action.type) {    

    case SET_UPDATE_TICKET_DATA:            
      return { ...state, 
        CITY_ID: action.CITY_ID,
        TICKET_ID: action.payload.TICKET_RD_ID,
        ticket:  action.payload.ticket,
        MATERIAL_ID:  action.payload.MATERIAL_ID,
        thedate:  action.payload.thedate,
        FACILITY_ID:  action.payload.FACILITY_ID,
        weight:  action.payload.weight,
        units:  action.payload.units,
        percentage:  action.payload.percentage,
        submitted_by:  action.payload.submitted_by,
        indexes: action.indexes
      }    

    case ON_OFF_FORM:
      return { ...state, isDisabled: action.payload }

    default:
      return state;
  }
}