import {  
  SWITCH_TAB
} from '../constants/Projects'

const initialState = {  
  activeTab: 'activeList'
}

export default function projects(state = initialState, action) {
  switch (action.type) {    

    case SWITCH_TAB:      
      return { ...state, activeTab: action.payload }

    default:
      return state;
  }
}