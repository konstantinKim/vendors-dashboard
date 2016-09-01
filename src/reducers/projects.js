import {  
  SWITCH_TAB,
  SET_COMPLETED_COUNT_SUCCESS,
} from '../constants/Projects'

const initialState = {  
  activeTab: 'activeList',
  completedCount: '0'
}

export default function projects(state = initialState, action) {
  switch (action.type) {    

    case SWITCH_TAB:      
      return { ...state, activeTab: action.payload }

    case SET_COMPLETED_COUNT_SUCCESS:      
      return { ...state, completedCount: action.payload }

    default:
      return state;
  }
}