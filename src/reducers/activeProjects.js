import {
  GET_ACTIVE_SUCCESS
} from '../constants/ActiveProjects'


const initialState = {
  sync: 'False',  
  projects: []
}

export default function activeProjects(state = initialState, action) {
  switch (action.type) {    
    case GET_ACTIVE_SUCCESS:
      return { ...state, projects: action.payload, sync: 'True' }

    default:
      return state;
  }
}