import {
  GET_COMPLETED_SUCCESS
} from '../constants/CompletedProjects'

const initialState = {  
  projects: []
}

export default function completedProjects(state = initialState, action) {  
  switch (action.type) {    
    case GET_COMPLETED_SUCCESS:
      return { ...state, projects: action.payload }

    default:
      return state;
  }
}