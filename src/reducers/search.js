import {  
  SET_MATERIALS_SUCCESS,
  UPDATE_STATE,
  SET_RESULTS
  
} from '../constants/Search'

const initialState = {  
  currentTab: 'find',
  materials: [],
  MATERIAL_ID: 0,
  zipcode: '',
  radius: 0,
  searchResults: []
}


export default function search(state = initialState, action) {
  switch (action.type) {        
    case SET_MATERIALS_SUCCESS:      
      return { ...state, materials: action.payload }

    case UPDATE_STATE:      
      return { ...state, state: action.payload }

    case SET_RESULTS:      
      return { ...state, searchResults: action.payload }    

    default:
      return state;
  }
}