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
      console.log(action.payload)
      return { ...state, 
        ticket: {          
          CONSTRUCTION_TYPE_ID: action.payload.CONSTRUCTION_TYPE_ID,
          FACILITY_ID: action.payload.FACILITY_ID,
          HAULER_ID: action.payload.HAULER_ID,
          PROJECT_ID: action.payload.PROJECT_ID,
          TICKET_SR_ID: action.payload.TICKET_SR_ID,
          description: action.payload.description,
          facility: action.payload.facility,
          image: action.payload.image,
          inventory: action.payload.inventory,
          material: action.payload.material,
          material_image: action.payload.material_image,
          material_image2: action.payload.material_image2,
          material_image3: action.payload.material_image3,
          material_image4: action.payload.material_image4,
          name: action.payload.name,
          percentage: action.payload.percentage,
          salvage_materials: action.payload.salvage_materials,
          submitted_by: action.payload.submitted_by,
          thedate_ticket: action.payload.thedate_ticket,
          ticket: action.payload.ticket,
          units: action.payload.units,
          weight: action.payload.weight          
        },
        indexes: action.indexes,
        CITY_ID: action.CITY_ID
      }    

    case ON_OFF_FORM:
      return { ...state, isDisabled: action.payload }

    default:
      return state;
  }
}