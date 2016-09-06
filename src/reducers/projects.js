import {  
  SWITCH_TAB,
  SET_COMPLETED_COUNT_SUCCESS,
  SET_MATERIALS_SUCCESS
} from '../constants/Projects'

const initialState = {  
  activeTab: 'activeList',
  completedCount: '0',
  materials: [{'MATERIAL_ID':'1', 'name': 'Mat 1'}, {'MATERIAL_ID':'2', 'name': 'Mat 2'}]
}

export default function projects(state = initialState, action) {
  switch (action.type) {    

    case SWITCH_TAB:      
      return { ...state, activeTab: action.payload }

    case SET_COMPLETED_COUNT_SUCCESS:      
      return { ...state, completedCount: action.payload }

    case SET_MATERIALS_SUCCESS:      
      return { ...state, materials: action.payload }  

    default:
      return state;
  }
}