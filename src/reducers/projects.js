import {  
  SWITCH_TAB,
  SET_COMPLETED_COUNT_SUCCESS,
  SET_MATERIALS_SUCCESS,
  SET_FACILITIES_REQUEST,
  SET_FACILITIES_SUCCESS
} from '../constants/Projects'

const initialState = {  
  activeTab: 'activeList',
  completedCount: '0',
  materials: [],
  facilities: [],
  selectedFacilities: []  
}

export default function projects(state = initialState, action) {
  switch (action.type) {    

    case SWITCH_TAB:      
      return { ...state, activeTab: action.payload }

    case SET_COMPLETED_COUNT_SUCCESS:      
      return { ...state, completedCount: action.payload }

    case SET_MATERIALS_SUCCESS:      
      return { ...state, materials: action.payload }  

    case SET_FACILITIES_SUCCESS:      
      return { ...state, facilities: action.payload, selectedFacilities: action.selectedFacilities }    
    
    case SET_FACILITIES_REQUEST:      
      return { ...state, facilities: action.payload }    
      
    default:
      return state;
  }
}